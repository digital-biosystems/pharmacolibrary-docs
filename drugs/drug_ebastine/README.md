<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;ebastine&quot;}]"></div>

# ebastine

- **generic name:** ebastine
- **ATC codes:** `R06AX22`
- **DrugBank:** [DB11742](https://go.drugbank.com/drugs/DB11742) · **PubChem:** [CID 3191](https://pubchem.ncbi.nlm.nih.gov/compound/3191)
- **molar mass:** 469.6576 g/mol (C32H39NO2) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Ebastine is a systemic antihistamine that blocks H1 receptors, used to treat allergic conditions such as allergic rhinitis and urticaria. It is an approved medicine, marketed in several countries, though not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2327739](https://www.wikidata.org/wiki/Q2327739) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| carebastine | metabolite | — (mass units only) | — | — | — | — |
| hydroxyebastine | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Kang_2011_reference](drugs/drug_ebastine/Ebastine_Kang2011_reference.md) | — | general linear (no model) | 0 | Kang W et al., Myocardial pharmacokinetics of ebastine…, British journal of pharmaco… (2011) | [10.1111/j.1476-5381.2011.01338.x](https://doi.org/10.1111/j.1476-5381.2011.01338.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kang_2011_LVDP](drugs/drug_ebastine/pd_Kang_2011_LVDP.md) | change in left ventricular developed pressure ← ebastine · direct Emax (saturable) effect | — | Kang W et al., Myocardial pharmacokinetics of ebastine…, British journal of pharmaco… (2011) | [10.1111/j.1476-5381.2011.01338.x](https://doi.org/10.1111/j.1476-5381.2011.01338.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vatansever_2021_Mpro](drugs/drug_ebastine/pd_Vatansever_2021_Mpro.md) | Mpro activity ← ebastine · direct sigmoid Emax (Hill) effect | — | Vatansever EC et al., Bepridil is potent against SARS-CoV-2 i…, Proceedings of the National… (2021) | [10.1073/pnas.2012201118](https://doi.org/10.1073/pnas.2012201118) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Ohtani_1999_QT](drugs/drug_ebastine/pd_Ohtani_1999_QT.md) | QT prolongation ← ebastine · delayed effect through an effect compartment | — | Ohtani H et al., Pharmacokinetic-pharmacodynamic analysi…, Biopharmaceutics & drug dis… (1999) | [10.1002/(sici)1099-081x(199903)20:2&lt;101::aid-bdd160&gt;3.0.co;2-l](https://doi.org/10.1002/(sici)1099-081x(199903)20:2&lt;101::aid-bdd160&gt;3.0.co;2-l) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Desager_1995_pharmacokinetic_pharmacodynamic_relationship](drugs/drug_ebastine/pd_Desager_1995_pharmacokinetic_pharmacodynamic_relationship.md) | pharmacokinetic-pharmacodynamic relationship · direct linear effect | — | Desager JP et al., Pharmacokinetic-pharmacodynamic relatio…, Clinical pharmacokinetics (1995) | [10.2165/00003088-199528050-00006](https://doi.org/10.2165/00003088-199528050-00006) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Desager_1995_pharmacokinetic_pharmacodynamic_relationship_2](drugs/drug_ebastine/pd_Desager_1995_pharmacokinetic_pharmacodynamic_relationship_2.md) | pharmacokinetic-pharmacodynamic relationship · model not identified | — | Desager JP et al., Pharmacokinetic-pharmacodynamic relatio…, Clinical pharmacokinetics (1995) | [10.2165/00003088-199528050-00006](https://doi.org/10.2165/00003088-199528050-00006) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ebastine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:26 | 2:18 | 0/1/0 | 3/1/0 | 0/0/0 | 51,526/11,364 | openai / gpt-6-luna | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Desager_1995 | irrelevant | 2 | 0 | This review mentions nonlinear ebastine pharmacokinetics in dogs but provides no numeric disposition parameters. |
| popPK | Ohtani_1999 | irrelevant | 2 | 0 | Rat ebastine concentrations were measured, but the reported values are pharmacodynamic effect parameters, not disposition parameters. |
| popPK | Vatansever_2021 | irrelevant | 0 | 0 | Ebastine is tested as an in-vitro protease inhibitor, with no quantitative pharmacokinetic disposition parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 23:24 UTC</sub>
