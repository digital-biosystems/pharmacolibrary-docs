<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;ipratropium bromide&quot;}]"></div>

# ipratropium bromide

- **generic name:** ipratropium bromide
- **ATC codes:** `R01AX03`, `R03AL01`, `R03AL02`, `R03BB01`
- **DrugBank:** [DB00332](https://go.drugbank.com/drugs/DB00332) · **PubChem:** [CID 657308](https://pubchem.ncbi.nlm.nih.gov/compound/657308)
- **molar mass:** 332.463 g/mol (C20H30NO3) — DrugBank
- **groups:** approved, investigational

## About

Ipratropium bromide is an inhaled anticholinergic medicine used to treat obstructive airway diseases such as COPD, and is also given as a nasal preparation. It is an approved medicine, appears on the WHO list of essential medicines, and is widely used, including in combination inhalers with adrenergic drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424294](https://www.wikidata.org/wiki/Q424294) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ipratropium bromide (ipratropium_bromide) | parent | 332.463 | C20H30NO3 | DrugBank | [657308](https://pubchem.ncbi.nlm.nih.gov/compound/657308) | Lee_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:04 | 1:16 | 0/1/0 | 3/0/0 | 0/0/0 | 76,130/4,097 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lee_2016_reference](drugs/drug_ipratropium_bromide/IpratropiumBromide_Lee2016_reference.md) | — | 1-compartment (no model) | 3 | Lee YH et al., Efficiency of a New Mesh-Type Nebulizer…, Basic & clinical pharmacolo… (2016) | [10.1111/bcpt.12499](https://doi.org/10.1111/bcpt.12499) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Gustafsson_1991_relaxation_of_carbachol_induced_contractions](drugs/drug_ipratropium_bromide/pd_Gustafsson_1991_relaxation_of_carbachol_induced_contractions.md) | relaxation of carbachol induced contractions ← ipratropium bromide · direct Emax (saturable) effect | — | Gustafsson B et al., Effect of different bronchodilators on…, Thorax (1991) | [10.1136/thx.46.5.360](https://doi.org/10.1136/thx.46.5.360) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Herbert_2019_airway_area_increase_reversal_of_ACh_induced_airway_contraction](drugs/drug_ipratropium_bromide/pd_Herbert_2019_airway_area_increase_reversal_of_ACh_induced_ai.md) | airway area increase (reversal of ACh-induced airway contraction) ← ipratropium · direct Emax (saturable) effect | — | Herbert J et al., COPD and asthma therapeutics for suppor…, Clinical toxicology (Philad… (2019) | [10.1080/15563650.2018.1540785](https://doi.org/10.1080/15563650.2018.1540785) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span> | [Leemans_2012_relaxation_of_acetylcholine_contracted_feline_bronchial_smooth_muscle](drugs/drug_ipratropium_bromide/pd_Leemans_2012_relaxation_of_acetylcholine_contracted_feline_b.md) | relaxation of acetylcholine-contracted feline bronchial smooth muscle ← ipratropium bromide · direct Emax (saturable) effect | — | Leemans J et al., A comparison of in vitro relaxant respo…, Veterinary journal (London,… (2012) | [10.1016/j.tvjl.2011.10.026](https://doi.org/10.1016/j.tvjl.2011.10.026) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ipratropium_bromide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` substrate, `SLC22A5` substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` substrate | DrugBank actor |
| absorption | small intestine | `SLC22A4` substrate, `SLC22A5` substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lee_2016.pdf` | Lee YH et al., Efficiency of a New Mesh-Type Nebulizer…, Basic & clinical pharmacolo… (2016) | popPK | 10 | [10.1111/bcpt.12499](https://doi.org/10.1111/bcpt.12499) | [26440415](https://pubmed.ncbi.nlm.nih.gov/26440415) | Population PK of ipratropium bromide with numeric V (1340 L), CL (6.78 L/min), and one-compartment first-order absorption model reported directly in the abstract. |

<sub>queue written 2026-10-07T13:03:06.039700+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barilan_2003 | irrelevant | 0 | 0 | In-vitro pharmacodynamic organ-bath study in bovine iris; ipratropium is only a tool antagonist, no PK parameters. |
| popPK | Barton_2010 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of bronchodilation in horse lung slices; no PK disposition parameters for ipratropium. |
| popPK | Chapman_1993 | irrelevant | 0 | 0 | Ipratropium is only used as a tool agent to block cholinergic responses; no PK parameters for it are reported. |
| popPK | Gustafsson_1991 | irrelevant | 0 | 0 | In vitro guinea pig trachea pharmacodynamics study; no PK disposition parameters for ipratropium. |
| popPK | Herbert_2019 | irrelevant | 0 | 0 | In vitro rat lung slice efficacy study (EC50 only); no PK disposition parameters for ipratropium. |
| popPK | Leemans_2012 | irrelevant | 0 | 0 | In vitro pharmacodynamic study of bronchodilator potency in feline bronchial smooth muscle, with no PK disposition parameters for ipratropium bromide. |
| popPK | MacGregor_2016 | relevant | 4 | 5 | Human COPD PK substudy reporting AUC, Cmax, Cmin and urinary excretion of ipratropium bromide with GMRs, but no CL/V/compartmental parameters; some values in supplementary tables/figures not provided. |
| popPK | Newnham_1993 | irrelevant | 0 | 0 | Ipratropium bromide is only used as a washout substitute; no PK parameters for it are reported. |
| popPK | Re_1993 | irrelevant | 0 | 0 | In-vitro electrophysiology in mouse neuromuscular junction; ipratropium is only a pharmacological probe with EC50 potencies, no PK disposition parameters. |
| popPK | Vandevelde_2015 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of biofilm/antibiotic effects; no PK parameters for ipratropium are reported. |
| popPK | Venkatasamy_2016 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of tracheal smooth muscle relaxation; ipratropium is only a comparator with no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:03 UTC</sub>
