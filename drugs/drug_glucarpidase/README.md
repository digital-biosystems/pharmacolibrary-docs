<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;glucarpidase&quot;}]"></div>

# glucarpidase

- **generic name:** glucarpidase
- **ATC codes:** `V03AF09`
- **DrugBank:** [DB08898](https://go.drugbank.com/drugs/DB08898) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Glucarpidase is a detoxifying agent used to treat toxicity caused by antineoplastic (cancer) treatment, specifically high levels of methotrexate in the blood. It is an approved medicine, with one product authorised in the European Union, though it remains a specialised rescue therapy used mainly in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5572303](https://www.wikidata.org/wiki/Q5572303) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| glucarpidase | parent | 261.52 | Zn4+8 | PubChem | [21195079](https://pubchem.ncbi.nlm.nih.gov/compound/21195079) | Fukaya_2023 |
| methotrexate | metabolite | 454.447 | C20H22N8O5 | PubChem | [4112](https://pubchem.ncbi.nlm.nih.gov/compound/4112) | Fukaya_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:41 | 3:34 | 0/1/2 | 0/0/0 | 0/0/0 | 122,662/7,379 | ollama / glm-5.3-flash | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: nonlinear topology</sub><br><sub>route_to: `manual_model_class`</sub> | [Fukaya_2023_phase_1](drugs/drug_glucarpidase/Glucarpidase_Fukaya2023_phase_1.md) | — | nonlinear / manual (no model) | 2 | Fukaya Y et al., Development of a population pharmacokin…, Frontiers in oncology (2023) | [10.3389/fonc.2023.1003633](https://doi.org/10.3389/fonc.2023.1003633) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: nonlinear topology</sub><br><sub>route_to: `manual_model_class`</sub> | [Fukaya_2023_phase_2](drugs/drug_glucarpidase/Glucarpidase_Fukaya2023_phase_2.md) | — | nonlinear / manual (no model) | 2 | Fukaya Y et al., Development of a population pharmacokin…, Frontiers in oncology (2023) | [10.3389/fonc.2023.1003633](https://doi.org/10.3389/fonc.2023.1003633) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.818). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Fukaya_2023_original_estimate](drugs/drug_glucarpidase/Glucarpidase_Fukaya2023_original_estimate.md) | — | nonlinear / manual (no model) | 4 (+3 cov.) | Fukaya Y et al., Development of a population pharmacokin…, Frontiers in oncology (2023) | [10.3389/fonc.2023.1003633](https://doi.org/10.3389/fonc.2023.1003633) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antoniw_1990 | irrelevant | 2 | 2 | CPG2 (glucarpidase) is only used as a prodrug-activating antibody-enzyme conjugate; the PK parameters reported (half-lives, AUC, Vd, Cl) are for the prodrug and active drug, not for glucarpidase itself. |
| popPK | Mouawad_2026 | irrelevant | 1 | 0 | A narrative review of methotrexate toxicity management mentioning glucarpidase only as a mitigation agent, with no PK parameters for glucarpidase. |
| popPK | Taylor_2020 | irrelevant | 0 | 0 | This is a population PK study of methotrexate, not glucarpidase; glucarpidase is only mentioned as a rescue agent and patients receiving it were excluded, with no glucarpidase disposition parameters reported. |
| popPK | Taylor_2023 | irrelevant | 0 | 0 | This is a population PK study of high-dose methotrexate (MTXPK.org model); glucarpidase is only mentioned as a supportive-care tool and its post-glucarpidase samples were excluded, with no glucarpidase disposition parameters reported. |
| popPK | Weller_1994 | irrelevant | 0 | 0 | In vitro neurotoxicity study of folates in rat neuronal cultures with no glucarpidase PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:38 UTC</sub>
