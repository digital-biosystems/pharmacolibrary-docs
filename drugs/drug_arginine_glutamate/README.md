<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05B&quot;,&quot;href&quot;:&quot;atc/A05B.md&quot;},{&quot;label&quot;:&quot;arginine glutamate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ArginineGlutamate_Wang2018_reference&quot;,&quot;label&quot;:&quot;Wang_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_arginine_glutamate/ArginineGlutamate_Wang2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# arginine glutamate

- **generic name:** arginine glutamate
- **ATC codes:** `A05BA01`
- **DrugBank:** [DB13207](https://go.drugbank.com/drugs/DB13207)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 14:29 | 1:13 | 0/0/1 | 0/0/0 | 0/0/0 | 21,459/1,166 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Wang_2018_reference](drugs/drug_arginine_glutamate/ArginineGlutamate_Wang2018_reference.md) | Wang J et al., Population pharmacokinetics of arginine…, Xenobiotica; the fate of fo… (2018) | [10.1080/00498254.2017.1370745](https://doi.org/10.1080/00498254.2017.1370745) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2018.pdf` | Wang J et al., Population pharmacokinetics of arginine…, Xenobiotica; the fate of fo… (2018) | popPK | 10 | [10.1080/00498254.2017.1370745](https://doi.org/10.1080/00498254.2017.1370745) | [28925806](https://pubmed.ncbi.nlm.nih.gov/28925806) | The paper reports a population PK study for arginine glutamate with explicit numeric values for CL, Q, V1, V2, Vmax, Km, and V provided in the text. |
| `Wang_2002.pdf` | Wang H et al., Luffangulin, a novel ribosome inactivat…, Life sciences (2002) | pd | 4 | [10.1016/s0024-3205(01)01466-7](https://doi.org/10.1016/s0024-3205(01)01466-7) | [11853228](https://www.ncbi.nlm.nih.gov/pubmed/11853228) | metadata signals extractable PD data (IC50) |
| `Wang_2003.pdf` | Wang HX et al., Isolation of cucurmoschin, a novel anti…, Peptides (2003) | pd | 4 | [10.1016/s0196-9781(03)00191-8](https://doi.org/10.1016/s0196-9781(03)00191-8) | [14499274](https://www.ncbi.nlm.nih.gov/pubmed/14499274) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-18T14:28:33.431814+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cruz_2025 | irrelevant | 0 | 0 | The paper is a review on viscosity mitigation for high-concentration protein therapeutics (antibodies) and does not study arginine_glutamate or report any pharmacokinetic parameters for it. |
| PD | Cruz_2025 | not_relevant | 0 | 0 | The paper is a review on formulation development and viscosity mitigation for biotherapeutics, containing no pharmacodynamic or exposure-response analysis for arginine glutamate. |
| popPK | Kernohan_2005 | irrelevant | 2 | 1 | The study reports only Cmax and Tmax for L-arginine (a component of the combination drug) and explicitly states that AUC and half-life were not calculated due to endogenous interference, failing to provide the quantitative disposition parameters (CL, V, ka) required for population PK modeling. |
| PD | Kernohan_2005 | not_relevant | 2 | 1 | The study reports PK parameters and time-based hemodynamic changes (mean differences vs placebo) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for arginine glutamate. |
| PD | Parkash_2002 | not_relevant | 0 | 0 | The paper reports the isolation and characterization of a plant-derived peptide (luffacylin) and its biological activity (IC50), but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for the drug arginine glutamate. |
| PD | Sato_2000 | not_relevant | 0 | 0 | The paper studies electrophysiological responses to amino acids (including arginine and glutamate) and chloride channel blockers, but does not report a pharmacodynamic exposure-response relationship or numeric PD parameters for arginine glutamate. |
| PD | Wang_2002 | not_relevant | 0 | 0 | The paper describes the isolation and characterization of a novel peptide (Luffangulin) and does not report any pharmacodynamic or exposure-response analysis for arginine glutamate. |
| PD | Wang_2003 | not_relevant | 0 | 0 | The paper focuses on the isolation and characterization of a novel antifungal peptide (cucurmoschin) from pumpkin seeds, not on the pharmacodynamics of arginine glutamate. |
| PD | Wang_2018 | not_relevant | 0 | 0 | The paper reports only population pharmacokinetic (PK) parameters (CL, V, Vmax, Km) and covariates, with no pharmacodynamic (PD) or exposure-response analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 14:28 UTC</sub>
