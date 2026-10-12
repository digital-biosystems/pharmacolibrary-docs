<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab deruxtecan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TrastuzumabDeruxtecan_Yin2021_final&quot;,&quot;label&quot;:&quot;Yin_2021_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# trastuzumab deruxtecan

- **generic name:** trastuzumab deruxtecan
- **ATC codes:** `L01FD04`
- **DrugBank:** [DB14962](https://go.drugbank.com/drugs/DB14962) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Trastuzumab deruxtecan is an antibody-drug conjugate used to treat breast cancer. It is an approved medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q80109553](https://www.wikidata.org/wiki/Q80109553) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| released drug | metabolite | 493.491 | C26H24FN3O6 | PubChem | [117888634](https://pubchem.ncbi.nlm.nih.gov/compound/117888634) | Yin_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:41 | 7:24 | 0/2/1 | 0/0/0 | 0/0/0 | 196,363/12,166 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.211). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Yin_2021_final_final_released_drug_model](drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode.md) | held back | 1-compartment, IV | 3 (+5 cov.) | Yin O et al., Population Pharmacokinetics of Trastuzu…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2096](https://doi.org/10.1002/cpt.2096) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Asiimwe_2025_reference](drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Asiimwe2025_reference.md) | — | 1-compartment (no model) | 0 | Asiimwe IG et al., Postmarketing Assessment of Antibody-Dr…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70013](https://doi.org/10.1002/psp4.70013) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.304). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub><br><sub>route_to: `engineer`</sub> | [Yin_2021_final](drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final.md) | ▶ model + simulator | 1-compartment, IV | 4 (+7 cov.) | Yin O et al., Population Pharmacokinetics of Trastuzu…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2096](https://doi.org/10.1002/cpt.2096) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yoshihara_2023.pdf` | Yoshihara K et al., Trastuzumab Deruxtecan Dosing in Human…, Journal of clinical pharmac… (2023) | popPK | 10 | [10.1002/jcph.2295](https://doi.org/10.1002/jcph.2295) | [37393579](https://pubmed.ncbi.nlm.nih.gov/37393579) | The paper describes a population pharmacokinetic model for trastuzumab deruxtecan, but the specific numeric parameter values (e.g., clearance, volume) are not present in the provided abstract text. |
| `Lu_2023.pdf` | Lu Z et al., Use of Real-World Evidence in a Virtual…, Journal of clinical pharmac… (2023) | popPK | 8 | [10.1002/jcph.2297](https://doi.org/10.1002/jcph.2297) | [37377133](https://pubmed.ncbi.nlm.nih.gov/37377133) | The paper describes a population PK model for trastuzumab deruxtecan but only reports exposure ratios and clinical outcomes, lacking specific numeric PK parameter values (CL, V, etc.) in the provided text. |

<sub>queue written 2026-10-07T21:35:05.171511+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cherifi_2024 | irrelevant | 2 | 0 | The paper is a qualitative literature review describing general PK/PD profiles without reporting specific quantitative parameter values (CL, V, etc.) for trastuzumab deruxtecan. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | The paper is a diagnostic imaging study predicting HER2-low status using ultrasound and does not report any pharmacokinetic parameters for trastuzumab deruxtecan. |
| popPK | Lu_2023 | relevant | 8 | 2 | The paper describes a population PK model for trastuzumab deruxtecan but only reports exposure ratios and clinical outcomes, lacking specific numeric PK parameter values (CL, V, etc.) in the provided text. |
| popPK | Ter_2023 | irrelevant | 2 | 0 | The paper is a modeling and simulation study for cost-saving dosing regimens that uses existing population PK models but does not report original quantitative PK parameter values (CL, V, etc.) for trastuzumab deruxtecan in the text. |
| popPK | Yin_2021_2 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that uses PK parameters from a separate population PK study (reference 12) and does not report original quantitative PK parameter values (CL, V, etc.) in the text. |
| popPK | Yoshihara_2023 | relevant | 10 | 2 | The paper describes a population pharmacokinetic model for trastuzumab deruxtecan, but the specific numeric parameter values (e.g., clearance, volume) are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:35 UTC</sub>
