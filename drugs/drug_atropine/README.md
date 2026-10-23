<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03B&quot;,&quot;href&quot;:&quot;atc/A03B.md&quot;},{&quot;label&quot;:&quot;atropine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atropine_Strm2021_reference&quot;,&quot;label&quot;:&quot;Str\u00f6m_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atropine/Atropine_Strm2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# atropine

- **generic name:** atropine
- **ATC codes:** `A03BA01`, `A03CB03`, `S01FA01`, `V03AB54`
- **DrugBank:** [DB00572](https://go.drugbank.com/drugs/DB00572) · **PubChem:** [CID 174174](https://pubchem.ncbi.nlm.nih.gov/compound/174174)
- **molar mass:** 289.3694 g/mol (C17H23NO3) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Atropine is a belladonna alkaloid used for conditions such as bradycardia and cardiac arrest, uveitis, gastric ulcer, and as a mydriatic in eye care. It is widely used, appears on the WHO essential medicines list, is approved for human and veterinary use, and is authorised in the European Union for myopia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q26272](https://www.wikidata.org/wiki/Q26272) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| atropine | parent | 289.369 | C17H23NO3 | DrugBank | [174174](https://pubchem.ncbi.nlm.nih.gov/compound/174174) | Hinderling_1985, Parrot_2024, Ström_2021 |

## Start here

> **Ström_2021_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> horses, n = 6. [Run it in the simulator](drugs/drug_atropine/Atropine_Strm2021_reference.md?tab=Simulation) · [record](drugs/drug_atropine/Atropine_Strm2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 1.905 | L/h | 1.905 L/h | horses | 6 | horse | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Ström_2021_reference](drugs/drug_atropine/Atropine_Strm2021_reference.md) |
| V | V1 | 45.22 ‡ | L | 0.646 L/kg | horses | 6 | horse | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Ström_2021_reference](drugs/drug_atropine/Atropine_Strm2021_reference.md) |
| ka | kabs | 5.948 | 1/h | 5.948 1/h | horses | 6 | horse | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Ström_2021_reference](drugs/drug_atropine/Atropine_Strm2021_reference.md) |
| F | Fab | 0.781 |  | 0.781 ilogit, eye drop | horses | 6 | horse | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Ström_2021_reference](drugs/drug_atropine/Atropine_Strm2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>stale — current check: Not simulated</sub> | [Ström_2021_reference](drugs/drug_atropine/Atropine_Strm2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 11 | Ström L et al., Topical ophthalmic atropine in horses,…, BMC veterinary research (2021) | [10.1186/s12917-021-02847-4](https://doi.org/10.1186/s12917-021-02847-4) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Hinderling_1985_reference](drugs/drug_atropine/Atropine_Hinderling1985_reference.md) | — | 1-compartment (no model) | 3 | Hinderling PH et al., Integrated pharmacokinetics and pharmac…, Journal of pharmaceutical s… (1985) | [10.1002/jps.2600740702](https://doi.org/10.1002/jps.2600740702) |
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Ekstrand_2022_reference](drugs/drug_atropine/Atropine_Ekstrand2022_reference.md) | — | 1-compartment (no model) | 0 | Ekstrand C et al., Plasma atropine concentrations associat…, Frontiers in veterinary sci… (2022) | [10.3389/fvets.2022.951300](https://doi.org/10.3389/fvets.2022.951300) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Parrot_2024_reference](drugs/drug_atropine/Atropine_Parrot2024_reference.md) | — | 1-compartment (no model) | 1 | Parrot M et al., Clinical pharmacokinetics of atropine o…, Clinical and translational… (2024) | [10.1111/cts.13753](https://doi.org/10.1111/cts.13753) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:11 | 5:39 | 1/2/1 | 0/0/0 | 0/0/0 | 81,057/16,382 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 689 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ekstrand_2022.pdf` | Ekstrand C et al., Plasma atropine concentrations associat…, Frontiers in veterinary sci… (2022) | popPK | 10 | [10.3389/fvets.2022.951300](https://doi.org/10.3389/fvets.2022.951300) | [36118347](https://pubmed.ncbi.nlm.nih.gov/36118347) | The paper reports quantitative population PK parameters (Vc, Vp, Vsp, CL) for atropine in horses with values explicitly listed in the abstract. |
| `Hinderling_1985.pdf` | Hinderling PH et al., Integrated pharmacokinetics and pharmac…, Journal of pharmaceutical s… (1985) | popPK | 10 | [10.1002/jps.2600740702](https://doi.org/10.1002/jps.2600740702) | [4032240](https://pubmed.ncbi.nlm.nih.gov/4032240) | The abstract explicitly reports quantitative PK parameters for atropine in humans, including half-lives (1 and 140 min), volume of distribution (210 L), and renal clearance (660 mL/min). |
| `Parrot_2024.pdf` | Parrot M et al., Clinical pharmacokinetics of atropine o…, Clinical and translational… (2024) | popPK | 10 | [10.1111/cts.13753](https://doi.org/10.1111/cts.13753) | [38465519](https://pubmed.ncbi.nlm.nih.gov/38465519) | The study reports quantitative PK parameters (Cmax, AUC, ka) for atropine in humans, though clearance and volume values are not explicitly listed in the provided text. |

<sub>queue written 2026-10-04T13:06:01.035225+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kim_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dexmedetomidine, while atropine is only mentioned as a co-administered induction agent. |
| popPK | Li_1991 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for theophylline, with atropine acting as a co-administered agent to test for drug interactions, not as the subject drug. |
| popPK | Page_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levetiracetam, with atropine serving only as a therapeutic agent for cardiovascular toxicity. |
| popPK | Reynaerts_2022 | irrelevant | 0 | 0 | Atropine is used as a co-administered agent in a sweat test protocol, not as the subject of a pharmacokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 13:06 UTC</sub>
