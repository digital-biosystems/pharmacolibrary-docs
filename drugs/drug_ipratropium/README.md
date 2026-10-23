<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;Ipratropium&quot;}]"></div>

# Ipratropium

- **generic name:** Ipratropium
- **ATC codes:** `R01AX03`, `R03AL01`, `R03AL02`, `R03BB01`
- **DrugBank:** [DB00332](https://go.drugbank.com/drugs/DB00332) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ipratropium is an inhaled anticholinergic used for obstructive airway diseases such as COPD and asthma, and also as a nasal preparation. It is an approved medicine, appears on the WHO list of essential medicines, and is widely used, including in fixed combinations with inhaled adrenergic drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424294](https://www.wikidata.org/wiki/Q424294) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ipratropium | parent | 332.464 | C20H30NO3+ | PubChem | [657309](https://pubchem.ncbi.nlm.nih.gov/compound/657309) | Lee_2016 |
| ipratropium bromide | metabolite | 412.368 | C20H30BrNO3 | PubChem | [31098](https://pubchem.ncbi.nlm.nih.gov/compound/31098) | Lee_2016 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Lee_2016_reference](drugs/drug_ipratropium/Ipratropium_Lee2016_reference.md) | — | 1-compartment (no model) | 3 | Lee YH et al., Efficiency of a New Mesh-Type Nebulizer…, Basic & clinical pharmacolo… (2016) | [10.1111/bcpt.12499](https://doi.org/10.1111/bcpt.12499) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Gustafsson_1991_relaxation_of_carbachol_induced_contractions](drugs/drug_ipratropium/pd_Gustafsson_1991_relaxation_of_carbachol_induced_contractions.md) | relaxation of carbachol induced contractions ← ipratropium bromide · direct Emax (saturable) effect | — | Gustafsson B et al., Effect of different bronchodilators on…, Thorax (1991) | [10.1136/thx.46.5.360](https://doi.org/10.1136/thx.46.5.360) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Herbert_2019_airway_area](drugs/drug_ipratropium/pd_Herbert_2019_airway_area.md) | ACh-induced airway contraction (airway area increase after anticholinergic application) ← ipratropium · direct Emax (saturable) effect | — | Herbert J et al., COPD and asthma therapeutics for suppor…, Clinical toxicology (Philad… (2019) | [10.1080/15563650.2018.1540785](https://doi.org/10.1080/15563650.2018.1540785) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span> | [Leemans_2012_relaxation_of_acetylcholine_contracted_feline_bronchial_smooth_muscle](drugs/drug_ipratropium/pd_Leemans_2012_relaxation_of_acetylcholine_contracted_feline_b.md) | relaxation of acetylcholine-contracted feline bronchial smooth muscle ← ipratropium bromide · direct Emax (saturable) effect | — | Leemans J et al., A comparison of in vitro relaxant respo…, Veterinary journal (London,… (2012) | [10.1016/j.tvjl.2011.10.026](https://doi.org/10.1016/j.tvjl.2011.10.026) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Venkatasamy_2016_Emax_papaverine](drugs/drug_ipratropium/pd_Venkatasamy_2016_Emax_papaverine.md) | Relaxation of tracheal smooth muscle bronchomotor tone ← ipratropium bromide · direct Emax (saturable) effect | — | Venkatasamy R et al., Novel relaxant effects of RPL554 on gui…, British journal of pharmaco… (2016) | [10.1111/bph.13512](https://doi.org/10.1111/bph.13512) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ipratropium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` substrate, `SLC22A5` substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` substrate | DrugBank actor |
| absorption | small intestine | `SLC22A4` substrate, `SLC22A5` substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:02 | 1:26 | 0/1/0 | 4/0/0 | 0/0/0 | 76,794/4,534 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lee_2016.pdf` | Lee YH et al., Efficiency of a New Mesh-Type Nebulizer…, Basic & clinical pharmacolo… (2016) | popPK | 10 | [10.1111/bcpt.12499](https://doi.org/10.1111/bcpt.12499) | [26440415](https://pubmed.ncbi.nlm.nih.gov/26440415) | Population PK of ipratropium with numeric V (1340 L), CL (6.78 L/min), and one-compartment first-order absorption model reported directly in the abstract. |

<sub>queue written 2026-10-07T13:01:40.454041+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barilan_2003 | irrelevant | 0 | 0 | In-vitro organ bath pharmacodynamics study in bovine iris; ipratropium is only a tool antagonist, no PK parameters reported. |
| popPK | Barton_2010 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of bronchodilation in horse lung slices; no PK parameters for ipratropium. |
| popPK | Chapman_1993 | irrelevant | 0 | 0 | Ipratropium is only mentioned as a tool drug to block cholinergic responses; no PK parameters for it are reported. |
| popPK | Gustafsson_1991 | irrelevant | 0 | 0 | In-vitro pharmacodynamics (EC50 for smooth muscle relaxation) in guinea pig trachea, no PK disposition parameters for ipratropium. |
| popPK | Herbert_2019 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study (EC50 in rat lung slices) with no PK parameters for ipratropium. |
| popPK | Leemans_2012 | irrelevant | 0 | 0 | In vitro pharmacodynamic (relaxation potency) study in feline bronchial tissue; no PK disposition parameters for ipratropium. |
| popPK | MacGregor_2016 | irrelevant | 4 | 4 | Reports only GMRs of AUC/Cmax/urine excretion (relative bioequivalence of inhaler devices), not absolute disposition parameters (CL, V, half-life) or a population-PK model for ipratropium; detailed values partly in supplementary tables/figures not provided. |
| popPK | Newnham_1993 | irrelevant | 0 | 0 | Ipratropium is only used as a washout substitute; no PK parameters for it are reported. |
| popPK | Re_1993 | irrelevant | 0 | 0 | In-vitro electrophysiological study of muscarinic antagonists including ipratropium at the mouse neuromuscular junction; no PK disposition parameters reported. |
| popPK | Vandevelde_2015 | irrelevant | 0 | 0 | In vitro pharmacodynamic study of antibiotics with ipratropium only as a modulating agent; no PK parameters reported. |
| popPK | Venkatasamy_2016 | irrelevant | 0 | 0 | In-vitro guinea pig trachea pharmacodynamics study; ipratropium is only a comparator bronchodilator with no PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 13:01 UTC</sub>
