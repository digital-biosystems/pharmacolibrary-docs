<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;cemiplimab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cemiplimab_Nguyen2022_tumor_type_study_a&quot;,&quot;label&quot;:&quot;Nguyen_2022_tumor_type_study_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_tumor_type_study_a.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# cemiplimab

- **generic name:** cemiplimab
- **ATC codes:** `L01FF06`, `L01XC33`
- **DrugBank:** [DB14707](https://go.drugbank.com/drugs/DB14707) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Cemiplimab is a monoclonal antibody that blocks PD-1 and is used to treat squamous cell carcinoma. It is an approved cancer medicine, authorised in the European Union, and is also being studied for other uses.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:43 | 9:19 | 0/4/1 | 0/0/0 | 0/0/0 | 324,904/52,985 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Nguyen_2022_tumor_type_study_a](drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_tumor_type_study_a.md) | ▶ model + simulator | 1-compartment, IV | 2 | Nguyen JH et al., Population pharmacokinetics modeling an…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12855](https://doi.org/10.1002/psp4.12855) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.643). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Nguyen_2022_final_poppk_model](drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_final_poppk_model.md) | — | 2-compartment (no model) | 5 | Nguyen JH et al., Population pharmacokinetics modeling an…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12855](https://doi.org/10.1002/psp4.12855) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Paccaly_2021_reference](drugs/drug_cemiplimab/Cemiplimab_Paccaly2021_reference.md) | — | 1-compartment (no model) | 0 | Paccaly AJ et al., Fixed Dose of Cemiplimab in Patients wi…, Advances in therapy (2021) | [10.1007/s12325-021-01638-5](https://doi.org/10.1007/s12325-021-01638-5) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.417). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Shang_2022_reference](drugs/drug_cemiplimab/Cemiplimab_Shang2022_reference.md) | — | 2-compartment (no model) | 2 | Shang J et al., Population pharmacokinetic models of an…, Frontiers in immunology (2022) | [10.3389/fimmu.2022.871372](https://doi.org/10.3389/fimmu.2022.871372) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2021_reference](drugs/drug_cemiplimab/Cemiplimab_Yang2021_reference.md) | — | 1-compartment (no model) | 0 | Yang F et al., Population pharmacokinetic characterist…, Journal of pharmacokinetics… (2021) | [10.1007/s10928-021-09739-y](https://doi.org/10.1007/s10928-021-09739-y) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cemiplimab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PDCD1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baranda_2024 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of SAR439459, while cemiplimab is only a co-administered agent and no quantitative PK parameters for cemiplimab are provided. |
| popPK | Yilmaz_2024 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of diC6-THIO, and cemiplimab is mentioned only in the context of a different clinical trial, with no PK parameters reported for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:35 UTC</sub>
