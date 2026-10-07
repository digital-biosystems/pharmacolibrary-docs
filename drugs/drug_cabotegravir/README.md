<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;cabotegravir&quot;}]"></div>

# cabotegravir

- **generic name:** cabotegravir
- **ATC codes:** `J05AJ04`
- **DrugBank:** [DB11751](https://go.drugbank.com/drugs/DB11751) · **PubChem:** [CID 54713659](https://pubchem.ncbi.nlm.nih.gov/compound/54713659)
- **molar mass:** 405.358 g/mol (C19H17F2N3O5) — DrugBank
- **groups:** approved, investigational

## About

Cabotegravir is an antiviral drug used to treat HIV infection. It is an authorised medicine in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15411012](https://www.wikidata.org/wiki/Q15411012) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cabotegravir | parent | 405.358 | C19H17F2N3O5 | DrugBank | [54713659](https://pubchem.ncbi.nlm.nih.gov/compound/54713659) | Thoueille_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:31 | 10:18 | 0/1/1 | 0/0/0 | 0/0/0 | 332,120/19,681 | einfracz / qwen3.8-27b | 13 | 4/9 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.6258)</sub><br><sub>route_to: `human_review`</sub> | [Thoueille_2024_reference](drugs/drug_cabotegravir/Cabotegravir_Thoueille2024_reference.md) | — | 1-compartment (no model) | 2 | Thoueille P et al., Population Pharmacokinetics of Cabotegr…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3240](https://doi.org/10.1002/cpt.3240) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Han_2024_2_reference](drugs/drug_cabotegravir/Cabotegravir_Han2024v2_reference.md) | — | 1-compartment (no model) | 0 | Han K et al., Population pharmacokinetics of cabotegr…, Antimicrobial agents and ch… (2024) | [10.1128/aac.00880-24](https://doi.org/10.1128/aac.00880-24) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cabotegravir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `UGT1A1` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 20 returned
- **screened:** 3  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yu_2022.pdf` | Yu Y et al., A population pharmacokinetic model base…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.15477](https://doi.org/10.1111/bcp.15477) | [35949044](https://pubmed.ncbi.nlm.nih.gov/35949044) | The paper is a population PK study for cabotegravir in humans, but the evidence text provides only model structure and covariate relative effects (e.g., 67% higher ka in males) without explicit numerical values for CL, V, ka, or Q. |

<sub>queue written 2026-10-07T14:23:16.639516+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheung_2022 | irrelevant | 0 | 0 | The study is an in vitro phenotypic resistance assay measuring viral susceptibility (EC50/IC50), not a pharmacokinetic study reporting disposition parameters for cabotegravir. |
| popPK | Di_2026 | irrelevant | 2 | 0 | The paper is a review focused on Bictegravir (BIC) pharmacokinetics, and while Cabotegravir is mentioned in the abstract/keywords, no specific quantitative PK parameter values for Cabotegravir are provided in the text or tables. |
| popPK | Fernández-González_2025 | relevant | 5 | 2 | The study measures trough concentrations of cabotegravir in humans, providing descriptive PK data and covariate effects, but does not report quantitative compartmental parameters (CL, V, Q, ka) or a population-PK model. |
| popPK | Fernández_2026 | irrelevant | 2 | 0 | The study reports measured concentrations in biological fluids rather than quantitative compartmental pharmacokinetic parameters (e.g., clearance, volume) for cabotegravir. |
| popPK | Ford_2025 | relevant | 4 | 1 | The paper reports population PK (PPK) simulations and NCA parameters for cabotegravir, but specific quantitative disposition parameters (CL, V, Q) or detailed geometric means are not explicitly listed in the provided text (referred to as being in tables/figures/supplementary). |
| popPK | Hassounah_2017 | irrelevant | 0 | 0 | The study reports in vitro antiviral susceptibility (EC50) of SIV and HIV-1 mutants to cabotegravir, not pharmacokinetic disposition parameters. |
| popPK | Letendre_2020 | relevant | 4 | 2 | The paper reports steady-state concentrations and CSF-to-plasma ratios for cabotegravir but does not provide quantitative compartmental PK parameters (CL, V, ka) or population model estimates. |
| popPK | Li_2022 | irrelevant | 0 | 0 | This is a review of HIV reverse transcriptase inhibitors; cabotegravir (an integrase inhibitor) is only mentioned in the list of approved regimens and does not have its own pharmacokinetic parameters reported in this text. |
| popPK | Schneiderman_2022 | irrelevant | 0 | 0 | The study is an in-vitro virological investigation of cabotegravir's efficacy against HTLV-1 and does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for the drug's disposition in humans or animals. |
| popPK | Smith_2025 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral potency study measuring EC50 values for INSTIs against HIV mutants, not a pharmacokinetic study reporting disposition parameters for cabotegravir. |
| popPK | Trezza_2015 | irrelevant | 3 | 0 | This is a review article that summarizes pharmacokinetic characteristics (half-life, AUC) of cabotegravir but does not report original quantitative compartmental parameters (CL, V, ka, Q) or population-PK model parameter estimates in the text. |
| popPK | Yu_2022 | relevant | 10 | 2 | The paper is a population PK study for cabotegravir in humans, but the evidence text provides only model structure and covariate relative effects (e.g., 67% higher ka in males) without explicit numerical values for CL, V, ka, or Q. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:23 UTC</sub>
