<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Vaborbactam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vaborbactam_Principe2022_reference&quot;,&quot;label&quot;:&quot;Principe_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vaborbactam/Vaborbactam_Principe2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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
| vaborbactam | parent | 297.13 | C12H16BNO5S | DrugBank | [56649692](https://pubchem.ncbi.nlm.nih.gov/compound/56649692) | Reed_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:43 | 5:21 | 1/1/1 | 0/0/0 | 0/0/0 | 423,236/23,624 | einfracz / qwen3.8-27b | 12 | 1/11 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: partial</span> | [Principe_2022_reference](drugs/drug_vaborbactam/Vaborbactam_Principe2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Principe L et al., Microbiological, Clinical, and PK/PD Fe…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15040463](https://doi.org/10.3390/ph15040463) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Reed_2025_reference](drugs/drug_vaborbactam/Vaborbactam_Reed2025_reference.md) | — | 1-compartment (no model) | 6 | Reed G et al., Population pharmacokinetics of meropene…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00108-25](https://doi.org/10.1128/aac.00108-25) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Fornari_2024_reference](drugs/drug_vaborbactam/Vaborbactam_Fornari2024_reference.md) | — | 1-compartment (no model) | 0 | Fornari C et al., Dose rationale for the use of meropenem…, British journal of clinical… (2024) | [10.1111/bcp.16145](https://doi.org/10.1111/bcp.16145) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vaborbactam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 19 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhuang_2020.pdf` | Zhuang L et al., Evaluation of Hemodialysis Effect on Ph…, Journal of clinical pharmac… (2020) | popPK | 5 | [10.1002/jcph.1595](https://doi.org/10.1002/jcph.1595) | [32149406](https://pubmed.ncbi.nlm.nih.gov/32149406) | The study is a modeling/simulation paper using pre-existing population PK models; while relevant to vaborbactam, no specific quantitative parameter values (CL, V, etc.) are provided in the abstract or evidence. |

<sub>queue written 2026-10-15T00:38:30.790745+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Assefa_2024 | irrelevant | 1 | 1 | This is a systematic review of PK/PD exposure targets (efficacy indices like fAUC/MIC) for beta-lactamase inhibitors, not a study reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for vaborbactam. |
| popPK | Bhavnani_2022 | irrelevant | 2 | 0 | The paper is a PK-PD target attainment simulation study that relies on pre-existing population PK models (cited as reference 10) and does not report original numeric PK parameter values (CL, V, etc.) for vaborbactam in the provided text. |
| popPK | Crass_2019 | irrelevant | 0 | 0 | The paper is a review of renal function estimation in drug development and only mentions meropenem/vaborbactam as a recent example without providing specific PK parameter values for vaborbactam. |
| popPK | Gatti_2021 | irrelevant | 1 | 0 | This is a narrative review article focusing on PK/PD target attainment in renal patients, not a primary PK study reporting quantitative parameter values for vaborbactam. |
| popPK | Gatti_2023 | irrelevant | 2 | 0 | This is a narrative review on PK/PD optimization strategies for beta-lactams and does not report original quantitative pharmacokinetic parameters or population models for vaborbactam. |
| popPK | Gatti_2023_2 | irrelevant | 2 | 1 | The study reports PK/PD target attainment rates and a calculated AUC/CT ratio for vaborbactam as part of a TDM program, but does not provide quantitative population pharmacokinetic parameter estimates (CL, V, ka) or a compartmental model for vaborbactam. |
| popPK | Gatti_2024 | relevant | 3 | 6 | The paper reports individual biliary and plasma concentrations and PK/PD ratios (AUC, Css) for vaborbactam in humans, but lacks population-level parameter estimates (CL, V, Q, ka) or a compartmental model. |
| popPK | Han_2021 | irrelevant | 2 | 0 | The study is a Monte Carlo simulation using published PK parameters to evaluate regimens; it does not report original quantitative PK parameters (CL, V, Q) for vaborbactam in the evidence. |
| popPK | Lombardi_2024 | irrelevant | 0 | 0 | The paper is a clinical review discussing antibiotic usage in liver transplantation and does not provide specific population pharmacokinetic parameter values (CL, V, Q) for vaborbactam. |
| popPK | Lombardi_2026 | irrelevant | 2 | 0 | The paper is a review of clinical evidence for new antibiotics in lung transplantation, mentioning meropenem/vaborbactam but providing no quantitative pharmacokinetic parameter values (CL, V, etc.) for vaborbactam. |
| popPK | OJeanson_2025 | irrelevant | 2 | 0 | The paper is a pharmacometric simulation study that uses previously published PopPK models to calculate probability of target attainment, but it does not report original quantitative disposition parameters (CL, V, Q, ka) for vaborbactam in the provided evidence. |
| popPK | Principe_2022 | irrelevant | 3 | 2 | The paper is a comprehensive review of multiple beta-lactam/beta-lactamase inhibitor combinations, but the extracted evidence does not contain any quantitative PK parameter values specifically for vaborbactam (only for other drugs like aztreonam, avibactam, enmetazobactam, taniborbactam, zidebactam, and cefiderocol). |
| popPK | Rando_2024 | irrelevant | 1 | 0 | This is a systematic review summarizing PK/PD data for several beta-lactams including vaborbactam, but it does not report specific quantitative pharmacokinetic parameter values (e.g., CL, V) for vaborbactam in the provided text. |
| popPK | Trang_2021 | relevant | 10 | 4 | The paper is a population PK study for vaborbactam, but the specific numeric parameter values (CL, V) are in Tables 3 and 5 or Supplementary Material which are not included in the provided evidence (only AUC summary statistics are visible). |
| popPK | Zhanel_2018 | irrelevant | 4 | 2 | The paper is a review summarizing PK parameters (Vd ~18 L, t1/2 1.3-2.0 h) for vaborbactam but lacks the quantitative compartmental parameters (CL, Q, ka) and specific population model details required for extraction. |
| popPK | Zhuang_2020 | irrelevant | 5 | 0 | The study is a modeling/simulation paper using pre-existing population PK models; while relevant to vaborbactam, no specific quantitative parameter values (CL, V, etc.) are provided in the abstract or evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:38 UTC</sub>
