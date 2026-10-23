<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Vaborbactam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vaborbactam_Principe2022_reference&quot;,&quot;label&quot;:&quot;Principe_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vaborbactam/Vaborbactam_Principe2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Vaborbactam

- **generic name:** Vaborbactam
- **ATC codes:** `J01DH52`
- **DrugBank:** [DB12107](https://go.drugbank.com/drugs/DB12107) · **PubChem:** [CID 56649692](https://pubchem.ncbi.nlm.nih.gov/compound/56649692)
- **molar mass:** 297.13 g/mol (C12H16BNO5S) — DrugBank
- **groups:** approved, investigational

## About

Vaborbactam is a beta-lactamase inhibitor used in combination with a carbapenem antibiotic to treat urinary tract infections caused by resistant bacteria. It is an approved drug, used mainly in hospital settings for serious gram-negative infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27252228](https://www.wikidata.org/wiki/Q27252228) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vaborbactam | parent | 297.13 | C12H16BNO5S | DrugBank | [56649692](https://pubchem.ncbi.nlm.nih.gov/compound/56649692) | Fornari_2024, Reed_2025 |

## Start here

> **Principe_2022_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_vaborbactam/Vaborbactam_Principe2022_reference.md?tab=Simulation) · [record](drugs/drug_vaborbactam/Vaborbactam_Principe2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 6.4 | L/h | 6.4 L/h | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Principe_2022_reference](drugs/drug_vaborbactam/Vaborbactam_Principe2022_reference.md) |
| V | V | 20 | L | 20.0 L | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Principe_2022_reference](drugs/drug_vaborbactam/Vaborbactam_Principe2022_reference.md) |
| V | V | 24.3 | L | 24.3 L | acutely ill hospitalized patients with various degrees of renal dysfunction including continuous renal replacement therapy | 18 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Reed_2025_reference](drugs/drug_vaborbactam/Vaborbactam_Reed2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Principe_2022 · V</text><circle cx="295.4" cy="30.0" r="4" fill="#2e7d32"><title>Principe_2022 · V: 20 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Reed_2025 · V</text><circle cx="325.0" cy="46.0" r="4" fill="#ef6c00"><title>Reed_2025 · V: 24.3 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Principe_2022_reference](drugs/drug_vaborbactam/Vaborbactam_Principe2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Principe L et al., Microbiological, Clinical, and PK/PD Fe…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15040463](https://doi.org/10.3390/ph15040463) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Reed_2025_reference](drugs/drug_vaborbactam/Vaborbactam_Reed2025_reference.md) | — | 1-compartment (no model) | 5 | Reed G et al., Population pharmacokinetics of meropene…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00108-25](https://doi.org/10.1128/aac.00108-25) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Fornari_2024_reference](drugs/drug_vaborbactam/Vaborbactam_Fornari2024_reference.md) | — | general linear (no model) | 6 | Fornari C et al., Dose rationale for the use of meropenem…, British journal of clinical… (2024) | [10.1111/bcp.16145](https://doi.org/10.1111/bcp.16145) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vaborbactam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:55 | 6:43 | 2/1/0 | 0/0/0 | 0/0/0 | 466,833/23,293 | einfracz / qwen3.8-27b | 12 | 1/11 | 12/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 19 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhuang_2020.pdf` | Zhuang L et al., Evaluation of Hemodialysis Effect on Ph…, Journal of clinical pharmac… (2020) | popPK | 5 | [10.1002/jcph.1595](https://doi.org/10.1002/jcph.1595) | [32149406](https://pubmed.ncbi.nlm.nih.gov/32149406) | The paper describes a population PK study for vaborbactam in ESRD patients, but no quantitative parameter values (CL, V, etc.) are present in the provided evidence. |

<sub>queue written 2026-10-07T11:49:47.799432+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Assefa_2024 | irrelevant | 1 | 1 | The paper is a systematic review of PK/PD targets (fAUC/MIC) for beta-lactamase inhibitors, reporting exposure indices rather than quantitative disposition parameters (CL, V, Q, ka) for vaborbactam. |
| popPK | Bhavnani_2022 | irrelevant | 4 | 1 | The paper is a PK-PD target attainment analysis that uses existing population PK models (referenced in citations) and provides simulated exposure metrics (AUC distributions) rather than reporting the quantitative disposition parameters (CL, V, etc.) for vaborbactam itself. |
| popPK | Crass_2019 | irrelevant | 0 | 0 | The paper is a review of renal function estimation methodologies and does not report original quantitative pharmacokinetic parameters for vaborbactam. |
| popPK | Gatti_2021 | irrelevant | 0 | 0 | This is a narrative review of novel beta-lactams and does not report specific quantitative PK parameters for vaborbactam. |
| popPK | Gatti_2023 | irrelevant | 1 | 0 | This is a review article discussing PK/PD optimization concepts for beta-lactams without providing original quantitative PK parameter values for vaborbactam. |
| popPK | Gatti_2023_2 | irrelevant | 1 | 0 | The study reports PK/PD target attainment (ratios) and uses a dose/clearance formula but does not report quantitative PK parameters (CL, V, half-life) for vaborbactam. |
| popPK | Gatti_2024 | irrelevant | 3 | 2 | The paper is a biliary PK/PD case series reporting concentration ratios and MIC targets, not a population-PK study reporting standard quantitative disposition parameters like clearance, volume, or intercompartmental clearance. |
| popPK | Han_2021 | irrelevant | 2 | 0 | The paper is a Monte Carlo simulation study that does not report original population pharmacokinetic parameter values (clearance, volume, etc.) for vaborbactam, instead utilizing data from other sources. |
| popPK | Lombardi_2024 | irrelevant | 0 | 0 | The paper is a narrative review of antibiotics in liver transplantation and does not report specific quantitative population pharmacokinetic parameters (CL, V, etc.) for vaborbactam. |
| popPK | Lombardi_2026 | irrelevant | 1 | 0 | This is a narrative review discussing multiple new antibiotics including meropenem/vaborbactam, but it does not report original quantitative pharmacokinetic parameters (CL, V, ka, etc.) for vaborbactam. |
| popPK | OJeanson_2025 | irrelevant | 2 | 0 | The paper is a simulation study using previously published PopPK models to calculate probability of target attainment (PTA), and it does not report original numeric disposition parameters (CL, V, etc.) for vaborbactam in the provided evidence. |
| popPK | Principe_2022 | irrelevant | 1 | 0 | This is a review paper covering many beta-lactam/beta-lactamase inhibitor combinations, and while it mentions meropenem/vaborbactam, it does not provide specific quantitative PK parameters (CL, Vd, etc.) for vaborbactam itself in the provided text. |
| popPK | Rando_2024 | irrelevant | 2 | 0 | This is a systematic review of other studies and does not provide original quantitative PK parameter values for vaborbactam in the text. |
| popPK | Trang_2021 | relevant | 10 | 4 | This is a population PK study for vaborbactam, but the specific numeric parameter estimates (CL, V, etc.) are located in Tables 2/3 and Supplementary Tables S1/S2, which are not included in the provided evidence text. |
| popPK | Zhanel_2018 | relevant | 4 | 3 | The paper is a review that reports approximate population PK parameters (Vd, t1/2) for vaborbactam but lacks detailed clearance (CL) values or compartmental parameters required for robust extraction. |
| popPK | Zhuang_2020 | irrelevant | 5 | 0 | The paper describes a population PK study for vaborbactam in ESRD patients, but no quantitative parameter values (CL, V, etc.) are present in the provided evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 11:49 UTC</sub>
