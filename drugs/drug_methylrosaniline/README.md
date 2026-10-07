<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;methylrosaniline&quot;}]"></div>

# methylrosaniline

- **generic name:** methylrosaniline
- **ATC codes:** `D01AE02`, `G01AX09`
- **DrugBank:** [DB00406](https://go.drugbank.com/drugs/DB00406) · **PubChem:** [CID 3468](https://pubchem.ncbi.nlm.nih.gov/compound/3468)
- **molar mass:** 372.5258 g/mol (C25H30N3) — DrugBank
- **groups:** approved

## About

Methylrosaniline (crystal violet, gentian violet) is a dye used as a topical antifungal and antiseptic, for example for skin fungal infections and as a gynecological antiinfective. It remains an approved medicine and is used topically, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q63390508](https://www.wikidata.org/wiki/Q63390508) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:54 | 2:11 | 0/0/0 | 0/0/1 | 0/0/0 | 87,667/1,667 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Allgardsson_2017_AChE](drugs/drug_methylrosaniline/pd_Allgardsson_2017_AChE.md) | AChE activity biomarker turnover ← crystal violet | — | Allgardsson A et al., An Unusual Dimeric Inhibitor of Acetylc…, Molecules (Basel, Switzerla… (2017) | [10.3390/molecules22091433](https://doi.org/10.3390/molecules22091433) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methylrosaniline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLC22A1` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (intercalation).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agostini_2023 | irrelevant | 0 | 0 | The paper investigates the antifouling activity and toxicity of isonitrosoacetanilides, not the pharmacokinetics of methylrosaniline. |
| popPK | Allgardsson_2017 | irrelevant | 0 | 0 | The paper is an in-vitro structural and mechanistic study of crystal violet (a methylrosaniline derivative) binding to acetylcholinesterase, reporting IC50 and Hill coefficients rather than pharmacokinetic disposition parameters. |
| popPK | Almeida_2024 | irrelevant | 0 | 0 | The study investigates the antimicrobial and trypanocidal activities of a lectin (CrataBL) and does not involve methylrosaniline or pharmacokinetic modeling. |
| popPK | Berntssen_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of leuco crystal violet and leuco malachite green in Atlantic salmon, not methylrosaniline. |
| popPK | Fong_2017 | irrelevant | 0 | 0 | The paper investigates bacteriophage activity against Pseudomonas aeruginosa biofilms and contains no pharmacokinetic data for methylrosaniline. |
| popPK | Karim_2026 | irrelevant | 0 | 0 | The paper describes a microbiological assay for bacterial biofilms using crystal violet (methylrosaniline) as a stain, not a pharmacokinetic study of the drug. |
| popPK | Lim_2002 | irrelevant | 0 | 0 | The paper studies the effect of alphaMSH analogues on rat bones and does not involve methylrosaniline or pharmacokinetic parameters. |
| popPK | Mnisi_2024 | irrelevant | 0 | 0 | The paper investigates the antibacterial and antioxidant properties of plant extracts and does not involve methylrosaniline or pharmacokinetic modeling. |
| popPK | Nakada_2024 | irrelevant | 0 | 0 | The study investigates the photodynamic therapy efficacy of verteporfin in cancer cell lines and does not report pharmacokinetic parameters for methylrosaniline. |
| popPK | Nyström_2025 | irrelevant | 0 | 0 | The study evaluates the in vitro antiviral activity of remdesivir and sofosbuvir against tick-borne encephalitis virus, not the pharmacokinetics of methylrosaniline. |
| popPK | Okuda_2012 | irrelevant | 0 | 0 | The paper studies bacterial biofilm formation and is unrelated to the pharmacokinetics of methylrosaniline. |
| popPK | Okuda_2012_2 | irrelevant | 0 | 0 | The paper studies bacterial biofilm formation and is unrelated to the pharmacokinetics of methylrosaniline. |
| popPK | Taherkhani_2013 | irrelevant | 0 | 0 | The paper describes in vitro anti-rotaviral activity of a plant extract and contains no pharmacokinetic data for methylrosaniline. |
| popPK | Weldon_2001 | irrelevant | 0 | 0 | The paper is an in-vitro study on NF-kappa B-mediated chemoresistance in breast cancer cells and does not involve methylrosaniline or pharmacokinetic parameters. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study for coronaviruses and does not contain any pharmacokinetic data for methylrosaniline. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
