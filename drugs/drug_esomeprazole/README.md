<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;esomeprazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Esomeprazole_Chung2022_reference&quot;,&quot;label&quot;:&quot;Chung_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_esomeprazole/Esomeprazole_Chung2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# esomeprazole

- **generic name:** esomeprazole
- **ATC codes:** `A02BC05`, `M01AE52`
- **DrugBank:** [DB00736](https://go.drugbank.com/drugs/DB00736) · **PubChem:** [CID 9568614](https://pubchem.ncbi.nlm.nih.gov/compound/9568614)
- **molar mass:** 345.416 g/mol (C17H19N3O3S) — DrugBank
- **groups:** approved, investigational

## About

Esomeprazole is a proton-pump inhibitor used for acid-related stomach problems such as gastroesophageal reflux disease, peptic and duodenal ulcers, gastritis, esophagitis, and heartburn. It is an approved medicine with an authorised product in the European Union and is widely used for these conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q553223](https://www.wikidata.org/wiki/Q553223) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| esomeprazole | parent | 345.416 | C17H19N3O3S | DrugBank | [9568614](https://pubchem.ncbi.nlm.nih.gov/compound/9568614) | Gebreyesus_2022, Nagase_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 08:58 | 10:37 | 1/1/1 | 1/0/0 | 0/0/0 | 162,968/29,730 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 13/3 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.875), gpt-oss:120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Chung_2022_reference](drugs/drug_esomeprazole/Esomeprazole_Chung2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Chung TK et al., A population PK-PD model of YH4808, a n…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12839](https://doi.org/10.1002/psp4.12839) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167), gpt-oss:120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Nagase_2020_reference](drugs/drug_esomeprazole/Esomeprazole_Nagase2020_reference.md) | — | 1-compartment (no model) | 2 | Nagase M et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2020) | [10.1111/jcpt.13129](https://doi.org/10.1111/jcpt.13129) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gebreyesus_2022_reference](drugs/drug_esomeprazole/Esomeprazole_Gebreyesus2022_reference.md) | — | 1-compartment (no model) | 0 | Gebreyesus MS et al., Population pharmacokinetics of esomepra…, British journal of clinical… (2022) | [10.1111/bcp.15416](https://doi.org/10.1111/bcp.15416) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Andersson_2001_pentagastrin_stimulated_peak_acid_output](drugs/drug_esomeprazole/pd_Andersson_2001_pentagastrin_stimulated_peak_acid_output.md) | pentagastrin-stimulated peak acid output ← esomeprazole · direct sigmoid Emax (Hill) effect | — | Andersson T et al., Pharmacokinetics and pharmacodynamics o…, Alimentary pharmacology & t… (2001) | [10.1046/j.1365-2036.2001.01087.x](https://doi.org/10.1046/j.1365-2036.2001.01087.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 16 returned
- **screened:** 13  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2016.pdf` | Liu D et al., Pharmacokinetic and Pharmacodynamic Mod…, Journal of clinical pharmac… (2016) | popPK | 10 | [10.1002/jcph.733](https://doi.org/10.1002/jcph.733) | [26970404](https://pubmed.ncbi.nlm.nih.gov/26970404) | The paper describes a population PK study of esomeprazole, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Nagase_2020.pdf` | Nagase M et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1111/jcpt.13129](https://doi.org/10.1111/jcpt.13129) | [32227647](https://pubmed.ncbi.nlm.nih.gov/32227647) | The paper reports a population PK model for esomeprazole in humans and provides specific numeric values for apparent clearance (CL) across different CYP2C19 phenotypes in the abstract. |
| `Earp_2017.pdf` | Earp JC et al., Esomeprazole FDA Approval in Children W…, Journal of pediatric gastro… (2017) | popPK | 9 | [10.1097/MPG.0000000000001467](https://doi.org/10.1097/MPG.0000000000001467) | [27875488](https://pubmed.ncbi.nlm.nih.gov/27875488) | The paper describes a population PK model for esomeprazole in children and adults, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Andersson_2001.pdf` | Andersson T et al., Pharmacokinetics and pharmacodynamics o…, Alimentary pharmacology & t… (2001) | popPK | 8 | [10.1046/j.1365-2036.2001.01087.x](https://doi.org/10.1046/j.1365-2036.2001.01087.x) | [11563995](https://pubmed.ncbi.nlm.nih.gov/11563995) | The study reports PK/PD for esomeprazole in humans, but the evidence provided only contains qualitative statements about AUC and PD inhibition percentages, lacking specific numeric values for clearance, volume, or half-life. |

<sub>queue written 2026-10-04T08:49:33.905536+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andersson_2001 | relevant | 8 | 2 | The study reports PK/PD for esomeprazole in humans, but the evidence provided only contains qualitative statements about AUC and PD inhibition percentages, lacking specific numeric values for clearance, volume, or half-life. |
| popPK | Boinpally_2023 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of atogepant, with esomeprazole serving only as a co-administered agent to test for interactions, and no quantitative PK parameters for esomeprazole are reported. |
| popPK | Chung_2022 | irrelevant | 0 | 0 | The study models the pharmacokinetics of YH4808, with esomeprazole serving only as an active comparator for pharmacodynamic effects. |
| popPK | Earp_2017 | relevant | 9 | 0 | The paper describes a population PK model for esomeprazole in children and adults, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PD | Earp_2017 | not_relevant | 3 | 1 | The paper describes exposure-matching and qualitative similarity of exposure-response relationships but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve in the provided text. |
| popPK | Kirchheiner_2009_2 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of gastric pH effects and does not report pharmacokinetic parameters (CL, V, ka) for esomeprazole. |
| popPK | Lacy_2017_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cabozantinib, and esomeprazole is only mentioned as a co-administered agent that did not affect cabozantinib levels. |
| popPK | Lee_2025 | relevant | 5 | 4 | The study reports non-compartmental PK parameters (AUC, Cmax, t1/2) for esomeprazole, but lacks compartmental model parameters (CL, V, Q) and specific numeric values for Cmax and t1/2 are not explicitly listed in the provided text. |
| popPK | Litalien_2005 | irrelevant | 0 | 0 | The paper is a review that explicitly states no pharmacokinetic data are available for esomeprazole in children, and it does not report quantitative parameters for esomeprazole. |
| popPK | Liu_2016 | relevant | 10 | 0 | The paper describes a population PK study of esomeprazole, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Schlachter_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for atogepant, not esomeprazole (which is only mentioned as a concomitant medication). |
| popPK | Simon_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of clopidogrel, with esomeprazole serving only as a co-administered comparator agent. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tacrolimus, with esomeprazole serving only as a co-administered drug affecting tacrolimus bioavailability. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 08:49 UTC</sub>
