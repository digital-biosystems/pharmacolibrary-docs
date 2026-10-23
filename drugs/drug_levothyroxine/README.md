<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03A&quot;,&quot;href&quot;:&quot;atc/H03A.md&quot;},{&quot;label&quot;:&quot;Levothyroxine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levothyroxine_Younis2018_reference&quot;,&quot;label&quot;:&quot;Younis_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/Levothyroxine_Younis2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Levothyroxine

- **generic name:** Levothyroxine
- **ATC codes:** `H03AA01`, `H03AA51`
- **DrugBank:** [DB00451](https://go.drugbank.com/drugs/DB00451) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Levothyroxine is a thyroid hormone used to treat hypothyroidism and other thyroid conditions such as goiter, thyroiditis, myxedema, and thyroid carcinoma. It is an approved medicine and is widely used as standard thyroid hormone therapy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q773449](https://www.wikidata.org/wiki/Q773449) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| levothyroxine | parent | 776.856 | C15H11I4NO4 | PubChem | [5819](https://pubchem.ncbi.nlm.nih.gov/compound/5819) | Fitch_2025, Inada_1975 |
| triiodothyronine | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Younis_2018_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_levothyroxine/Levothyroxine_Younis2018_reference.md?tab=Simulation) · [record](drugs/drug_levothyroxine/Levothyroxine_Younis2018_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 101.3 ‡ | L/h | 24.13 mL/min/kg | healthy adults | # number of subjects in the analysis (a plain integer), or unknown | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Fitch_2025_1500_g_xp_8121_sc](drugs/drug_levothyroxine/Levothyroxine_Fitch2025_1500_g_xp_8121_sc.md) |
| CL | CL/F | 0.712 | L/h | 0.712 L/h | review reference |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Younis_2018_reference](drugs/drug_levothyroxine/Levothyroxine_Younis2018_reference.md) |
| V | V/F | 164.9 | L | 164.9 L | review reference |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Younis_2018_reference](drugs/drug_levothyroxine/Levothyroxine_Younis2018_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.1</text><line x1="277.5" y1="18" x2="277.5" y2="58" stroke="#ddd"/><text x="277.5" y="72" font-size="10" text-anchor="middle">1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="452.5" y1="18" x2="452.5" y2="58" stroke="#ddd"/><text x="452.5" y="72" font-size="10" text-anchor="middle">100</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Fitch_2025 · CL ·/kg</text><circle cx="453.0" cy="30.0" r="4" fill="#ef6c00"><title>Fitch_2025 · CL ·/kg: 101.3 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Younis_2018 · CL/F</text><circle cx="264.6" cy="46.0" r="4" fill="#ef6c00"><title>Younis_2018 · CL/F: 0.712 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Fitch_2025_1500_g_xp_8121_sc](drugs/drug_levothyroxine/Levothyroxine_Fitch2025_1500_g_xp_8121_sc.md) | — | 1-compartment (no model) | 2 | Fitch R et al., Phase 1 Study Evaluating the Pharmacoki…, Clinical and translational… (2025) | [10.1111/cts.70244](https://doi.org/10.1111/cts.70244) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ 1200_g_xp_8121_sc](drugs/drug_levothyroxine/Levothyroxine_Fitch2025_1200_g_xp_8121_sc.md) | — | 1-compartment (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ 600_g_oral_lt4](drugs/drug_levothyroxine/Levothyroxine_Fitch2025_600_g_oral_lt4.md) | — | 1-compartment (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ 600_g_xp_8121_sc](drugs/drug_levothyroxine/Levothyroxine_Fitch2025_600_g_xp_8121_sc.md) | — | 1-compartment (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Inada_1975_reference](drugs/drug_levothyroxine/Levothyroxine_Inada1975_reference.md) | — | parent + metabolite (no model) | 1 | Inada M et al., Estimation of thyroxine and triiodothyr…, The Journal of clinical inv… (1975) | [10.1172/JCI108053](https://doi.org/10.1172/JCI108053) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Younis_2018_reference](drugs/drug_levothyroxine/Levothyroxine_Younis2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Younis IR et al., Stable Isotope Pharmacokinetic Studies…, Thyroid : official journal… (2018) | [10.1089/thy.2017.0380](https://doi.org/10.1089/thy.2017.0380) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Katzeff_1991_reference](drugs/drug_levothyroxine/Levothyroxine_Katzeff1991_reference.md) | — | parent + metabolite (no model) | 0 | Katzeff HL et al., Maintenance of thyroid hormone producti…, The American journal of phy… (1991) | [10.1152/ajpendo.1991.261.3.E382](https://doi.org/10.1152/ajpendo.1991.261.3.E382) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Nicoloff_1968_reference](drugs/drug_levothyroxine/Levothyroxine_Nicoloff1968_reference.md) | — | 1-compartment (no model) | 0 | Nicoloff JT et al., Studies of peripheral thyroxine distrib…, The Journal of clinical inv… (1968) | [10.1172/JCI105887](https://doi.org/10.1172/JCI105887) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **DIO1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [AlEjielat_2023](drugs/drug_levothyroxine/pgx_AlEjielat_2023_DIO1_Q100.md) | AlEjielat R et al., SNP rs11185644 in RXRA gene and SNP rs2…, BMC endocrine disorders (2023) | [10.1186/s12902-023-01425-z](https://doi.org/10.1186/s12902-023-01425-z) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **RXRA** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [AlEjielat_2023](drugs/drug_levothyroxine/pgx_AlEjielat_2023_RXRA_Q100.md) | AlEjielat R et al., SNP rs11185644 in RXRA gene and SNP rs2…, BMC endocrine disorders (2023) | [10.1186/s12902-023-01425-z](https://doi.org/10.1186/s12902-023-01425-z) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **DIO2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [AlRasheed_2019](drugs/drug_levothyroxine/pgx_AlRasheed_2019_DIO2_Q100.md) | AlRasheed MM et al., A study of the role of DIO1 and DIO2 po…, Saudi pharmaceutical journa… (2019) | [10.1016/j.jsps.2019.05.005](https://doi.org/10.1016/j.jsps.2019.05.005) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **DIO2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Arici_2018](drugs/drug_levothyroxine/pgx_Arici_2018_DIO2_Q100.md) | Arici M et al., Association between genetic polymorphis…, Endocrine journal (2018) | [10.1507/endocrj.EJ17-0162](https://doi.org/10.1507/endocrj.EJ17-0162) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **DIO2** | `Q327` · kin | metabolism | [Mazza_2025](drugs/drug_levothyroxine/pgx_Mazza_2025_DIO2_Q327.md) | Mazza AD, Personalized Approaches to Hypothyroidi…, Cureus (2025) | [10.7759/cureus.90685](https://doi.org/10.7759/cureus.90685) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **DIO3** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Mohmmed_2023](drugs/drug_levothyroxine/pgx_Mohmmed_2023_DIO3_Q100.md) | Mohmmed AH et al., Deiodinase Type 3 Polymorphism (rs11907…, Turkish journal of pharmace… (2023) | [10.4274/tjps.galenos.2022.04876](https://doi.org/10.4274/tjps.galenos.2022.04876) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **DIO2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Premawardhana_2023](drugs/drug_levothyroxine/pgx_Premawardhana_2023_DIO2_Q100.md) | Premawardhana LD et al., Designing a combined liothyronine (LT3)…, Frontiers in endocrinology (2023) | [10.3389/fendo.2023.1282608](https://doi.org/10.3389/fendo.2023.1282608) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=levothyroxine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer, `SLCO1A2` substrate, `SLCO2B1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inducer, `SLCO1A2` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inducer | DrugBank actor |
| distribution | testis | `ABCB1` inducer | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C8` inhibitor, `SLCO1B1` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inducer | DrugBank actor |
| excretion | liver | `ABCB1` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: DIO1 (target), DIO2 (metabolism), DIO3 (metabolism), ITGAV (binder), ITGB3 (binder), RXRA (target), SERPINA7 (substrate), SLC16A2 (inhibitor), SLC7A5 (unknown), SLCO1C1 (substrate), SLCO4A1 (substrate), THRA (target), THRB (target), TTR (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-22 12:56 | 46:48 | 3/5/0 | 0/0/0 | 0/0/7 | 1,258,107/84,087 | einfracz / qwen3.8-27b | 57 | 24/33 | 53/4 | 0 |

## Coverage

- **PubMed hits:** 692 matched, 165 returned
- **screened:** 42  ·  **relevant:** 3
- **records:** 8  ·  extracted 0  ·  needs_review 3  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_14 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hays_1994.pdf` | Hays MT et al., Human thyroxine absorption: age effects…, Thyroid : official journal… (1994) | popPK | 8 | [10.1089/thy.1994.4.55](https://doi.org/10.1089/thy.1994.4.55) | [8054862](https://pubmed.ncbi.nlm.nih.gov/8054862) | The paper reports quantitative T4 absorption percentages and mentions compartmental model comparisons, but it lacks explicit clearance or volume of distribution values for levothyroxine in the provided text. |
| `Aimuzi_2020.pdf` | Aimuzi R et al., Perfluoroalkyl and polyfluroalkyl subst…, Environmental pollution (Ba… (2020) | pd | 5 | [10.1016/j.envpol.2020.114557](https://doi.org/10.1016/j.envpol.2020.114557) | [32388293](https://www.ncbi.nlm.nih.gov/pubmed/32388293) | metadata signals extractable PD data (exposure-response) |
| `Cheng_2015.pdf` | Cheng Y et al., Relative developmental toxicities of pe…, Ecotoxicology and environme… (2015) | pd | 5 | [10.1016/j.ecoenv.2014.10.004](https://doi.org/10.1016/j.ecoenv.2014.10.004) | [25463847](https://www.ncbi.nlm.nih.gov/pubmed/25463847) | metadata signals extractable PD data (EC50) |
| `Leonard_2016.pdf` | Leonard JA et al., Estimating Margin of Exposure to Thyroi…, Toxicological sciences : an… (2016) | pd | 5 | [10.1093/toxsci/kfw022](https://doi.org/10.1093/toxsci/kfw022) | [26865668](https://www.ncbi.nlm.nih.gov/pubmed/26865668) | metadata signals extractable PD data (PharmacodynamicModel) |
| `Pennock_1992.pdf` | Pennock GD et al., Cardiac effects of 3,5-diiodothyropropi…, The Journal of pharmacology… (1992) | pd | 4 | not captured | [1403782](https://www.ncbi.nlm.nih.gov/pubmed/1403782) | metadata signals extractable PD data (EC50) |
| `Pennock_1994.pdf` | Pennock GD et al., Identification of simple substituted ph…, The Journal of pharmacology… (1994) | pd | 4 | not captured | [8301561](https://www.ncbi.nlm.nih.gov/pubmed/8301561) | metadata signals extractable PD data (EC50) |
| `Shiizaki_2010.pdf` | Shiizaki K et al., Establishment of yeast reporter assay s…, Toxicology in vitro : an in… (2010) | pd | 4 | [10.1016/j.tiv.2009.10.001](https://doi.org/10.1016/j.tiv.2009.10.001) | [19853653](https://www.ncbi.nlm.nih.gov/pubmed/19853653) | metadata signals extractable PD data (EC50) |
| `Yazici_2004.pdf` | Yazici M et al., Effects of thyroxin therapy on cardiac…, International journal of ca… (2004) | pd | 4 | [10.1016/j.ijcard.2003.05.015](https://doi.org/10.1016/j.ijcard.2003.05.015) | [15193811](https://www.ncbi.nlm.nih.gov/pubmed/15193811) | metadata signals extractable PD data (Emax) |
| `Suchy_2011.pdf` | Suchy D et al., Ezetimibe--a new approach in hyperchole…, Pharmacological reports : PR (2011) | pgx | 8 | [10.1016/s1734-1140(11)70698-3](https://doi.org/10.1016/s1734-1140(11)70698-3) | [22358082](https://www.ncbi.nlm.nih.gov/pubmed/22358082) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yamanaka_2007.pdf` | Yamanaka H et al., Glucuronidation of thyroxine in human l…, Drug metabolism and disposi… (2007) | pgx | 8 | [10.1124/dmd.107.016097](https://doi.org/10.1124/dmd.107.016097) | [17591679](https://www.ncbi.nlm.nih.gov/pubmed/17591679) | metadata signals extractable PGX data (UGT1A8, PK/PD-context) |
| `Baze_2024.pdf` | Baze A et al., Comparison of in vitro thyroxine (T4) m…, Toxicology in vitro : an in… (2024) | pgx | 7 | [10.1016/j.tiv.2023.105763](https://doi.org/10.1016/j.tiv.2023.105763) | [38142784](https://www.ncbi.nlm.nih.gov/pubmed/38142784) | metadata signals extractable PGX data (Ugt2b1, PK/PD-context) |
| `Granados_2024.pdf` | Granados JC et al., Organic anion transporters in remote se…, Pharmacology & therapeutics (2024) | pgx | 5 | [10.1016/j.pharmthera.2024.108723](https://doi.org/10.1016/j.pharmthera.2024.108723) | [39284369](https://www.ncbi.nlm.nih.gov/pubmed/39284369) | metadata signals extractable PGX data (SLCO1B1) |
| `Liang_2019.pdf` | Liang L et al., [Analysis of genes related to hypothyro…, Zhonghua yi xue za zhi (2019) | pgx | 5 | [10.3760/cma.j.issn.0376-2491.2019.42.015](https://doi.org/10.3760/cma.j.issn.0376-2491.2019.42.015) | [31715674](https://www.ncbi.nlm.nih.gov/pubmed/31715674) | metadata signals extractable PGX data (UGT1A1) |
| `Yoder_2007.pdf` | Yoder Graber AL et al., UGT1A1*28 genotype affects the in-vitro…, Pharmacogenetics and genomi… (2007) | pgx | 5 | [10.1097/FPC.0b013e3280121fe9](https://doi.org/10.1097/FPC.0b013e3280121fe9) | [17622938](https://www.ncbi.nlm.nih.gov/pubmed/17622938) | metadata signals extractable PGX data (UGT1A1) |

<sub>queue written 2026-10-22T12:13:22.926184+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbott_2021 | not_relevant | 0 | 0 | The paper reports protein sequence alignments for CYP3A4 and NR1I3 in frogs and other species, but contains no data on levothyroxine pharmacokinetics or pharmacodynamics. |
| PD | Aimuzi_2020 | not_relevant | 0 | 0 | The paper investigates the association between PFAS exposure and thyroid hormone levels, not the pharmacodynamic response to Levothyroxine administration. |
| PGx | Baze_2024 | not_relevant | 0 | 0 | The study compares T4 metabolism between species (rat vs human) and the effect of nuclear receptor inducers, but does not investigate the impact of specific gene variants or genotypes on levothyroxine PK/PD. |
| PGx | Berry_1993 | not_relevant | 0 | 0 | The paper studies endogenous thyroid hormone metabolism in mice and does not report pharmacokinetic or pharmacodynamic effects of levothyroxine administration modified by genetics. |
| PD | Blossey_1984 | not_relevant | 0 | 0 | The paper studies Medroxyprogesterone Acetate (MPA), not Levothyroxine, and reports dose-response relationships for MPA's endocrine effects. |
| popPK | Brun_2021 | irrelevant | 2 | 0 | The paper describes a pharmacodynamic decision aid tool for dosage adjustment and mentions a PK model structure, but it does not report quantitative PK parameter values (CL, V, ka) for levothyroxine; specific numbers are not present in the evidence. |
| PGx | Buxbaum_2023 | not_relevant | 0 | 0 | The paper discusses transthyretin in Alzheimer's disease and thyroid hormone transport, not the pharmacokinetics or pharmacodynamics of levothyroxine. |
| PD | Caron_2022 | not_relevant | 1 | 0 | The paper is a qualitative review of factors influencing levothyroxine dose and absorption, lacking any numeric PD parameters or concentration-effect analysis. |
| PGx | Caron_2022 | not_relevant | 2 | 1 | The paper is a review of non-genetic factors influencing levothyroxine PK/PD; it states that the data on genetic variants in deiodinase genes are contradictory and does not report any quantifiable pharmacogenomic effects. |
| PD | Cascorbi_2012 | not_relevant | 1 | 0 | The paper is a general review of drug interaction principles and mentions levothyroxine only as a qualitative example of an absorption interaction, without providing any numeric PD parameters or exposure-response data. |
| PGx | Chen_2018 | not_relevant | 1 | 0 | The study reports in vitro enzyme inhibition by thyroid hormones, not the effect of a gene variant on levothyroxine pharmacokinetics or pharmacodynamics. |
| popPK | Cheng_2015 | irrelevant | 0 | 0 | The paper is a developmental toxicity study in zebrafish regarding environmental pollutants, not a pharmacokinetic study of levothyroxine. |
| PD | Cheng_2015 | not_relevant | 0 | 0 | The paper studies the developmental toxicity of pentachloroanisole and pentachlorophenol in zebrafish, not the pharmacodynamics of Levothyroxine. |
| PD | Chetkowski_1986 | not_relevant | 0 | 0 | The paper studies transdermal estradiol and oral conjugated estrogens, not Levothyroxine. |
| PD | Chung_2025 | not_relevant | 0 | 0 | The paper investigates the association between PFAS exposure and thyroid hormone levels, not the pharmacodynamics of Levothyroxine. |
| PD | Cioffi_2020 | not_relevant | 0 | 0 | The paper investigates the effect of ionizing radiation on thyroid function, not the pharmacodynamics of Levothyroxine. |
| popPK | Clark_2022 | irrelevant | 2 | 0 | The paper is a theoretical mathematical analysis of dosing irregularity metrics and does not report quantitative PK parameter values (CL, V, etc.) for levothyroxine in the provided evidence. |
| PD | Conley_2025 | not_relevant | 0 | 0 | The paper studies the toxicity of perfluorohexane sulfonate (PFHxS), not Levothyroxine. |
| popPK | Convertino_2018 | irrelevant | 0 | 0 | The study is a PK/PD analysis of Perfluorooctanoate (PFOA), not levothyroxine. |
| PGx | Dalvi_2026 | not_relevant | 0 | 0 | The paper is a broad review of recurrent pregnancy loss and mentions levothyroxine and pharmacogenomics only in the context of general management and emerging therapies, without reporting specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Danhausen_2026 | irrelevant | 0 | 0 | The paper describes a yeast-based biosensor assay for detecting thyroxine in environmental samples, not a pharmacokinetic study of levothyroxine disposition. |
| PD | Danhausen_2026 | not_relevant | 0 | 0 | The paper describes a biosensor assay for detecting thyroxine (T4) and reports assay performance metrics (EC50, LOD) for the detection method, not a pharmacodynamic exposure-response relationship for the drug Levothyroxine in a biological system. |
| PD | Dapaah-Afriyie_2024 | not_relevant | 1 | 0 | The text is a clinical pearl discussing qualitative mechanisms of drug interactions (TBG binding) and empty sella diagnosis, without reporting any numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Davis_2015 | not_relevant | 0 | 0 | The paper reviews the mechanism of P-glycoprotein modulation by a thyroid hormone analog (nanotetrac) in cancer cells to affect chemotherapy retention, and does not report pharmacogenomic effects on levothyroxine PK/PD parameters in humans. |
| PGx | Deal_2021 | not_relevant | 0 | 0 | The paper examines thyroid and appetite regulation in goldfish using exogenous T4 and propylthiouracil, not the pharmacogenomics of levothyroxine in humans. |
| popPK | Degitz_2024 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of PFAS interference with thyroid targets, not a pharmacokinetic study reporting disposition parameters for levothyroxine. |
| PD | Degitz_2024 | not_relevant | 0 | 0 | The paper reports in vitro EC50 values for PFAS chemicals interfering with thyroid targets, not a pharmacodynamic or exposure-response relationship for the drug Levothyroxine. |
| PD | Derakhshan_2020 | not_relevant | 3 | 2 | The paper reports epidemiological associations between thyroid hormone levels and birthweight (dose-response) but does not model pharmacodynamics of Levothyroxine administration, nor does it provide standard PD parameters (Emax, EC50) for the drug. |
| PGx | Duntas_2002 | not_relevant | 0 | 0 | The paper discusses the relationship between thyroid disease status and lipid profiles, but does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of levothyroxine. |
| PGx | Duntas_2013 | not_relevant | 3 | 1 | The paper is a review of hypothyroidism and depression, mentioning genetic variants only as potential causes of disease or drug resistance, without reporting specific pharmacogenomic effects on levothyroxine's PK/PD. |
| PGx | Duntas_2015 | not_relevant | 0 | 0 | The paper discusses selenium supplementation and its effects on thyroid health/viral diseases, mentioning SNPs related to Se utilization but does not report pharmacogenomic effects on levothyroxine PK/PD parameters. |
| PGx | Duntas_2019 | not_relevant | 0 | 0 | The paper discusses general management of hypothyroidism in the elderly and does not report any pharmacogenomic effects on levothyroxine PK or PD. |
| popPK | Eckel_1979 | irrelevant | 0 | 0 | The study investigates the cellular uptake mechanism of L-tri-iodothyronine (T3) in rat liver cells, not the pharmacokinetics of levothyroxine. |
| popPK | Edmunds_1997 | irrelevant | 0 | 0 | The study is an in-vitro reporter gene assay for estrogenic activity of environmental contaminants and does not report pharmacokinetic parameters for levothyroxine. |
| PD | Edmunds_1997 | not_relevant | 0 | 0 | The paper reports a dose-response for 17 beta-estradiol and other contaminants, but explicitly states that thyroxine did not induce activity, providing no PD parameters for Levothyroxine. |
| popPK | Eriksen_2020 | irrelevant | 0 | 0 | The study investigates the effect of iodine supplementation on thyroid function markers (TSH, T4, Tg) in pregnancy and does not report pharmacokinetic parameters (CL, V, ka) for levothyroxine. |
| popPK | Eytcheson_2024 | irrelevant | 0 | 0 | This is an in vitro binding assay for chemicals to thyroxine-binding globulin, not a pharmacokinetic study of levothyroxine disposition. |
| PD | Eytcheson_2024 | not_relevant | 0 | 0 | The paper reports in vitro binding data for ToxCast chemicals to thyroxine-binding globulin, not a pharmacodynamic or exposure-response relationship for the drug Levothyroxine. |
| popPK | Fetter_2015 | irrelevant | 0 | 0 | The study investigates goitrogenic effects and gene expression in zebrafish, not the pharmacokinetics of levothyroxine. |
| PD | Fetter_2015 | not_relevant | 0 | 0 | The paper reports dose-response data for goitrogens (methimazole and PTU) in zebrafish, not for Levothyroxine. |
| PGx | Fox_1987 | not_relevant | 0 | 0 | The paper describes a newborn screening program and does not report pharmacogenomic effects on levothyroxine pharmacokinetics or pharmacodynamics. |
| PGx | Freire_2021 | not_relevant | 0 | 0 | The study examines the association between pesticide metabolites, gene-environment interactions (CYP2C19/2D6), and endogenous hormone levels (including thyroid hormones), but it does not involve the administration of levothyroxine or the analysis of its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Gatta_2025 | not_relevant | 1 | 0 | The paper describes a digital health tool for combination thyroid therapy and mentions genetic factors only as a general context for individual variation, without reporting any specific pharmacokinetic or pharmacodynamic data linking gene variants to levothyroxine parameters. |
| popPK | Gesztelyi_2003 | irrelevant | 0 | 0 | The study is a pharmacological investigation of adenosine receptor mechanisms in guinea pig atrial tissue, not a pharmacokinetic study of levothyroxine disposition parameters. |
| PD | Gillmore_2025 | not_relevant | 0 | 0 | The paper reports pharmacodynamic effects (TTR reduction) of Nexiguran ziclumeran, not Levothyroxine, and does not provide an exposure-response or dose-response model with numeric PD parameters. |
| popPK | Glinoer_1977 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of thyroxine-binding globulin (TBG), not levothyroxine itself, and does not report levothyroxine disposition parameters. |
| PGx | Gottwald-Hostalek_2021 | not_relevant | 2 | 0 | The paper is a review discussing combination therapy and mentions deiodinase polymorphisms as a source of heterogeneity, but it does not report specific pharmacogenomic effects on levothyroxine PK or PD parameters with data. |
| PGx | Granados_2024 | not_relevant | 0 | 0 | The paper is a theoretical review on Organic Anion Transporters and the Remote Sensing and Signaling Theory, and does not report pharmacogenomic effects on levothyroxine pharmacokinetics or pharmacodynamics. |
| popPK | Grieve_1999 | irrelevant | 0 | 0 | The study investigates the effects of propylthiouracil on nitric oxide production and vascular responsiveness in rat aorta, and does not report any pharmacokinetic parameters for levothyroxine. |
| PD | Grieve_1999 | not_relevant | 0 | 0 | The paper studies the effects of propylthiouracil (PTU) on vascular response, not the pharmacodynamics of Levothyroxine itself. |
| PGx | Gunjača_2019 | not_relevant | 0 | 0 | The study reports GWAS associations with endogenous thyroid hormone levels in a general population, not pharmacokinetic or pharmacodynamic parameters of levothyroxine drug therapy. |
| PD | Gutshall_1988 | not_relevant | 3 | 2 | The paper describes a qualitative dose-selection study for T4 in a rat model but does not report numeric PD parameters (e.g., ED50, Emax) or a quantitative concentration-effect curve for Levothyroxine. |
| PD | Harrison_1984 | not_relevant | 0 | 0 | The paper studies the effect of thyroid status on salbutamol response, not the pharmacodynamics of Levothyroxine itself. |
| popPK | Hawthorn_1988 | irrelevant | 0 | 0 | The study examines beta-adrenoceptor and calcium channel binding in rat tissue, not the pharmacokinetic parameters of the drug levothyroxine. |
| PD | Hawthorn_1988 | not_relevant | 3 | 2 | The study reports changes in receptor binding and EC50 values for other agents (isoproterenol, calcium) in response to thyroid status, but does not provide a pharmacodynamic model or exposure-response relationship for Levothyroxine itself. |
| popPK | Hays_1994 | relevant | 8 | 3 | The paper reports quantitative T4 absorption percentages and mentions compartmental model comparisons, but it lacks explicit clearance or volume of distribution values for levothyroxine in the provided text. |
| popPK | Hoffman_2002 | irrelevant | 0 | 0 | The study is a pharmacodynamic model of bone resorption in rats using thyroxine (T4) as an inducer, not a pharmacokinetic study of levothyroxine. |
| PD | Hoffman_2002 | not_relevant | 3 | 1 | The paper describes a qualitative dose-dependent effect of SB-273005 on T4-induced bone resorption but does not provide numeric PD parameters (Emax, EC50) or an extractable concentration-effect curve for Levothyroxine itself. |
| popPK | Ibad_2023 | irrelevant | 0 | 0 | The study examines the association between thyroid hormone levels and muscle mass (sarcopenia) but does not report pharmacokinetic parameters like clearance or volume of distribution for levothyroxine. |
| popPK | Jacobs_1997 | irrelevant | 0 | 0 | The study reports the pharmacokinetics of propranolol in cats, using levothyroxine only to induce a hyperthyroid state rather than as the subject drug. |
| PGx | Janssen_1995 | not_relevant | 0 | 0 | The paper characterizes a structural variant of TBG and its effect on heat stability, not the pharmacokinetics or pharmacodynamics of levothyroxine therapy. |
| PGx | Jo_2019 | not_relevant | 4 | 2 | The paper describes the pathogenic mechanism (ER stress) of a DIO2 variant in the brain, explaining why LT4 may fail, but it does not report measured changes in standard PK/PD parameters (e.g., TSH response, AUC) resulting from the variant in the context of drug treatment. |
| PD | Kampmann_1981 | not_relevant | 0 | 0 | The paper discusses antithyroid drugs (methimazole, propylthiouracil) and does not contain any pharmacodynamic or exposure-response data for Levothyroxine. |
| popPK | Kaptein_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of thyroxine (T4), not levothyroxine, and levothyroxine is not the subject drug. |
| popPK | Katzeff_1991 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for thyroxine (T4) and triiodothyronine (T3) in rats, not for levothyroxine. |
| PGx | Klinefelter_2018 | not_relevant | 0 | 0 | The paper focuses on PCB toxicology in mice and mentions thyroxine changes as a sign of toxicity, not pharmacogenomics of levothyroxine drug therapy. |
| popPK | Korevaar_2019 | irrelevant | 0 | 0 | The paper is a systematic review of thyroid function test abnormalities and preterm birth risk, not a pharmacokinetic study of levothyroxine. |
| PGx | Kwiecinski_1991 | not_relevant | 0 | 0 | The study analyzes seasonal and reproductive variations in hormone binding proteins in bats, not pharmacogenomic effects on levothyroxine pharmacokinetics or pharmacodynamics. |
| PGx | Köhrle_2022 | not_relevant | 0 | 0 | The paper is a general review of deiodinase enzymes and thyroid hormone metabolism, not a study reporting pharmacogenomic effects on levothyroxine PK/PD parameters. |
| PGx | Kühn_1989 | not_relevant | 0 | 0 | The study investigates TRH effects on growth hormone and thyroid hormones in dwarf hens, not the pharmacokinetics or pharmacodynamics of levothyroxine. |
| PGx | Lacámara_2020 | not_relevant | 1 | 5 | The paper describes a clinical phenotype (resistance to exogenous thyroxine) characterized by hormonal ratios (PD), but explicitly states that genetic testing was normal and the tested DIO2 polymorphism did not correlate with the phenotype, so no pharmacogenomic effect is reported. |
| popPK | Latif_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of novel TSH receptor agonists (MS437/MS438) in mice, not levothyroxine. |
| PD | Latif_2015 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for novel small molecule TSHR agonists (MS437/MS438), not for Levothyroxine. |
| popPK | Lauffer_2024 | irrelevant | 0 | 0 | The study is a meta-analysis of free T4 reference intervals in neonates, not a pharmacokinetic study of levothyroxine disposition parameters. |
| PGx | Laurberg_2005 | not_relevant | 0 | 0 | The paper discusses general management and pathophysiology of hypothyroidism in the elderly but does not report any gene variant or genotype influencing levothyroxine pharmacokinetics or pharmacodynamics. |
| PGx | Lee_2021 | not_relevant | 0 | 0 | The paper reviews inherited defects in the synthesis and metabolism of endogenous thyroid hormones (deiodinases/selenoproteins), not the pharmacokinetics or pharmacodynamics of levothyroxine as a drug. |
| popPK | Leonard_1990 | irrelevant | 0 | 0 | This is a mechanistic in-vitro study on the regulation of type II deiodinase enzyme half-life in glial cells, not a pharmacokinetic study of levothyroxine disposition parameters. |
| popPK | Leonard_2016 | irrelevant | 0 | 0 | The study focuses on the PBPK modeling of TPO inhibitors (e.g., methimazole, triclosan) and uses levothyroxine (T4) only as a biomarker endpoint, not as the subject drug for PK parameter estimation. |
| PD | Leonard_2016 | not_relevant | 0 | 0 | The paper focuses on TPO inhibitors (e.g., methimazole, triclosan) and does not report any pharmacodynamic or exposure-response data for Levothyroxine. |
| PGx | Li_2026 | not_relevant | 0 | 0 | The paper investigates gene therapy for liver disease in mice and does not study the pharmacogenomics of levothyroxine. |
| PGx | Liang_2019 | not_relevant | 1 | 2 | The paper investigates genetic associations with the etiology of hypothyroidism (disease pathogenesis) rather than the pharmacokinetic or pharmacodynamic response to levothyroxine therapy. |
| PD | Lu_2023 | not_relevant | 0 | 0 | The paper studies the effects of bisphenols and iodine on thyroid function, not the pharmacodynamics of Levothyroxine. |
| popPK | Lönnroth_1987 | irrelevant | 0 | 0 | The study examines the effects of growth hormone on IGF-II binding in rat adipocytes, with levothyroxine used only for replacement therapy in hypophysectomized rats, and reports no pharmacokinetic parameters for levothyroxine. |
| PD | Lönnroth_1987 | not_relevant | 0 | 0 | The paper studies the effects of Growth Hormone and Insulin on IGF-II receptors in rat adipocytes; Levothyroxine is only mentioned as a replacement therapy for hypophysectomized rats and is not the subject of any pharmacodynamic or exposure-response analysis. |
| PGx | Mangione_2015 | not_relevant | 0 | 0 | The paper describes the development of bifunctional crosslinking ligands for transthyretin (TTR) to treat amyloidosis and does not investigate levothyroxine pharmacokinetics/pharmacodynamics or pharmacogenomics. |
| PGx | Mazza_2025 | not_relevant | 7 | 3 | The paper is a review discussing the role of DIO2 polymorphisms in T4-to-T3 conversion (which relates to levothyroxine pharmacodynamics) but the provided text does not contain specific extracted data or fitted effect sizes quantifying the change in PK/PD parameters. |
| popPK | Menzel_2024 | irrelevant | 0 | 0 | The study evaluates clinical outcomes (thyroid function and kidney values) in cats treated with radioiodine, and levothyroxine is only mentioned as a replacement therapy for hypothyroidism without any pharmacokinetic modeling or parameter estimation. |
| PGx | Mohan_1991 | not_relevant | 0 | 0 | The text describes a study on dietary fats and lipid metabolism in Zucker rats, with no mention of levothyroxine or pharmacogenomics. |
| PGx | Nagata_2000 | not_relevant | 0 | 0 | The paper is a general review of sulfotransferase pharmacogenetics and mentions thyroxine substrate activity but does not report a specific pharmacogenomic effect on the PK or PD of levothyroxine. |
| popPK | Nicoloff_1968 | irrelevant | 2 | 3 | The study reports compartmental volumes (distrubution spaces) and hepatic uptake percentages for T4, but lacks standard clearance, half-life, or absorption rate parameters required for population PK modeling of levothyroxine. |
| PD | Noh_2025 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent changes in thyroid function and antibody levels for K1-70, but does not provide numeric PD parameters (e.g., Emax, EC50) or a formal exposure-response model for Levothyroxine. |
| popPK | Oppenheimer_1975 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of thyroxine (T4) and triiodothyronine (T3), not the synthetic drug levothyroxine (L-T4). |
| popPK | Ozdemirci_2001 | irrelevant | 0 | 0 | This is a functional pharmacology study in rabbits where L-thyroxine is used as a treatment to induce a disease state (hyperthyroidism), not a study reporting pharmacokinetic parameters (CL, V, etc.) for the drug. |
| PGx | Paragliola_2015 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between antiepileptics and hormonal therapies (including thyroxine/levothyroxine) but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Patchett_1995 | irrelevant | 0 | 0 | The paper describes the pharmacology of a growth hormone secretagogue (L-163,191) and mentions thyroxine only as a negative control hormone, providing no PK parameters for levothyroxine. |
| PD | Patchett_1995 | not_relevant | 0 | 0 | The paper studies L-163,191 (a growth hormone secretagogue), not Levothyroxine. |
| popPK | Paul_2013 | irrelevant | 0 | 0 | The paper investigates the mechanism of triclosan's interaction with nuclear receptors and its effect on thyroid hormone homeostasis, but does not report pharmacokinetic parameters for levothyroxine. |
| PD | Paul_2013 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of triclosan on nuclear receptors and does not report any pharmacodynamic or exposure-response data for Levothyroxine. |
| popPK | Pennock_1992 | irrelevant | 0 | 0 | The study focuses on the cardiac pharmacodynamic effects of a thyroid hormone analog (DITPA) and L-thyroxine as a comparator, not on the pharmacokinetic parameters (CL, V, ka) of levothyroxine. |
| popPK | Pennock_1994 | irrelevant | 0 | 0 | This is a pharmacodynamic study investigating cardiac effects of a thyromimetic compound, not a pharmacokinetic study reporting disposition parameters for levothyroxine. |
| PD | Pennock_1994 | not_relevant | 3 | 2 | The paper reports an EC50 for a novel analog (DIHPA) in vitro and qualitative hemodynamic comparisons for Levothyroxine in vivo, but does not provide a quantitative exposure-response or dose-response curve with numeric PD parameters for Levothyroxine. |
| PD | Percy_2021 | not_relevant | 0 | 0 | The paper investigates the association between environmental organophosphate esters and thyroid hormones, not the pharmacodynamics of Levothyroxine. |
| popPK | Plasqui_2003 | irrelevant | 0 | 0 | The study investigates seasonal metabolic variations and thyroid hormone levels, but does not report pharmacokinetic parameters for levothyroxine. |
| PGx | Premawardhana_2023 | not_relevant | 1 | 0 | The paper is a design guideline for a clinical trial and mentions the deiodinase 2 polymorphism only as a potential factor for patient selection, without reporting any measured pharmacokinetic or pharmacodynamic data or effect sizes for levothyroxine. |
| popPK | Preston_2017 | irrelevant | 0 | 0 | The study investigates the association between urinary organophosphate metabolite levels and thyroid hormone concentrations, rather than determining pharmacokinetic disposition parameters for levothyroxine. |
| PGx | Puthucheary_2011 | not_relevant | 0 | 0 | The paper discusses genetic influences on sports performance and mentions thyroid hormones in the context of muscle growth, but does not report any pharmacokinetic or pharmacodynamic data for levothyroxine. |
| popPK | Rabab_2026 | irrelevant | 0 | 0 | The study assesses diurnal fluctuations of endogenous thyroid hormones for diagnostic purposes and does not report pharmacokinetic parameters (clearance, volume, etc.) for levothyroxine. |
| popPK | Reddy_1999 | irrelevant | 0 | 0 | The study investigates calcium channel activity and mechanical responses in rat portal veins, which is a physiological/mechanistic study, not a pharmacokinetic study, and reports no PK parameters for levothyroxine. |
| PD | Reddy_1999 | not_relevant | 0 | 0 | The paper studies the effect of L-thyroxine-induced hyperthyroidism on calcium channel activity in rat portal veins, not the pharmacodynamic exposure-response relationship of the drug itself. |
| PD | Rossi_2025 | not_relevant | 1 | 0 | The paper is a mini-review discussing general challenges and controversies in levothyroxine therapy without reporting specific numeric PD parameters or exposure-response data. |
| PD | SIMKIN_1965 | not_relevant | 0 | 0 | The paper studies the effect of thyroxine on the gonadotrophin dose-response in chick testicular tissue, not the pharmacodynamics of Levothyroxine itself. |
| PD | Schneider_2003 | not_relevant | 1 | 0 | The paper is a systematic review that qualitatively summarizes conflicting results and explicitly states that a significant dose-response was not found, providing no numeric PD parameters or extractable concentration-effect curves. |
| PD | Schrijver_2024 | not_relevant | 0 | 0 | The paper investigates the dose-response relationship for Lithium, not Levothyroxine. |
| popPK | Shiizaki_2010 | irrelevant | 0 | 0 | The study describes an in vitro yeast reporter assay for thyroid hormone receptor ligands and does not report pharmacokinetic parameters for levothyroxine. |
| PD | Shiizaki_2010 | not_relevant | 0 | 0 | The paper describes a yeast reporter assay for thyroid hormone receptors and reports EC50 values for T3/T4 and environmental chemicals, but it does not report a pharmacodynamic or exposure-response relationship for the drug Levothyroxine. |
| PGx | Sirivarasai_2021 | not_relevant | 0 | 0 | The study investigates the effect of pesticide exposure and genotype on thyroid hormone levels, not the effect of genotype on levothyroxine pharmacokinetics or pharmacodynamics. |
| PGx | Smallridge_1989 | not_relevant | 0 | 0 | The paper studies the clinical phenotype of thyroid hormone resistance (likely TSH receptor or TR-beta mutations) and physiological responses, but does not report pharmacokinetic or pharmacodynamic changes of levothyroxine specifically driven by a genotype in a pharmacogenomic context. |
| PD | Solomon_1996 | not_relevant | 0 | 0 | The paper is a review of polypharmacy in bipolar disorder and mentions levothyroxine only in the context of combination therapy efficacy, without providing any pharmacodynamic models, exposure-response data, or numeric PD parameters. |
| PGx | Spoke_2020 | not_relevant | 0 | 0 | The paper discusses CYP2D6 polymorphism affecting antithyroid drugs (methimazole/PTU), not levothyroxine. |
| popPK | Stachelek_2000 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic study of myosin V and thyroid hormone endocytosis, not a pharmacokinetic study of levothyroxine. |
| PD | Stachelek_2000 | not_relevant | 0 | 0 | The paper describes a molecular mechanism of thyroid hormone action (myosin V binding) in astrocytes and is not a pharmacokinetic/pharmacodynamic study of Levothyroxine in humans or animals with extractable PD parameters. |
| popPK | Stamm_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting psychiatric outcome measures (HDRS) and tolerability, with no quantitative pharmacokinetic parameters or disposition models for levothyroxine. |
| popPK | Stoker_2024 | irrelevant | 0 | 0 | The study evaluates the herbicide oxyfluorfen's effects on thyroid hormones in rats and does not report pharmacokinetic parameters for levothyroxine. |
| PD | Stoker_2024 | not_relevant | 0 | 0 | The paper studies the effects of the herbicide oxyfluorfen on thyroid hormones, not the pharmacodynamics of levothyroxine. |
| PGx | Suchy_2011 | not_relevant | 0 | 0 | The paper discusses ezetimibe pharmacogenomics and notes no significant interaction with levothyroxine, rather than reporting a genetic effect on levothyroxine's PK/PD. |
| popPK | Sun_2008 | irrelevant | 0 | 0 | The study is an in-vitro reporter gene assay investigating the effect of pesticides on thyroid hormone receptor signaling, not a pharmacokinetic study of levothyroxine disposition. |
| PD | Sun_2008 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding/transcription data for pesticides (Carbaryl, naphthols) and reference compounds (T3, T4, BPA), but does not report any pharmacodynamic or exposure-response relationship for Levothyroxine. |
| popPK | Sun_2009 | irrelevant | 0 | 0 | The study is an in-vitro reporter gene assay assessing the anti-thyroid hormone activity of bisphenols, not a pharmacokinetic study of levothyroxine disposition. |
| PD | Sun_2009 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding/activation data for T3, T4, and environmental chemicals, but does not report a pharmacodynamic or exposure-response relationship for Levothyroxine. |
| PGx | Swaminathan_1989 | not_relevant | 0 | 0 | The paper investigates thyroid hormone levels in hyperemesis gravidarum and correlates them with hCG, containing no information on levothyroxine or genetic variants affecting its PK/PD. |
| PGx | Tandon_2020 | not_relevant | 0 | 0 | The paper is a review on the safety and efficacy of Aswagandha (Withania somnifera) and does not report pharmacogenomic effects on the PK or PD of levothyroxine. |
| popPK | Tao_2025 | irrelevant | 0 | 0 | The study investigates the association between environmental phthalate exposure and thyroid hormone levels in pregnant women, not the pharmacokinetics of levothyroxine administration. |
| PD | Tao_2025 | not_relevant | 0 | 0 | The paper investigates the association between environmental phthalate exposure and thyroid hormone levels, not the pharmacodynamics of the drug Levothyroxine. |
| popPK | Tao_2025_2 | irrelevant | 0 | 0 | The study investigates environmental associations with thyroid hormone levels and does not report any pharmacokinetic parameters for levothyroxine. |
| popPK | Tao_2026 | irrelevant | 0 | 0 | The paper is an epidemiological study on maternal thyroid hormones and neonatal outcomes, not a pharmacokinetic study of levothyroxine. |
| popPK | Tonduru_2023 | irrelevant | 1 | 1 | This is a pharmacological and transport study focusing on T4-derived prodrugs of NSAIDs, lacking any pharmacokinetic modeling or disposition parameters (CL, V, t1/2) for levothyroxine itself. |
| PGx | Tong_2007 | not_relevant | 0 | 0 | The study characterizes in vitro glucuronidation of thyroxine (T4) and triiodothyronine (T3) and does not report on levothyroxine pharmacokinetics/pharmacodynamics or the impact of specific gene variants on drug parameters. |
| PGx | Tougou_2004 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and metabolism of etodolac, not levothyroxine, despite mentioning thyroxine only as a UGT1A9 inhibitor. |
| popPK | Töpper_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linezolid in ICU patients, where levothyroxine is only mentioned as a co-administered medication in a small subset of patients and no PK parameters for levothyroxine are reported. |
| PGx | Valea_2018 | not_relevant | 0 | 0 | The paper is a narrative review on selenium and thyroid pathophysiology, discussing potential effects of selenium supplementation on levothyroxine dose, but it does not report a pharmacogenomic effect of a specific gene variant on a PK/PD parameter of levothyroxine. |
| popPK | Van_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for L-triiodothyronine (LT3), not the subject drug levothyroxine (LT4). |
| popPK | Versloot_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of thyroxine (T4) and triiodothyronine (T3), not levothyroxine (L-T4), and is therefore a different drug. |
| popPK | Versloot_1998 | irrelevant | 0 | 0 | The study examines the pharmacokinetics of thyroxine (T4) and triiodothyronine (T3), not levothyroxine (L-T4), as the subject drug, and the provided evidence lacks specific numeric PK parameter values. |
| PD | Virili_2019 | not_relevant | 1 | 0 | The text is a qualitative review of novel levothyroxine formulations and does not report any numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Wakonig_1988 | not_relevant | 0 | 0 | The paper discusses the determination of thyroid hormone protein binding and detection of autoantibodies, focusing on diagnostic methodology for T4/T3 rather than the pharmacokinetics or pharmacodynamics of levothyroxine in relation to specific gene variants. |
| PD | Wallis_1973 | not_relevant | 0 | 0 | The paper focuses on the bioassay of growth hormone in mice and the effects of thyroxine (not levothyroxine) on the GH dose-response curve, not on the pharmacodynamics of levothyroxine itself. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | This is a toxicology study in zebrafish measuring thyroid hormone levels as biomarkers of disruption, not a pharmacokinetic study of levothyroxine administration. |
| PD | Wang_2020 | not_relevant | 0 | 0 | The paper studies the toxicological effects of perfluoropolyether carboxylic acids (PFECAs) on zebrafish, not the pharmacodynamics of Levothyroxine. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper analyzes the relationship between pituitary hormone replacement (including thyroxine) and lipid profiles/BMI in a clinical population, but does not report any pharmacokinetic parameters (CL, V, ka, etc.) for levothyroxine. |
| PD | Wang_2022_2 | not_relevant | 0 | 0 | The paper is a meta-analysis of epidemiological associations between thyroid hormones and cancer risk, not a pharmacodynamic study of Levothyroxine drug effects. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The study focuses on depression diagnosis using niacin skin flushing response and only mentions thyroid hormone levels as a correlated variable, containing no levothyroxine pharmacokinetic parameters. |
| PD | Wiesner_2021 | not_relevant | 2 | 1 | The paper is a systematic review summarizing qualitative effects of food on levothyroxine absorption and efficacy, without reporting specific numeric PD parameters or concentration-effect curves. |
| PGx | Yamanaka_2007 | not_relevant | 1 | 0 | The paper characterizes the metabolism of thyroxine (T4) and mentions potential impacts of polymorphisms, but it does not study levothyroxine (T4) PK/PD changes based on specific genotypes; it is a mechanistic study on T4 glucuronidation pathways. |
| popPK | Yazici_2004 | irrelevant | 0 | 0 | This is a clinical study evaluating cardiac function and thyroid hormone levels in subclinical hypothyroidism, with no pharmacokinetic modeling or quantitative disposition parameters (CL, V, ka, etc.) for levothyroxine. |
| PD | Yazici_2004 | not_relevant | 2 | 1 | The study reports clinical outcomes (echocardiographic parameters) after a fixed dose of Levothyroxine but does not provide drug concentration data or fit a dose-response/PD model to derive numeric PD parameters like Emax or EC50. |
| PGx | Yen_1985 | not_relevant | 0 | 0 | The study investigates the effect of dietary thyroprotein (iodinated casein) and obesity genotype on growth and thyroid hormones in pigs, not the pharmacokinetics or pharmacodynamics of levothyroxine in humans. |
| PGx | Yu_2021 | not_relevant | 0 | 0 | The paper is a protocol for an observational study on atypical antipsychotics, not a report on levothyroxine pharmacogenomics. |
| PGx | Zhang_2018 | not_relevant | 0 | 0 | The paper studies the effect of selenium supplementation on DEHP-induced thyroid toxicity in rats, not the pharmacogenomics of levothyroxine. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper investigates the association between microplastic exposure and thyroid hormone levels, not the pharmacodynamics of Levothyroxine. |
| popPK | de_1978 | irrelevant | 0 | 0 | The study investigates the effect of cold exposure on erythrocyte acetylcholinesterase and thyroid hormone interplay, not the pharmacokinetic parameters of levothyroxine. |
| PD | de_1978 | not_relevant | 1 | 0 | The paper studies the effect of cold exposure and thyroid hormones on acetylcholinesterase in rats, not the pharmacodynamic response to Levothyroxine administration in a clinical or PK/PD context. |
| popPK | van_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of thyroxine (T4) and its metabolites, not the subject drug levothyroxine (which is the synthetic L-isomer, whereas T4 is often used in tracer studies but this paper focuses on the interaction with propranolol on T4/T3 kinetics, and T4 is not explicitly modeled as the PK of levothyroxine in the context of the specific drug being screened for; furthermore, levothyroxine is the L-form, while T4 tracer studies are distinct). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-22 12:13 UTC</sub>
