<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;Metamizole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Metamizole_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/Metamizole_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Metamizole_Fux2022_reference&quot;,&quot;label&quot;:&quot;Fux_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/Metamizole_Fux2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Metamizole

- **generic name:** Metamizole
- **ATC codes:** `N02BB02`, `N02BB52`, `N02BB72`
- **DrugBank:** [DB04817](https://go.drugbank.com/drugs/DB04817) · **PubChem:** none
- **groups:** approved, investigational, withdrawn

## About

Metamizole (dipyrone) is a pyrazolone painkiller and fever reducer used to treat pain and fever. It has been withdrawn in some countries over safety concerns, but remains in use in others.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422761](https://www.wikidata.org/wiki/Q422761) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| metamizole | parent | 311.356 | C13H17N3O4S | PubChem | [3111](https://pubchem.ncbi.nlm.nih.gov/compound/3111) | Blaser_2021 |
| 4-acetylaminoantipyrine | metabolite | 245.282 | C13H15N3O2 | PubChem | [65743](https://pubchem.ncbi.nlm.nih.gov/compound/65743) | Blaser_2021 |
| 4-aminoantipyrine | metabolite | 203.245 | C11H13N3O | PubChem | [2151](https://pubchem.ncbi.nlm.nih.gov/compound/2151) | Blaser_2021 |
| 4-formylaminoantipyrine | metabolite | 231.255 | C12H13N3O2 | PubChem | [72666](https://pubchem.ncbi.nlm.nih.gov/compound/72666) | Blaser_2021 |
| 4-methylaminoantipyrine | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Fux_2022_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_metamizole/Metamizole_Fux2022_reference.md?tab=Simulation) · [record](drugs/drug_metamizole/Metamizole_Fux2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.42 ‡ | L/h | 0.1 ml/min/kg | review reference | cattle | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Fux_2022_reference](drugs/drug_metamizole/Metamizole_Fux2022_reference.md) |
| CL | CL/F | 0.504 | L/h | 0.504 L/h | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Ekobena_2025_reference](drugs/drug_metamizole/Metamizole_Ekobena2025_reference.md) |
| V | V | 5.375 | L | 5.3746 L | review reference | cattle | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Fux_2022_reference](drugs/drug_metamizole/Metamizole_Fux2022_reference.md) |
| V | V | 11.6 | L | 11.6 L | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Ekobena_2025_reference](drugs/drug_metamizole/Metamizole_Ekobena2025_reference.md) |
| ka | kabs | 2.6 | 1/h | 2.6 h−1 | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Ekobena_2025_reference](drugs/drug_metamizole/Metamizole_Ekobena2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1</text><text x="184" y="34.0" font-size="11" text-anchor="end">Fux_2022 · CL ·/kg</text><circle cx="408.1" cy="30.0" r="4" fill="#2e7d32"><title>Fux_2022 · CL ·/kg: 0.42 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Ekobena_2025 · CL/F</text><circle cx="435.9" cy="46.0" r="4" fill="#78909c"><title>Ekobena_2025 · CL/F: 0.504 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Fux_2022 · V</text><circle cx="317.8" cy="30.0" r="4" fill="#2e7d32"><title>Fux_2022 · V: 5.375 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Ekobena_2025 · V</text><circle cx="376.3" cy="46.0" r="4" fill="#78909c"><title>Ekobena_2025 · V: 11.6 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Ekobena_2025_reference](drugs/drug_metamizole/Metamizole_Ekobena2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Ekobena P et al., Population pharmacokinetics of bictegra…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf297](https://doi.org/10.1093/jac/dkaf297) |
| <span class="pk-rf" hidden data-species="cattle" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span> | [Fux_2022_reference](drugs/drug_metamizole/Metamizole_Fux2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Fux D et al., Pharmacokinetics of metamizole (dipyron…, PloS one (2022) | [10.1371/journal.pone.0265305](https://doi.org/10.1371/journal.pone.0265305) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q30 — no SI value to build from</sub> | [Blaser_2021_metamizole](drugs/drug_metamizole/Metamizole_Blaser2021_metamizole.md) | — | general linear (no model) | 12 | Blaser LS et al., Comparative Effects of Metamizole (Dipy…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49, Q30, Q47 — no SI value to buil…</sub> | [↳ naproxen](drugs/drug_metamizole/Metamizole_Blaser2021_naproxen.md) | — | general linear (no model) | 7 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ 4_aa](drugs/drug_metamizole/Metamizole_Blaser2021_4_aa.md) | — | general linear (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ 4_aaa](drugs/drug_metamizole/Metamizole_Blaser2021_4_aaa.md) | — | general linear (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ 4_faa](drugs/drug_metamizole/Metamizole_Blaser2021_4_faa.md) | — | general linear (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ 4_maa](drugs/drug_metamizole/Metamizole_Blaser2021_4_maa.md) | — | general linear (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Ziesenitz_2019_reference](drugs/drug_metamizole/Metamizole_Ziesenitz2019_reference.md) | — | 1-compartment (no model) | 1 | Ziesenitz VC et al., Dose evaluation of intravenous metamizo…, European journal of clinica… (2019) | [10.1007/s00228-019-02720-2](https://doi.org/10.1007/s00228-019-02720-2) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [PMID32189324_2020](drugs/drug_metamizole/pgx_PMID32189324_2020_CYP2C9_safety.md) | PMID32189324, Clinical Pharmacogenetics Implementatio… (2020) | [10.1002/cpt.1830](https://doi.org/10.1002/cpt.1830) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP1A2** | `Q22` · CL | metabolism | [Bachmann_2022](drugs/drug_metamizole/pgx_Bachmann_2022_CYP1A2_Q22.md) | Bachmann F et al., Cytochrome P450 1A2 is the most importa…, British journal of clinical… (2022) | [10.1111/bcp.15108](https://doi.org/10.1111/bcp.15108) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C19** | `Q22` · CL | metabolism | [Bachmann_2022](drugs/drug_metamizole/pgx_Bachmann_2022_CYP2C19_Q22.md) | Bachmann F et al., Cytochrome P450 1A2 is the most importa…, British journal of clinical… (2022) | [10.1111/bcp.15108](https://doi.org/10.1111/bcp.15108) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q22` · CL | metabolism | [Bachmann_2022](drugs/drug_metamizole/pgx_Bachmann_2022_CYP2D6_Q22.md) | Bachmann F et al., Cytochrome P450 1A2 is the most importa…, British journal of clinical… (2022) | [10.1111/bcp.15108](https://doi.org/10.1111/bcp.15108) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **NAT2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Hein_2021](drugs/drug_metamizole/pgx_Hein_2021_NAT2_Q100.md) | Hein DW et al., Arylamine N-acetyltransferase acetylati…, Expert opinion on drug meta… (2021) | [10.1080/17425255.2021.1840551](https://doi.org/10.1080/17425255.2021.1840551) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=metamizole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | stomach | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` metabolism | PGx paper |
| metabolism | liver | `CYP1A2` metabolism, `CYP2B6` inducer, `CYP2C19` metabolism, `CYP2C9` safety_allele, `CYP2D6` metabolism, `CYP3A4` inducer, `NAT2` metabolism | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `NAT2` metabolism | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:21 | 5:33 | 4/5/0 | 0/0/0 | 1/0/4 | 498,496/37,875 | einfracz / qwen3.8-27b | 31 | 6/29 | 27/4 | 0 |

## Coverage

- **PubMed hits:** 165 matched, 84 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 9  ·  extracted 2  ·  needs review 2  ·  rejected 5  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Asmardi_1985.pdf` | Asmardi G et al., Pharmacokinetics of dipyrone in man; ro…, European journal of drug me… (1985) | popPK | 10 | [10.1007/BF03189705](https://doi.org/10.1007/BF03189705) | [4043141](https://pubmed.ncbi.nlm.nih.gov/4043141) | The study reports quantitative pharmacokinetic parameters (half-life, concentration ranges, urine excretion) for the active metabolite MAA following metamizole (dipyrone) administration in humans. |
| `Levy_2010.pdf` | Levy M et al., Population pharmacokinetic analysis of…, International journal of cl… (2010) | popPK | 10 | [10.5414/cpp48791](https://doi.org/10.5414/cpp48791) | [21084034](https://pubmed.ncbi.nlm.nih.gov/21084034) | Study reports population PK of MAA (active metabolite of metamizole/dipyrone) in humans, but specific numeric parameter values are not present in the provided abstract/evidence. |
| `Ziesenitz_2019.pdf` | Ziesenitz VC et al., Dose evaluation of intravenous metamizo…, European journal of clinica… (2019) | popPK | 10 | [10.1007/s00228-019-02720-2](https://doi.org/10.1007/s00228-019-02720-2) | [31388703](https://pubmed.ncbi.nlm.nih.gov/31388703) | The paper reports a population PK study for metamizole metabolites in children, but the extracted evidence only provides AUC values and covariate information, lacking specific numeric estimates for clearance, volume, or intercompartmental clearance. |
| `Geisslinger_1996.pdf` | Geisslinger G et al., The effects on platelet aggregation and…, Thrombosis and haemostasis (1996) | popPK | 5 |  | [8903001](https://pubmed.ncbi.nlm.nih.gov/8903001) | The study analyzes the pharmacokinetics of dipyrone (metamizole) and its metabolites in humans to correlate with platelet function, but the evidence provided does not contain any quantitative disposition parameters (e.g., clearance, volume, half-life); it only lists pharmacodynamic EC50 values. |
| `Brune_1983.pdf` | Brune K et al., Non-acidic pyrazoles: inhibition of pro…, Agents and actions (1983) | pd | 4 | [10.1007/BF01971489](https://doi.org/10.1007/BF01971489) | [6604402](https://www.ncbi.nlm.nih.gov/pubmed/6604402) | metadata signals extractable PD data (IC50) |
| `de_2017.pdf` | de Oliveira Schwaickhardt R et al., Combined use of VUV and UVC photoreacto…, The Science of the total en… (2017) | pd | 4 | [10.1016/j.scitotenv.2017.02.218](https://doi.org/10.1016/j.scitotenv.2017.02.218) | [28283289](https://www.ncbi.nlm.nih.gov/pubmed/28283289) | metadata signals extractable PD data (EC50) |
| `Fortuny_2006.pdf` | Fortuny J et al., Use of analgesics and nonsteroidal anti…, Cancer epidemiology, biomar… (2006) | pgx | 5 | [10.1158/1055-9965.EPI-06-0038](https://doi.org/10.1158/1055-9965.EPI-06-0038) | [16985032](https://www.ncbi.nlm.nih.gov/pubmed/16985032) | metadata signals extractable PGX data (CYP2E1) |
| `García-Martín_2015.pdf` | García-Martín E et al., Genetic determinants of metamizole meta…, Pharmacogenetics and genomi… (2015) | pgx | 5 | [10.1097/FPC.0000000000000157](https://doi.org/10.1097/FPC.0000000000000157) | [26111152](https://www.ncbi.nlm.nih.gov/pubmed/26111152) | metadata signals extractable PGX data (CYP2C9) |
| `Martínez_2014.pdf` | Martínez C et al., Gender and functional CYP2C and NAT2 po…, Biochemical pharmacology (2014) | pgx | 5 | [10.1016/j.bcp.2014.09.005](https://doi.org/10.1016/j.bcp.2014.09.005) | [25241292](https://www.ncbi.nlm.nih.gov/pubmed/25241292) | metadata signals extractable PGX data (CYP2C) |
| `Stamer_2003.pdf` | Stamer UM et al., Impact of CYP2D6 genotype on postoperat…, Pain (2003) | pgx | 5 | [10.1016/s0304-3959(03)00212-4](https://doi.org/10.1016/s0304-3959(03)00212-4) | [14499440](https://www.ncbi.nlm.nih.gov/pubmed/14499440) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-07 06:17 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abotaleb_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro pharmacological evaluation (binding, cytokine release) of a new compound (metamorphine), reporting no pharmacokinetic parameters for metamizole. |
| PD | Abotaleb_2025 | not_relevant | 3 | 2 | The paper reports in vitro pharmacological parameters (Ki, EC50) for a new compound (metamorphine) and qualitative dose-response for metamizole on TNF, but does not provide a quantitative PD model or extractable numeric PD parameters for Metamizole itself. |
| PGx | Agúndez_2015 | not_relevant | 1 | 0 | The text is a general review discussing the hypothesis that genetic variation in drug metabolism may predispose individuals to hypersensitivity to metamizole, but it does not report specific pharmacogenomic effects on quantitative PK or PD parameters. |
| PGx | Amo_2016 | not_relevant | 1 | 0 | The study investigates the genetic basis of NSAID hypersensitivity (an allergic/immunological adverse event), not the modification of metamizole's pharmacokinetic or pharmacodynamic parameters by gene variants. |
| PD | Arcoverde_2023 | not_relevant | 2 | 0 | The study reports PK parameters and notes that concentrations exceeded the COX inhibition threshold, but it does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response relationship. |
| PGx | Baan_2025 | not_relevant | 0 | 0 | The study examines a drug-drug interaction (metamizole inducing voriconazole metabolism) and does not report the effect of a genetic variant, genotype, or phenotype on the pharmacokinetics or pharmacodynamics of the drug. |
| PGx | Bachmann_2018 | not_relevant | 1 | 2 | The study focuses on the enzymatic mechanisms (CYP and myeloperoxidase) of metabolite demethylation in various cell systems, but it does not report how a specific gene variant/genotype alters the PK or PD parameters of metamizole in human subjects. |
| PGx | Bachmann_2021 | not_relevant | 0 | 0 | The study investigates the impact of a laboratory technique (deglucuronidation) on CYP phenotyping cocktail results in the context of drug-induced CYP induction by metamizole, not the effect of a patient's gene variant on the pharmacokinetics or pharmacodynamics of metamizole itself. |
| PGx | Bachmann_2021_2 | not_relevant | 0 | 0 | The paper reports that CYP genotypes did not have a significant effect on metamizole-induced CYP changes; no pharmacogenomic effect was found. |
| PGx | Bacracheva_1997 | not_relevant | 0 | 0 | The study reports a drug-drug interaction (cimetidine) and notes no correlation between CYP2D6 phenotype and the observed interaction, but does not report how the gene variant itself alters the PK parameters of metamizole. |
| PD | Bergmann_1988 | not_relevant | 0 | 0 | The paper reports pharmacokinetic changes (elimination delay) due to drug interaction, not a pharmacodynamic exposure-response or dose-response relationship for Metamizole. |
| PGx | Brinkman_2025 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and general pharmacology, with no report on pharmacogenomic variants affecting metamizole parameters. |
| PD | Brune_1983 | not_relevant | 4 | 2 | The paper reports IC50 values for metabolites but explicitly states that a reliable IC50 could not be assigned to metamizole itself, and no numeric PD parameters for the parent drug are provided. |
| PGx | Cascorbi_2026 | not_relevant | 0 | 0 | The paper explicitly states that predicting individual risk based on genetic factors is currently not possible and does not report any pharmacogenomic effects. |
| PD | Cherny_1994 | not_relevant | 1 | 0 | The text is a general review of analgesic therapy and pharmacological properties (e.g., ceiling effects) without reporting any specific numeric PD parameters or exposure-response data for Metamizole. |
| PGx | Cismaru_2020 | not_relevant | 3 | 5 | The paper reports a GWAS for an idiosyncratic adverse drug reaction (agranulocytosis) rather than a change in PK/PD parameters of metamizole itself. |
| PGx | Cismaru_2020_2 | not_relevant | 0 | 0 | The study investigates the association between HLA alleles and the risk of an adverse drug reaction (agranulocytosis), not a change in pharmacokinetic or pharmacodynamic parameters of metamizole. |
| popPK | Dias_2016 | irrelevant | 0 | 0 | The study investigates the antinociceptive activity of a plant extract using dipyrone (metamizole) only as a reference drug, and reports no pharmacokinetic parameters. |
| PD | Dias_2016 | not_relevant | 0 | 0 | The paper investigates the antinociceptive activity of a plant extract (Tibouchina pereirae), not Metamizole, and does not report any pharmacodynamic parameters for Metamizole. |
| popPK | Ekobena_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for bictegravir, not metamizole. |
| PD | Ekobena_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bictegravir, not metamizole, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Fidelis_2025 | not_relevant | 5 | 3 | The paper reports an association between genetic variants and an adverse drug reaction (agranulocytosis), which is a safety/toxicity outcome rather than a standard pharmacokinetic or pharmacodynamic parameter of drug efficacy. |
| popPK | Floren_2026 | irrelevant | 0 | 0 | This is a systematic review protocol on sex-specific pain management that does not report any pharmacokinetic parameters for metamizole. |
| PD | Floren_2026 | not_relevant | 0 | 0 | The paper is a protocol for a systematic review on sex/gender differences in perioperative pain management and does not report any pharmacokinetic or pharmacodynamic data, models, or numeric parameters for Metamizole. |
| PGx | Fortuny_2006 | not_relevant | 0 | 0 | The study investigates the association between drug use and bladder cancer risk, not pharmacokinetic or pharmacodynamic parameters. |
| PGx | Gaebler_2021 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between metamizole and sertraline, not a pharmacogenomic effect on the PK/PD of metamizole. |
| PGx | García-Martín_2015 | not_relevant | 3 | 5 | The paper reports genetic associations with clinical outcomes (anaphylaxis/hypersensitivity risk) rather than quantitative changes in pharmacokinetic or pharmacodynamic parameters of metamizole. |
| popPK | Geisslinger_1996 | relevant | 5 | 0 | The study analyzes the pharmacokinetics of dipyrone (metamizole) and its metabolites in humans to correlate with platelet function, but the evidence provided does not contain any quantitative disposition parameters (e.g., clearance, volume, half-life); it only lists pharmacodynamic EC50 values. |
| PGx | Hein_2021 | not_relevant | 1 | 1 | The paper is a general review of NAT2 polymorphisms; while it lists metamizole as a relevant drug, the provided text and captions only contain detailed PK data for other drugs (INH, hydralazine, etc.) and no specific quantitative PK/PD effect size for metamizole. |
| popPK | Herbert_2005 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of intestinal motility, not a pharmacokinetic study of dipyrone (metamizole). |
| PD | Herbert_2005 | not_relevant | 0 | 0 | The paper explicitly states that dipyrone (metamizole) did not affect peristalsis, reporting no concentration-effect relationship or numeric PD parameters for the target drug. |
| popPK | Hertle_1984 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contractility, not a pharmacokinetic study, and contains no disposition parameters for metamizole. |
| PD | Hertle_1984 | not_relevant | 4 | 5 | The paper reports no PD parameters for Metamizole, stating it had no direct effect on smooth muscle activity, while providing an EC50 only for the co-formulant Pitofenone. |
| popPK | Hoffmann_2022 | irrelevant | 0 | 0 | The paper describes a deep learning method for MSOT imaging in a preclinical sepsis model and does not report pharmacokinetic parameters for metamizole. |
| PD | Hoffmann_2022 | not_relevant | 0 | 0 | The paper focuses on image analysis methods for MSOT data and liver function biomarkers (ICG); Metamizole is only mentioned as a pain relief agent in the animal model protocol, with no PD or exposure-response analysis performed. |
| PGx | Jacobs_2026 | not_relevant | 0 | 0 | The paper reports clinical drug-drug interaction frequencies associated with metamizole, not pharmacogenomic effects of gene variants on PK or PD parameters. |
| PGx | Kliem_2020 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction involving CYP2B6 induction, but does not report a pharmacogenomic effect based on a specific gene variant/genotype. |
| popPK | Kumar_2025 | irrelevant | 0 | 0 | The study investigates cortisol response and transcriptomic changes in migraine patients using a citalopram challenge and does not involve metamizole. |
| PD | Kumar_2025 | not_relevant | 0 | 0 | The paper investigates the neuroendocrine response to Citalopram in migraine patients and does not contain any data, analysis, or mention of Metamizole. |
| popPK | Lacerda-Júnior_2025 | irrelevant | 0 | 0 | The study is a mechanistic model of dysmenorrhea in rats; metamizole (dipyrone) is used only as a comparator analgesic for pain scoring, not as the subject of PK analysis. |
| PD | Lacerda-Júnior_2025 | not_relevant | 0 | 0 | The paper reports concentration-response parameters (pEC50, Emax) for oxytocin, KCl, PGF2α, isoprenaline, and nifedipine, but does not report PD parameters for Metamizole (dipyrone); dipyrone is only used as a standard treatment in a behavioral pain score comparison without dose-response or exposure-response analysis. |
| PD | Levy_1995 | not_relevant | 1 | 0 | The text is a pharmacokinetic review that explicitly states dipyrone does not affect the pharmacodynamic response to other drugs, but it provides no numeric PD parameters or exposure-response data for dipyrone itself. |
| PGx | Levy_2001 | not_relevant | 0 | 0 | The study is an associative comparison between disease states (HBV carriers vs healthy) within a fixed genotype group (rapid acetylators), and does not test the causal effect of a gene variant on drug PK/PD. |
| popPK | Levy_2010 | relevant | 10 | 2 | Study reports population PK of MAA (active metabolite of metamizole/dipyrone) in humans, but specific numeric parameter values are not present in the provided abstract/evidence. |
| PGx | Macías_2021 | not_relevant | 3 | 0 | The study associates gene variants with the risk of hypersensitivity but does not report quantitative changes in specific pharmacokinetic or pharmacodynamic parameters for metamizole. |
| popPK | Morath_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of apixaban, and while metamizole is listed as a covariate/comedication, no PK parameters for metamizole itself are reported. |
| PD | Morath_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for apixaban, not a pharmacodynamic (PD) or exposure-response model; no PD parameters (e.g., Emax, EC50) are reported. |
| popPK | Moura_2016 | irrelevant | 0 | 0 | The study evaluates the analgesic efficacy of bupivacaine femoral nerve blocks and does not report any pharmacokinetic parameters for metamizole (dipyrone), which was only used as a rescue analgesic. |
| PD | Moura_2016 | not_relevant | 0 | 0 | The paper reports dose-response parameters (EC50/EC90) for Bupivacaine, not Metamizole. |
| PGx | Mouta_2025 | not_relevant | 1 | 1 | The study investigates pharmacokinetics of metamizole metabolites in dogs and identifies phenotypic variability (fast/slow metabolizers), but it does not report specific genetic variants or genotypes (it is not a pharmacogenomic study). |
| PD | Nemec_2010 | not_relevant | 1 | 0 | The paper is a qualitative review of infusion combinations and mentions that lower doses of metamizole shorten analgesia duration, but it does not provide numeric PD parameters, concentration-effect curves, or a formal PK/PD model. |
| PD | Passoni_2021 | not_relevant | 2 | 1 | The paper reports a qualitative dose-response screening (uterotrophic assay) showing no effect, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for Metamizole. |
| PD | Polzin_2015 | not_relevant | 1 | 0 | The text is a review of interactions between non-opioid analgesics and aspirin, lacking any specific PK/PD modeling or numeric PD parameters for Metamizole. |
| PD | Polzin_2021 | not_relevant | 0 | 0 | The study is an observational epidemiological analysis of clinical outcomes (mortality, MI, stroke) comparing aspirin alone vs. aspirin plus dipyrone, and does not report any pharmacokinetic data, concentration-effect relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for Metamizole. |
| PGx | Qin_2012 | not_relevant | 3 | 0 | The study investigates a drug-drug interaction (metamizole affecting bupropion PK), not the pharmacogenomic effect of gene variants on metamizole PK/PD parameters. |
| PGx | Radulovic_2021 | not_relevant | 2 | 5 | The paper describes a pharmacogenomic association with an adverse event (agranulocytosis) and hypothesizes impaired metabolic degradation, but does not report quantified PK or PD parameter changes. |
| popPK | Rivera-Espinosa_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for buprenorphine, not metamizole (which is only mentioned as a permitted co-administered drug). |
| PD | Rivera-Espinosa_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PopPK) of Buprenorphine and does not report any pharmacodynamic (PD) or exposure-response analysis for Metamizole. |
| PD | Rosenkranz_1992 | not_relevant | 2 | 1 | The study reports qualitative changes in PD endpoints (urine flow, renin, prostaglandins) and PK parameters, but does not provide numeric PD parameters (Emax, EC50) or a concentration-effect curve for Metamizole. |
| popPK | Rudalska_2025 | irrelevant | 0 | 0 | The study investigates p38α inhibitors (compound 2015) for colorectal cancer and contains no data for the drug metamizole. |
| PD | Schiantarelli_1979 | not_relevant | 1 | 0 | The text provides only a qualitative summary of pharmacodynamic interactions and effects without reporting any numeric PD parameters, dose-response curves, or concentration-effect data. |
| PD | Seliger_2018 | not_relevant | 0 | 0 | The study is a registry-based survival analysis that explicitly states dose-response analyses were not possible due to missing data, and it reports no pharmacodynamic parameters or concentration-effect relationships for Metamizole. |
| PGx | Shah_2019 | not_relevant | 2 | 0 | The text is a commentary discussing potential HLA associations with dipyrone-induced agranulocytosis but provides no data or fitted effect sizes. |
| popPK | Simon_2019 | irrelevant | 2 | 0 | Metamizole is a secondary endpoint in an ongoing/registered trial protocol focused on antibiotics, with no reported quantitative PK parameters or data in the evidence. |
| PD | Simon_2019 | not_relevant | 0 | 0 | The paper is a study protocol describing the design and methods for a PK trial; it does not report results, data, or any numeric pharmacodynamic parameters for Metamizole. |
| PGx | Stamer_2003 | not_relevant | 1 | 3 | The paper reports a pharmacogenomic effect on tramadol, not metamizole (dipyrone), which is merely included as a co-administered drug. |
| popPK | Stoschus_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics of phenobarbital, not metamizole, which is only mentioned as a co-medication covariate. |
| PD | Stoschus_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for phenobarbital, not a pharmacodynamic (PD) or exposure-response model for Metamizole. |
| PD | Todd_1985 | not_relevant | 0 | 0 | The paper is a review of Suprofen, not Metamizole, and contains no numeric PD parameters or exposure-response analysis. |
| PGx | Watermeyer_2024 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (metamizole effect on quetiapine metabolism) and does not report on pharmacogenomic variations or their impact on pharmacokinetics. |
| PD | Wehrfritz_2026 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic (PK) analysis of dipyrone metabolites using Michaelis-Menten elimination but does not report any pharmacodynamic (PD) or exposure-response relationship, as the patient remained asymptomatic and no effect parameters (e.g., Emax, EC50) were modeled or derived. |
| popPK | Ziesenitz_2019 | relevant | 10 | 0 | The paper reports a population PK study for metamizole metabolites in children, but the extracted evidence only provides AUC values and covariate information, lacking specific numeric estimates for clearance, volume, or intercompartmental clearance. |
| popPK | de_2017 | irrelevant | 0 | 0 | The paper is about wastewater treatment and mentions dipyrone (metamizole) only as a detected pollutant, providing no pharmacokinetic parameters. |
| PD | de_2017 | not_relevant | 0 | 0 | The paper focuses on wastewater treatment and environmental impact assessment, not pharmacodynamics or drug exposure-response relationships. |
| popPK | de_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro/in vivo pharmacological activity of novel cannabinoid CB2 receptor inverse agonists designed as analogs of dipyrone (metamizole) metabolites, rather than reporting pharmacokinetic parameters for metamizole itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmetamizole%5D&body=Drug%3A%20metamizole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_metamizole/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 06:17 UTC</sub>
