<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02A&quot;,&quot;href&quot;:&quot;atc/B02A.md&quot;},{&quot;label&quot;:&quot;camostat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Camostat_Kosinsky2022_reference&quot;,&quot;label&quot;:&quot;Kosinsky_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_camostat/Camostat_Kosinsky2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# camostat

- **generic name:** camostat
- **ATC codes:** `B02AB04`
- **DrugBank:** [DB13729](https://go.drugbank.com/drugs/DB13729) · **PubChem:** not captured
- **molar mass:** 398.4125 g/mol (C20H22N4O5) — DrugBank
- **groups:** investigational

## About

Camostat is a protease inhibitor that blocks trypsin and has been investigated as an oral drug, including for pancreatitis-related conditions. It is not authorised in the European Union and remains investigational rather than in routine approved use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5026909](https://www.wikidata.org/wiki/Q5026909) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| camostat | parent | 398.413 | C20H22N4O5 | DrugBank | — | Kosinsky_2022 |
| camostat mesylate | metabolite | 494.519 | C21H26N4O8S | PubChem | [5284360](https://pubchem.ncbi.nlm.nih.gov/compound/5284360) | Kim_2023, Kitagawa_2021 |
| FOY-251 | metabolite | 313 | — | the paper | — | Kosinsky_2022 |
| GBA | metabolite | 179.179 | C8H9N3O2 | PubChem | [159772](https://pubchem.ncbi.nlm.nih.gov/compound/159772) | Kim_2023 |
| GBPA | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Kosinsky_2022_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> adults. [Run it in the simulator](drugs/drug_camostat/Camostat_Kosinsky2022_reference.md?tab=Simulation) · [record](drugs/drug_camostat/Camostat_Kosinsky2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>blocking: unreported model parameter default(s): F</sub> | [Kosinsky_2022_reference](drugs/drug_camostat/Camostat_Kosinsky2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Kosinsky Y et al., Semi-Mechanistic Pharmacokinetic-Pharma…, Microbiology spectrum (2022) | [10.1128/spectrum.02167-21](https://doi.org/10.1128/spectrum.02167-21) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Kim_2023_reference](drugs/drug_camostat/Camostat_Kim2023_reference.md) | — | general linear (no model) | 6 | Kim G et al., Safety Evaluation and Population Pharma…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092357](https://doi.org/10.3390/pharmaceutics15092357) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Kitagawa_2021_reference](drugs/drug_camostat/Camostat_Kitagawa2021_reference.md) | — | 2-compartment (no model) | 0 | Kitagawa J et al., A phase I study of high dose camostat m…, Clinical and translational… (2021) | [10.1111/cts.13052](https://doi.org/10.1111/cts.13052) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Kosinsky_2022_SP](drugs/drug_camostat/pd_Kosinsky_2022_SP.md) | TMPRSS2 activity ← FOY-251 · target-mediated drug disposition | — | Kosinsky Y et al., Semi-Mechanistic Pharmacokinetic-Pharma…, Microbiology spectrum (2022) | [10.1128/spectrum.02167-21](https://doi.org/10.1128/spectrum.02167-21) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=camostat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CCK (inhibitor), PRSS1 (inhibitor), ST14 (inhibitor), TMPRSS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 17:00 | 16:24 | 1/2/0 | 1/0/0 | 0/0/0 | 297,088/49,645 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 0/11 | 11/0 | 1 |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Miyazaki_2003.pdf` | Miyazaki M et al., Estimation of bioavailability of salmon…, Drug metabolism and pharmac… (2003) | pd | 5 | [10.2133/dmpk.18.358](https://doi.org/10.2133/dmpk.18.358) | [15618756](https://www.ncbi.nlm.nih.gov/pubmed/15618756) | metadata signals extractable PD data (PK-PD) |

<sub>queue written 2026-10-05T16:45:30.957002+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kreutzberger_2021 | irrelevant | 0 | 0 | The study is an in-vitro virology experiment measuring the antiviral efficacy (EC50) of camostat against SARS-CoV-2, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Mahoney_2021 | irrelevant | 0 | 0 | The study focuses on novel TMPRSS2 inhibitors (MM3122, VD2173) and uses camostat only as a comparator for antiviral activity and protease selectivity, without reporting pharmacokinetic parameters for camostat. |
| popPK | Meng_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel aloperine derivatives, and camostat is only mentioned as a comparator for binding mode, with no PK data provided. |
| PD | Meng_2024 | not_relevant | 1 | 1 | The paper reports in vitro antiviral EC50 values for a novel compound (3i) and mentions camostat only as a mechanistic comparison, providing no exposure-response or dose-response data for camostat. |
| popPK | Miyazaki_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of salmon calcitonin, with camostat serving only as a co-administered protease inhibitor/comparator. |
| popPK | Raghavan_2022 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study where camostat is used only as a comparator for TMPRSS2 inhibition, with no pharmacokinetic parameters reported. |
| PGx | Rizka_2023 | not_relevant | 0 | 0 | The paper is a computational screening study for SARS-CoV-2 inhibitors and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of camostat. |
| PGx | Wagoner_2022 | not_relevant | 0 | 0 | The paper reports in vitro pharmacodynamic synergy of drug combinations against SARS-CoV-2 but does not investigate the impact of host gene variants or genotypes on the PK or PD of camostat. |
| PGx | Weiss_2021 | not_relevant | 0 | 0 | The paper investigates the potential of camostat to cause drug-drug interactions via transporter and enzyme inhibition, not the effect of genetic variants on camostat's pharmacokinetics or pharmacodynamics. |
| popPK | Yamamoto_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of SARS-CoV-2 entry inhibition, and camostat is used only as a comparator agent with no pharmacokinetic parameters reported. |
| popPK | Yuan_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study where camostat is mentioned only as a comparator or excluded hit, with no pharmacokinetic parameters reported. |
| PD | Yuan_2020 | not_relevant | 0 | 0 | The paper does not mention camostat; it screens other FDA-approved drugs (bexarotene, cetilistat, diiodohydroxyquinoline, abiraterone) for anti-SARS-CoV-2 activity. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 16:46 UTC</sub>
