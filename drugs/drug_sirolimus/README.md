<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;sirolimus&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sirolimus_de2023_reference&quot;,&quot;label&quot;:&quot;de_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sirolimus/Sirolimus_de2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sirolimus_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sirolimus/Sirolimus_Li2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# sirolimus

- **generic name:** sirolimus
- **ATC codes:** `L01EG04`, `L04AH01`, `S01XA23`
- **DrugBank:** [DB00877](https://go.drugbank.com/drugs/DB00877) · **PubChem:** [CID 5284616](https://pubchem.ncbi.nlm.nih.gov/compound/5284616)
- **molar mass:** 914.187 g/mol (C51H79NO13) — DrugBank
- **groups:** approved, investigational

## About

Sirolimus is an immunosuppressive medicine used to prevent rejection of transplanted organs, and is also used in conditions such as renal cell carcinoma, graft-versus-host disease, lymphangioleiomyomatosis, and tuberous sclerosis-related angiofibroma. It is widely used and authorised in the European Union, with products approved for graft rejection, kidney transplantation, angiofibroma, tuberous sclerosis, and uveitis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q32089](https://www.wikidata.org/wiki/Q32089) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sirolimus | parent | 914.187 | C51H79NO13 | DrugBank | [5284616](https://pubchem.ncbi.nlm.nih.gov/compound/5284616) | Ferron_1997, Lee_2015, Li_2022, de_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:06 | 11:11 | 1/1/3 | 2/1/1 | 0/0/0 | 275,301/51,955 | openai / gpt-6-luna | 8 | 7/1 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [de_2023_reference](drugs/drug_sirolimus/Sirolimus_de2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | de Tonnerre DJ et al., Effect of sirolimus on insulin dynamics…, Journal of veterinary inter… (2023) | [10.1111/jvim.16650](https://doi.org/10.1111/jvim.16650) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Ferron_1997_reference](drugs/drug_sirolimus/Sirolimus_Ferron1997_reference.md) | — | 1-compartment (no model) | 4 | Ferron GM et al., Population pharmacokinetics of sirolimu…, Clinical pharmacology and t… (1997) | [10.1016/S0009-9236(97)90192-2](https://doi.org/10.1016/S0009-9236(97)90192-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Lee_2015_reference](drugs/drug_sirolimus/Sirolimus_Lee2015_reference.md) | — | 1-compartment (no model) | 2 | Lee KJ et al., Pharmacokinetics of sirolimus-eluting s…, Circulation. Cardiovascular… (2015) | [10.1161/CIRCINTERVENTIONS.114.002233](https://doi.org/10.1161/CIRCINTERVENTIONS.114.002233) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Li_2022_reference](drugs/drug_sirolimus/Sirolimus_Li2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Li S et al., Population Pharmacokinetic Analysis and…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2033](https://doi.org/10.1002/jcph.2033) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Methaneethorn_2022_reference](drugs/drug_sirolimus/Sirolimus_Methaneethorn2022_reference.md) | — | 1-compartment (no model) | 0 | Methaneethorn J et al., Predictors of sirolimus pharmacokinetic…, Journal of population thera… (2022) | [10.47750/jptcp.2022.940](https://doi.org/10.47750/jptcp.2022.940) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Giménez_2023_CMV](drugs/drug_sirolimus/pd_Gim_nez_2023_CMV.md) | CMV replication inhibition ← sirolimus · inhibition effect | — | Giménez E et al., In vitro assessment of the combined eff…, Revista espanola de quimiot… (2023) | [10.37201/req/016.2023](https://doi.org/10.37201/req/016.2023) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pasquereau_2021_HCoV_229E](drugs/drug_sirolimus/pd_Pasquereau_2021_HCoV_229E.md) | HCoV-229E replication ← rapamycin · direct sigmoid Emax (Hill) effect | — | Pasquereau S et al., Resveratrol Inhibits HCoV-229E and SARS…, Viruses (2021) | [10.3390/v13020354](https://doi.org/10.3390/v13020354) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pasquereau_2021_cell_viability](drugs/drug_sirolimus/pd_Pasquereau_2021_cell_viability.md) | cell viability ← rapamycin · direct sigmoid Emax (Hill) effect | — | Pasquereau S et al., Resveratrol Inhibits HCoV-229E and SARS…, Viruses (2021) | [10.3390/v13020354](https://doi.org/10.3390/v13020354) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Zimmerman_2004_acute_rejection](drugs/drug_sirolimus/pd_Zimmerman_2004_acute_rejection.md) | acute rejection ← sirolimus · categorical (graded) response model | — | Zimmerman JJ, Exposure-response relationships and dru…, The AAPS journal (2004) | [10.1208/aapsj060428](https://doi.org/10.1208/aapsj060428) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Jiang_2021_mycelial_growth](drugs/drug_sirolimus/pd_Jiang_2021_mycelial_growth.md) | mycelial growth ← rapamycin · inhibition effect | — | Jiang H et al., Antifungal activity of rapamycin on Bot…, Pest management science (2021) | [10.1002/ps.6035](https://doi.org/10.1002/ps.6035) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Jiang_2021_spore_germination](drugs/drug_sirolimus/pd_Jiang_2021_spore_germination.md) | spore germination ← rapamycin · inhibition effect | — | Jiang H et al., Antifungal activity of rapamycin on Bot…, Pest management science (2021) | [10.1002/ps.6035](https://doi.org/10.1002/ps.6035) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sirolimus).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC47A1` unknown | DrugBank actor |
| excretion | liver | `SLC47A1` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: APOA1 (binder), MTOR (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 167 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 1  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ferron_1997.pdf` | Ferron GM et al., Population pharmacokinetics of sirolimu…, Clinical pharmacology and t… (1997) | popPK | 10 | [10.1016/S0009-9236(97)90192-2](https://doi.org/10.1016/S0009-9236(97)90192-2) | [9129559](https://pubmed.ncbi.nlm.nih.gov/9129559) | The human population-PK study reports numeric sirolimus clearance, half-life, absorption lag-time, and absorption rate in the evidence. |
| `Lee_2015.pdf` | Lee KJ et al., Pharmacokinetics of sirolimus-eluting s…, Circulation. Cardiovascular… (2015) | popPK | 10 | [10.1161/CIRCINTERVENTIONS.114.002233](https://doi.org/10.1161/CIRCINTERVENTIONS.114.002233) | [25940522](https://pubmed.ncbi.nlm.nih.gov/25940522) | Neonatal human sirolimus pharmacokinetics are quantitatively reported, including clearance from noncompartmental and population models. |
| `Li_2022.pdf` | Li S et al., Population Pharmacokinetic Analysis and…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2033](https://doi.org/10.1002/jcph.2033) | [35094415](https://pubmed.ncbi.nlm.nih.gov/35094415) | The study reports numeric population-PK estimates for sirolimus clearance and volume in children. |

<sub>queue written 2026-10-07T06:57:07.196512+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergmann_2012 | irrelevant | 0 | 0 | This review discusses prednisolone and mentions sirolimus only in passing, with no sirolimus disposition values. |
| popPK | Boland_2017 | irrelevant | 0 | 0 | This is a review of pancreatic beta-cell biology and reports no quantitative sirolimus pharmacokinetic parameters. |
| popPK | Cai_2022 | irrelevant | 0 | 0 | The study reports Ginkgolide B exposure in rats, not sirolimus pharmacokinetics. |
| popPK | Candela-Boix_2021 | irrelevant | 2 | 0 | This is a systematic review and provides no numeric sirolimus disposition parameters in the supplied evidence. |
| popPK | DeLouise_2023 | irrelevant | 0 | 0 | This radioprotection study does not report sirolimus disposition parameters or a sirolimus PK model. |
| popPK | Ferron_1998 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| popPK | Giménez_2023 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study; it reports sirolimus EC50 values, not pharmacokinetic disposition parameters. |
| popPK | Golubovic_2016 | irrelevant | 1 | 0 | This is a review of population-PK models in adult kidney transplant patients and provides no numeric sirolimus parameter values. |
| popPK | Jiang_2021 | irrelevant | 0 | 0 | This is an antifungal and plant disease-control study, not a sirolimus pharmacokinetic study. |
| popPK | Kahan_2002 | irrelevant | 1 | 0 | This is a review and provides no numeric sirolimus disposition parameters. |
| popPK | Pasquereau_2021 | irrelevant | 0 | 0 | Sirolimus (rapamycin) is tested only for in-vitro antiviral activity and no disposition parameters are reported. |
| popPK | Piraino_2025 | irrelevant | 0 | 0 | Rapamycin (sirolimus) is tested for radioprotection, but no sirolimus pharmacokinetic parameters or values are reported. |
| popPK | Shihab_2014 | irrelevant | 1 | 1 | This review gives therapeutic trough ranges but no original quantitative disposition parameters for sirolimus. |
| popPK | Xu_2023 | irrelevant | 0 | 0 | This clinical outcomes study reports sirolimus treatment associations but no pharmacokinetic disposition parameters. |
| popPK | Zimmerman_2004 | irrelevant | 1 | 0 | This review reports exposure-response and drug-interaction findings but no quantitative sirolimus disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:57 UTC</sub>
