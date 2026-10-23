<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;ketotifen&quot;}]"></div>

# ketotifen

- **generic name:** ketotifen
- **ATC codes:** `R06AX17`, `S01GX08`
- **DrugBank:** [DB00920](https://go.drugbank.com/drugs/DB00920) · **PubChem:** [CID 3827](https://pubchem.ncbi.nlm.nih.gov/compound/3827)
- **molar mass:** 309.425 g/mol (C19H19NOS) — DrugBank
- **groups:** approved, investigational

## About

Ketotifen is an antihistamine used to treat allergic conditions, acting as an H1 antagonist with anti-allergic and anti-itch effects. It is an approved medicine, available both as a systemic antihistamine and as an eye preparation for allergic eye symptoms.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2458673](https://www.wikidata.org/wiki/Q2458673) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ketotifen | parent | 309.425 | C19H19NOS | DrugBank | [3827](https://pubchem.ncbi.nlm.nih.gov/compound/3827) | Yagi_2002 |
| ketotifen fumarate | metabolite | 425.499 | C23H23NO5S | PubChem | [5282408](https://pubchem.ncbi.nlm.nih.gov/compound/5282408) | Yagi_2002 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 142.8 ‡ | L/h | 2.04 l//h/kg | rabbits | rabbit | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yagi_2002_reference](drugs/drug_ketotifen/Ketotifen_Yagi2002_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Yagi_2002_reference](drugs/drug_ketotifen/Ketotifen_Yagi2002_reference.md) | — | 1-compartment (no model) | 1 | Yagi N et al., Pharmacokinetics of ketotifen fumarate…, Biological & pharmaceutical… (2002) | [10.1248/bpb.25.1614](https://doi.org/10.1248/bpb.25.1614) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [McFadyen_1997_reference](drugs/drug_ketotifen/Ketotifen_McFadyen1997_reference.md) | — | 1-compartment (no model) | 0 | McFadyen ML et al., Ketotifen pharmacokinetics in children…, European journal of clinica… (1997) | [10.1007/s002280050305](https://doi.org/10.1007/s002280050305) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kiani_2021_Percent_cell_protection](drugs/drug_ketotifen/pd_Kiani_2021_Percent_cell_protection.md) | Percent cell protection ← ketotifen · direct sigmoid Emax (Hill) effect | — | Kiani P et al., In Vitro Assessment of the Antiviral Ac…, Viruses (2021) | [10.3390/v13040558](https://doi.org/10.3390/v13040558) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kiani_2021_virus_yield](drugs/drug_ketotifen/pd_Kiani_2021_virus_yield.md) | virus yield ← ketotifen · inhibition effect | — | Kiani P et al., In Vitro Assessment of the Antiviral Ac…, Viruses (2021) | [10.3390/v13040558](https://doi.org/10.3390/v13040558) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Schneider_2021_flexion_contracture](drugs/drug_ketotifen/pd_Schneider_2021_flexion_contracture.md) | flexion contracture ← ketotifen fumarate (KF) · direct sigmoid Emax (Hill) effect | — | Schneider PS et al., The Dose-Response Effect of the Mast Ce…, JB & JS open access (2021) | [10.2106/JBJS.OA.20.00057](https://doi.org/10.2106/JBJS.OA.20.00057) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 1.00).">human + animal</span> | [Wang_1990_platelet_aggregations_induced_by_AA_50_mumol_L](drugs/drug_ketotifen/pd_Wang_1990_platelet_aggregations_induced_by_AA_50_mumol_L.md) | platelet aggregations induced by AA 50 mumol/L ← ketotifen · inhibition effect | — | Wang XD et al., [Effects of ketotifen on rabbit platele…, Zhongguo yao li xue bao = A… (1990) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 1.00).">human + animal</span> | [Wang_1990_platelet_aggregations_induced_by_ADP_10_mumol_L](drugs/drug_ketotifen/pd_Wang_1990_platelet_aggregations_induced_by_ADP_10_mumol_L.md) | platelet aggregations induced by ADP 10 mumol/L ← ketotifen · inhibition effect | — | Wang XD et al., [Effects of ketotifen on rabbit platele…, Zhongguo yao li xue bao = A… (1990) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:50 | 9:14 | 0/1/1 | 3/0/0 | 0/0/0 | 147,916/53,824 | openai / gpt-6-luna | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `McFadyen_1997.pdf` | McFadyen ML et al., Ketotifen pharmacokinetics in children…, European journal of clinica… (1997) | popPK | 10 | [10.1007/s002280050305](https://doi.org/10.1007/s002280050305) | [9272408](https://pubmed.ncbi.nlm.nih.gov/9272408) | Population pharmacokinetic model reports numeric ketotifen volume and clearance estimates. |

<sub>queue written 2026-10-07T23:41:27.428432+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahuja_2011 | irrelevant | 0 | 0 | Ketotifen is only a comparator in a bronchospasm experiment, with no pharmacokinetic parameters reported. |
| popPK | Kiani_2021 | irrelevant | 0 | 0 | This is an in-vitro antiviral efficacy study and reports no ketotifen disposition or population-PK parameters. |
| popPK | Peters_1990 | irrelevant | 0 | 0 | The study reports antimalarial activity and chloroquine-resistance reversal, not ketotifen pharmacokinetic parameters. |
| popPK | Rychter_2015 | irrelevant | 0 | 0 | Ketotifen is used only as an in-vitro intervention, with no pharmacokinetic disposition parameters reported. |
| popPK | Schneider_2021 | irrelevant | 0 | 0 | This rabbit dose-response study reports a pharmacodynamic EC50, not ketotifen disposition parameters. |
| popPK | Wang_1990 | irrelevant | 0 | 0 | This is an in-vitro pharmacology study and reports no ketotifen disposition parameters. |
| popPK | Xu_2012 | irrelevant | 0 | 0 | Ketotifen is only used as a mast cell stabilizer, and no ketotifen pharmacokinetic parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 23:41 UTC</sub>
