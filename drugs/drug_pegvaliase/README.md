<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;pegvaliase&quot;}]"></div>

# pegvaliase

- **generic name:** pegvaliase
- **ATC codes:** `A16AB19`
- **DrugBank:** [DB12839](https://go.drugbank.com/drugs/DB12839) · **PubChem:** [CID 86278362](https://pubchem.ncbi.nlm.nih.gov/compound/86278362)
- **groups:** approved, investigational

## About

Pegvaliase is an enzyme therapy used to treat phenylketonuria. It is authorised in the European Union and is an approved medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27284634](https://www.wikidata.org/wiki/Q27284634) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:20 | 1:40 | 0/0/0 | 0/0/0 | 0/0/0 | 59,209/1,715 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/8 | 5/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pegvaliase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PAH (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 81 matched, 37 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Harding_2025.pdf` | Harding CO et al., Long-term management strategies for peg…, Genetics in medicine : offi… (2025) | popPK | 8 | [10.1016/j.gim.2025.101459](https://doi.org/10.1016/j.gim.2025.101459) | [40411344](https://pubmed.ncbi.nlm.nih.gov/40411344) | The paper describes a PK/PD model for pegvaliase clearance in humans, but specific numeric parameter values are not present in the provided text. |

<sub>queue written 2026-10-05T11:19:54.950371+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelnabi_2021 | irrelevant | 0 | 0 | The paper studies the antiviral PF-07321332 in hamsters and does not involve pegvaliase. |
| PD | Abdelnabi_2021 | not_relevant | 1 | 2 | Paper concerns PF-07321332 (nirmatrelvir), not pegvaliase; it reports a population PK model with in vitro EC50 comparisons but no PD/exposure-response model or derivable in-vivo PD parameters. |
| popPK | Baek_2024 | irrelevant | 0 | 0 | The paper studies mRNA therapeutics for metabolic disorders and mentions pegvaliase only as a standard of care for PKU, providing no pharmacokinetic data for pegvaliase. |
| PD | Baek_2024 | not_relevant | 5 | 2 | PK/PD models were developed and dose-response curves simulated (Fig. 5), but no numeric PD parameters (Emax, EC50, slope, etc.) are reported or derivable from the provided text. |
| popPK | Battiston_2021 | irrelevant | 0 | 0 | The paper studies corticosteroid dimer implants (dexamethasone) and does not involve pegvaliase. |
| PD | Battiston_2021 | not_relevant | 1 | 0 | Paper is a drug-delivery materials study (dexamethasone dimer implants); only qualitative efficacy comparisons in animals, no concentration-effect or dose-response PD parameters for pegvaliase (drug not even studied). |
| popPK | Charbonneau_2021 | irrelevant | 0 | 0 | The paper focuses on a synthetic biotic (SYNB1618) for phenylketonuria and does not study pegvaliase. |
| PD | Charbonneau_2021 | not_relevant | 0 | 0 | The paper models SYNB1618 (synthetic biotic) Phe-lowering activity, not pegvaliase; no pegvaliase exposure- or dose-response PD relationship is reported. |
| PGx | Consentino_2025 | not_relevant | 0 | 0 | The paper describes genotype-phenotype correlations in PKU patients but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of pegvaliase. |
| popPK | Cuerq_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vitamin E formulations (tocofersolan and alpha-tocopherol acetate) in patients with lipid malabsorption disorders, not pegvaliase. |
| PD | Cuerq_2018 | not_relevant | 1 | 0 | PK/bioavailability comparison of vitamin E formulations only; no concentration-effect or dose-response PD relationship or parameters reported. |
| popPK | Delbreil_2024 | irrelevant | 0 | 0 | The paper is a review of material innovations for PKU treatments and does not report quantitative pharmacokinetic parameters for pegvaliase. |
| PGx | Delbreil_2024 | not_relevant | 0 | 0 | The paper is a review of PKU treatments and material innovations, discussing pegvaliase's mechanism and immunogenicity, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Elhawary_2022 | not_relevant | 0 | 0 | The paper is a general review of PKU etiology and management that mentions pegvaliase as a treatment option but does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Gupta_2018 | irrelevant | 0 | 0 | The study focuses on immunogenicity and safety outcomes, not pharmacokinetic parameters like clearance or volume. |
| popPK | Gámez_2005 | irrelevant | 0 | 0 | The paper studies pegylated phenylalanine ammonia-lyase (PAL) for phenylketonuria, not pegvaliase. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Gómez-Perales_2021 | not_relevant | 0 | 0 | Paper is about "iodine allergy" myth in nuclear medicine; no pegvaliase PD or exposure-response data. |
| popPK | Harding_2025 | relevant | 8 | 2 | The paper describes a PK/PD model for pegvaliase clearance in humans, but specific numeric parameter values are not present in the provided text. |
| popPK | Hausmann_2019 | irrelevant | 0 | 0 | The paper is a consensus statement on the immunological profile and management of hypersensitivity reactions, containing no quantitative pharmacokinetic parameters. |
| PGx | Ikeda_2005 | not_relevant | 0 | 0 | The paper describes the development and efficacy of pegvaliase (PEG-PAL) in mice but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Israni_2026 | irrelevant | 0 | 0 | The paper is a review of natural anti-inflammatory compounds and does not mention pegvaliase or report any pharmacokinetic parameters. |
| PD | Israni_2026 | not_relevant | 0 | 0 | Review of natural anti-inflammatory compounds; no pegvaliase PD or exposure-response data. |
| PGx | Jones_2026 | not_relevant | 0 | 0 | The paper is a narrative review of nutritional and therapeutic strategies for PKU and does not report specific pharmacogenomic effects on pegvaliase PK/PD parameters. |
| popPK | Joshi_2019 | irrelevant | 0 | 0 | The paper is a review of the enzyme CysK and its biological functions, containing no pharmacokinetic data for pegvaliase. |
| PD | Joshi_2019 | not_relevant | 0 | 0 | Review of CysK enzyme biology; no pegvaliase PD or exposure-response data. |
| popPK | Kawatra_2020 | irrelevant | 0 | 0 | The paper is a review of microbial phenylalanine ammonia lyase applications and does not report original quantitative pharmacokinetic parameters for pegvaliase. |
| PD | Kawatra_2020 | not_relevant | 1 | 0 | General review of microbial PAL biomedical applications; only qualitative mention of improved PD/PK properties, no numeric PD or exposure-response data for pegvaliase. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The paper is a review of single enzyme nanoparticles and does not report quantitative pharmacokinetic parameters for pegvaliase. |
| PGx | Lah_2026 | not_relevant | 0 | 0 | The paper discusses sepiapterin and PAH variants in PKU, not pegvaliase. |
| popPK | Longo_2018 | irrelevant | 0 | 0 | The paper reports pharmacodynamic outcomes (plasma phenylalanine levels) and safety data, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for pegvaliase. |
| popPK | Qi_2021 | irrelevant | 2 | 0 | The paper is a review/rationale discussing PK concepts (clearance, exposure) but does not report specific quantitative parameter values (CL, V, t1/2) in the provided text. |
| PD | Qi_2021 | not_relevant | 3 | 1 | Abstract describes only qualitative exposure–Phe reduction relationships across dose levels; no numeric PD parameters (Emax, EC50, slope) are stated or derivable from the provided text. |
| PGx | Sarkissian_2022 | not_relevant | 0 | 0 | The text is a biographical sketch of Charles Scriver and does not report any pharmacogenomic data or PK/PD parameters for pegvaliase. |
| PGx | Smith_2025 | not_relevant | 0 | 0 | The paper is a clinical guideline for PAH deficiency management and does not report pharmacogenomic effects on the PK/PD of pegvaliase. |
| PGx | Tayeb_2026 | not_relevant | 0 | 0 | The paper is a general review of PKU in Saudi Arabia and mentions pegvaliase only as a therapeutic option without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Williams_2025 | irrelevant | 0 | 0 | The paper is a review of sepiapterin for phenylketonuria and does not contain pharmacokinetic data for pegvaliase. |
| PD | Williams_2025 | not_relevant | 1 | 0 | Review abstract on sepiapterin (not pegvaliase) with only qualitative mention of Phe reduction; no numeric PD parameters. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | Text is only a conference annual meetings notice with no PD or dose-response content. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 16 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | Text is only a conference abstract listing (ESICM LIVES 2023) with no pegvaliase PD content. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
