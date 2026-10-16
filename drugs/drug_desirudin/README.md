<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;desirudin&quot;}]"></div>

# desirudin

- **generic name:** desirudin
- **ATC codes:** `B01AE01`
- **DrugBank:** [DB11095](https://go.drugbank.com/drugs/DB11095) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Desirudin is a recombinant peptide anticoagulant, a direct thrombin inhibitor, that was used to prevent venous thrombosis. It was approved in the European Union but its marketing authorisation has been withdrawn, so it is no longer in use there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28852444](https://www.wikidata.org/wiki/Q28852444) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| desirudin | parent | 6963.49 | C287H440N80O110S6 | PubChem | [16129703](https://pubchem.ncbi.nlm.nih.gov/compound/16129703) | Nafziger_2010 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:12 | 2:41 | 0/2/0 | 0/0/0 | 0/0/0 | 130,951/11,144 | einfracz / qwen3.8-27b | 5 | 6/1 | 3/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.4), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: partial 1/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Nafziger_2010_moderate_renal_impairment](drugs/drug_desirudin/Desirudin_Nafziger2010_moderate_renal_impairment.md) | — | 1-compartment (no model) | 6 | Nafziger AN et al., Desirudin dosing and monitoring in mode…, Journal of clinical pharmac… (2010) | [10.1177/0091270009350626](https://doi.org/10.1177/0091270009350626) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.4), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: partial 1/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Nafziger_2010_normal_renal_function](drugs/drug_desirudin/Desirudin_Nafziger2010_normal_renal_function.md) | — | 1-compartment (no model) | 6 | Nafziger AN et al., Desirudin dosing and monitoring in mode…, Journal of clinical pharmac… (2010) | [10.1177/0091270009350626](https://doi.org/10.1177/0091270009350626) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=desirudin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CPA1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 11 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amin_1997 | relevant | 10 | 0 | The study investigates the pharmacokinetics of desirudin (REVASC) in humans, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| PD | Amin_1997 | not_relevant | 2 | 1 | The study describes qualitative changes in APTT (plateau, partial reversal) but does not report numeric PD parameters (Emax, EC50) or a quantitative concentration-effect model for desirudin. |
| popPK | Bergese_2013 | irrelevant | 0 | 0 | The study is a clinical safety trial focused on bleeding and thrombosis endpoints, with no reporting of quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Kaye_2019 | irrelevant | 0 | 0 | This is a clinical practice guideline review regarding bleeding risk in interventional pain procedures, not a pharmacokinetic study, and it does not report quantitative PK parameters for desirudin. |
| PD | Kaye_2019 | not_relevant | 1 | 0 | The paper is a clinical guideline review that mentions desirudin only in the context of perioperative management and general pharmacokinetic/pharmacodynamic considerations, without providing any specific numeric PD parameters or exposure-response data. |
| popPK | Kong_2014 | irrelevant | 2 | 1 | The paper is a review of direct thrombin inhibitors that mentions desirudin's half-life and clearance mechanism but does not report original quantitative PK parameters (CL, V, Q, ka) or a compartmental model. |
| popPK | Lepor_2007 | irrelevant | 0 | 0 | The paper is a narrative review of anticoagulation strategies that mentions desirudin only as an approved drug without providing any quantitative pharmacokinetic parameters. |
| PD | Lepor_2007 | not_relevant | 1 | 0 | The text is a general review of anticoagulants that mentions desirudin only as an approved drug without providing any specific pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| popPK | Menear_1998 | irrelevant | 0 | 0 | The paper is a review of thrombin inhibitors and does not report quantitative pharmacokinetic parameters for desirudin. |
| popPK | Shen_2001 | irrelevant | 0 | 0 | The paper is a review of thrombin-specific inhibitors and does not report any quantitative pharmacokinetic parameters for desirudin. |
| popPK | Shen_2006 | irrelevant | 0 | 0 | The paper is a narrative review of thrombin inhibitors that discusses desirudin's clinical efficacy but does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for desirudin. |
| popPK | Trujillo_2010 | irrelevant | 1 | 0 | The paper is a review of VTE prevention strategies that mentions desirudin only as a comparator or background agent, providing no original quantitative pharmacokinetic parameters (CL, V, Q, ka) for desirudin. |
| PD | Trujillo_2010 | not_relevant | 1 | 0 | The text is a general review of anticoagulants for VTE prevention and does not report specific numeric pharmacodynamic parameters or exposure-response relationships for desirudin. |
| popPK | Vranckx_2011 | irrelevant | 0 | 0 | The paper is a review comparing the pharmacology and clinical utility of desirudin and bivalirudin, containing no original quantitative pharmacokinetic parameter values. |
| PD | Vranckx_2011 | not_relevant | 1 | 0 | The text is a qualitative review comparing the pharmacology of desirudin and bivalirudin without providing any numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Warkentin_2004 | irrelevant | 0 | 0 | The paper is a review of bivalent direct thrombin inhibitors and does not report original quantitative pharmacokinetic parameters for desirudin. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 7 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is a conference tag (EANM'17) and contains no information regarding desirudin, pharmacodynamics, or exposure-response relationships. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a copyright/takedown policy notice and does not contain any scientific data, pharmacodynamic models, or numeric parameters for desirudin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:09 UTC</sub>
