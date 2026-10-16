<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;enasidenib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enasidenib_Li2019_reference&quot;,&quot;label&quot;:&quot;Li_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enasidenib/Enasidenib_Li2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# enasidenib

- **generic name:** enasidenib
- **ATC codes:** `L01XM01`
- **DrugBank:** [DB13874](https://go.drugbank.com/drugs/DB13874) · **PubChem:** [CID 89683805](https://pubchem.ncbi.nlm.nih.gov/compound/89683805)
- **molar mass:** 473.383 g/mol (C19H17F6N7O) — DrugBank
- **groups:** approved, investigational

## About

Enasidenib is an anticancer medicine, an IDH inhibitor, used to treat acute myeloid leukemia. It is an approved drug, though it has no European Union authorisation recorded, and remains investigational for some uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27077182](https://www.wikidata.org/wiki/Q27077182) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| enasidenib | parent | 473.383 | C19H17F6N7O | DrugBank | [89683805](https://pubchem.ncbi.nlm.nih.gov/compound/89683805) | Li_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:42 | 0:13 | 0/1/0 | 0/0/1 | 0/0/0 | 35,879/1,343 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T1_cmax</sub><br><sub>route_to: `engineer`</sub> | [Li_2019_reference](drugs/drug_enasidenib/Enasidenib_Li2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Li Y et al., Modeling and simulation of the endogeno…, Clinical pharmacology : adv… (2019) | [10.2147/CPAA.S192687](https://doi.org/10.2147/CPAA.S192687) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span> | [Li_2019_4_hydroxycholesterol_cholesterol_ratio](drugs/drug_enasidenib/pd_Li_2019_4_hydroxycholesterol_cholesterol_ratio.md) | 4β-hydroxycholesterol/cholesterol ratio ← enasidenib · indirect response — drug stimulates the production of 4β-hydroxycholesterol/cholesterol ratio | model (no simulator) | Li Y et al., Modeling and simulation of the endogeno…, Clinical pharmacology : adv… (2019) | [10.2147/CPAA.S192687](https://doi.org/10.2147/CPAA.S192687) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=enasidenib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2B6` inducer/inhibitor/substrate, `CYP2C19` inhibitor/substrate, `CYP2C8` inhibitor/substrate, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inducer/inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` inhibitor/substrate, `UGT1A3` substrate, `UGT1A4` substrate, `UGT1A9` substrate, `UGT2B15` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `UGT1A1` inhibitor/substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: IDH1 (inhibitor), IDH2 (inhibitor), IDH3A (inhibitor), IDH3B (inhibitor), IDH3G (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheng_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the probe drug caffeine in the presence of enasidenib, not on the disposition parameters of enasidenib itself. |
| popPK | Fan_2022 | relevant | 5 | 4 | The study reports observed non-compartmental PK parameters (AUC, Cmax, accumulation ratios) for enasidenib in humans, but lacks specific compartmental values like clearance or volume of distribution. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:42 UTC</sub>
