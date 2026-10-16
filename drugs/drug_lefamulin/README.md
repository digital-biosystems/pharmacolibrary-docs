<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;lefamulin&quot;}]"></div>

# lefamulin

- **generic name:** lefamulin
- **ATC codes:** `J01XX12`
- **DrugBank:** [DB12825](https://go.drugbank.com/drugs/DB12825) · **PubChem:** [CID 25185057](https://pubchem.ncbi.nlm.nih.gov/compound/25185057)
- **molar mass:** 507.73 g/mol (C28H45NO5S) — DrugBank
- **groups:** approved

## About

Lefamulin is an antibacterial used to treat bacterial pneumonia, including community-acquired infections. It is approved and authorised in the European Union, though it is not among the most widely used antibiotics.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q24890013](https://www.wikidata.org/wiki/Q24890013) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lefamulin | parent | 507.73 | C28H45NO5S | DrugBank | [25185057](https://pubchem.ncbi.nlm.nih.gov/compound/25185057) | Bhavnani_2019, Zhang_2019, van_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:11 | 18:16 | 1/4/2 | 1/0/0 | 0/0/0 | 416,370/74,088 | einfracz / qwen3.8-27b | 8 | 1/7 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> | [Hu_2023_reference](drugs/drug_lefamulin/Lefamulin_Hu2023_reference.md) | — | 1-compartment (no model) | 2 | Hu Y et al., Pharmacokinetic, Pharmacokinetic/Pharma…, Antibiotics (Basel, Switzer… (2023) | [10.3390/antibiotics12091391](https://doi.org/10.3390/antibiotics12091391) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Bhavnani_2019_route_of_administration](drugs/drug_lefamulin/Lefamulin_Bhavnani2019_route_of_administration.md) | — | 1-compartment (no model) | 2 | Bhavnani SM et al., Pharmacokinetic/pharmacodynamic target…, The Journal of antimicrobia… (2019) | [10.1093/jac/dkz089](https://doi.org/10.1093/jac/dkz089) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49, Q95 — no SI value to build from</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2019_reference](drugs/drug_lefamulin/Lefamulin_Zhang2019_reference.md) | — | 2-compartment (no model) | 7 | Zhang L et al., Prediction of lefamulin epithelial lini…, The Journal of antimicrobia… (2019) | [10.1093/jac/dkz088](https://doi.org/10.1093/jac/dkz088) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.8). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bhavnani_2019_mean_cv](drugs/drug_lefamulin/Lefamulin_Bhavnani2019_mean_cv.md) | — | 1-compartment (no model) | 0 | Bhavnani SM et al., Pharmacokinetic/pharmacodynamic target…, The Journal of antimicrobia… (2019) | [10.1093/jac/dkz089](https://doi.org/10.1093/jac/dkz089) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bian_2024_reference](drugs/drug_lefamulin/Lefamulin_Bian2024_reference.md) | — | 1-compartment (no model) | 0 | Bian X et al., Lefamulin dosing optimization using pop…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1456741](https://doi.org/10.3389/fphar.2024.1456741) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.95). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [van_2024_reference](drugs/drug_lefamulin/Lefamulin_van2024_reference.md) | — | 3-compartment (no model) | 8 | van Os W et al., Integrative model-based comparison of t…, International journal of an… (2024) | [10.1016/j.ijantimicag.2024.107148](https://doi.org/10.1016/j.ijantimicag.2024.107148) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [van_2024_2_reference](drugs/drug_lefamulin/Lefamulin_van2024v2_reference.md) | — | 1-compartment (no model) | 0 | van Os W et al., Target attainment of intravenous lefamu…, The Journal of antimicrobia… (2024) | [10.1093/jac/dkad401](https://doi.org/10.1093/jac/dkad401) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Rodvold_2019_MIC](drugs/drug_lefamulin/pd_Rodvold_2019_MIC.md) | Minimum inhibitory concentration (MIC) distribution of pathogens (S. pneumoniae, H. influenzae, M. catarrhalis, etc.) ← lefamulin · inhibition effect | — | Rodvold KA, Introduction: lefamulin and pharmacokin…, The Journal of antimicrobia… (2019) | [10.1093/jac/dkz084](https://doi.org/10.1093/jac/dkz084) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lefamulin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 8  ·  **relevant:** 3
- **records:** 7  ·  extracted 1  ·  needs_review 2  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bhavnani_2019 | irrelevant | 3 | 0 | This is a PK/PD target attainment simulation study that does not report the quantitative disposition parameters (CL, V, Q, ka, t1/2) of the population model, which are located in a separate referenced article. |
| popPK | Bian_2024 | relevant | 7 | 1 | The paper reports a population PK model structure and validation metrics for lefamulin in humans, but the specific numeric parameter estimates (CL, V, Q, Ka) are explicitly stated to be in Supplementary Tables (S1, S2) which are not provided in the evidence. |
| popPK | Huang_2024 | irrelevant | 0 | 0 | This is an editorial summarizing multiple studies; while it mentions a pharmacodynamic (PD) study of lefamulin using a hollow fiber model, it does not report quantitative pharmacokinetic (PK) disposition parameters (CL, V, ka, etc.) for lefamulin itself, nor does it provide numerical PK values. |
| popPK | Rodvold_2019 | relevant | 10 | 0 | The text is a description of a supplement containing population pharmacokinetic models and parameters for lefamulin, but the specific numeric values are not present in the provided evidence. |
| popPK | van_2024_2 | relevant | 4 | 1 | The paper is a PK/PD simulation study that utilizes a population PK model for lefamulin, but it does not report the numeric parameter values (CL, V, Q, etc.) in the provided text; these values are cited from a previous reference (van 2024_1 or similar) and are not extracted in this evidence block. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-13 12:03 UTC</sub>
