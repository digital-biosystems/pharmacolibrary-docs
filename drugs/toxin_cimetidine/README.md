<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Cimetidine&quot;}]"></div>

# Cimetidine

- **generic name:** Cimetidine
- **T3DB:** [T3D2810](http://www.t3db.ca/toxins/T3D2810) · **DrugBank:** [DB00501](https://go.drugbank.com/drugs/DB00501) · **PubChem:** [CID 2756](https://pubchem.ncbi.nlm.nih.gov/compound/2756)
- **groups:** approved, investigational

## About

A histamine congener, it competitively inhibits histamine binding to histamine H2 receptors. Cimetidine has a range of pharmacological actions. It inhibits gastric acid secretion, as well as pepsin and gastrins output. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** oral, rapid 60-70%
- **Sources and uses:** For the treatment and the management of acid-reflux disorders (GERD), peptic ulcer disease, heartburn, and acid indigestion.
- **Mechanism of toxicity:** Cimetidine binds to an H<sub>2</sub>-receptor located on the basolateral membrane of the gastric parietal cell, blocking histamine effects. This competitive inhibition results in reduced gastric acid secretion and a reduction in gastric volume and acidity.
- **Carcinogenicity:** IARC group 3, not classifiable as to its carcinogenicity to humans.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2810">T3DB T3D2810</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 51481-61-9 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:3699">ChEBI 3699</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cimetidine | parent | 252.34 | C10H16N6S | PubChem | [2756](https://pubchem.ncbi.nlm.nih.gov/compound/2756) | Burt_2016, Katrukha_1986, Nishiyama_2019, Salem_2022, Schentag_1981, Somogyi_1983 |
| Cimetidine and Metformin | metabolite | 252.34 | — | the paper | — | Burt_2016 |

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="112" viewBox="0 0 560 112" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="90" stroke="#ddd"/><text x="190.0" y="104" font-size="10" text-anchor="middle">10</text><line x1="365.0" y1="18" x2="365.0" y2="90" stroke="#ddd"/><text x="365.0" y="104" font-size="10" text-anchor="middle">100</text><line x1="540.0" y1="18" x2="540.0" y2="90" stroke="#ddd"/><text x="540.0" y="104" font-size="10" text-anchor="middle">1000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Somogyi_1983 · V ·/kg</text><circle cx="337.9" cy="30.0" r="4" fill="#78909c"><title>Somogyi_1983 · V ·/kg: 70 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Nishiyama_2019 · V</text><circle cx="400.7" cy="46.0" r="4" fill="#ef6c00"><title>Nishiyama_2019 · V: 160 L</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Salem_2022 · V</text><circle cx="400.7" cy="62.0" r="4" fill="#ef6c00"><title>Salem_2022 · V: 160 L</title></circle><text x="184" y="82.0" font-size="11" text-anchor="end">Schentag_1981 · V</text><circle cx="400.7" cy="78.0" r="4" fill="#ef6c00"><title>Schentag_1981 · V: 160 L</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Somogyi_1983_reference](drugs/toxin_cimetidine/Cimetidine_Somogyi1983_reference.md) | held back | 1-compartment, oral | 3 | Somogyi A et al., Clinical pharmacokinetics of cimetidine, Clinical pharmacokinetics (1983) | [10.2165/00003088-198308060-00001](https://doi.org/10.2165/00003088-198308060-00001) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q306, Q19 — no SI value to build fr…</sub> | [Nishiyama_2019_reference](drugs/toxin_cimetidine/Cimetidine_Nishiyama2019_reference.md) | held back | 1-compartment, oral | 5 | Nishiyama K et al., Physiologically-Based Pharmacokinetic M…, CPT: pharmacometrics & syst… (2019) | [10.1002/psp4.12398](https://doi.org/10.1002/psp4.12398) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q374 — no SI value to build from</sub> | [Salem_2022_reference](drugs/toxin_cimetidine/Cimetidine_Salem2022_reference.md) | held back | 1-compartment general linear | 6 | Salem F et al., Development and application of a pediat…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12798](https://doi.org/10.1002/psp4.12798) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q23 — no SI value to build from</sub> | [Schentag_1981_reference](drugs/toxin_cimetidine/Cimetidine_Schentag1981_reference.md) | held back | 1-compartment, oral | 3 | Schentag JJ et al., Age, disease, and cimetidine dispositio…, Clinical pharmacology and t… (1981) | [10.1038/clpt.1981.104](https://doi.org/10.1038/clpt.1981.104) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Burt_2016_reference](drugs/toxin_cimetidine/Cimetidine_Burt2016_reference.md) | — | 1-compartment (no model) | 14 | Burt HJ et al., Metformin and cimetidine: Physiological…, European journal of pharmac… (2016) | [10.1016/j.ejps.2016.03.020](https://doi.org/10.1016/j.ejps.2016.03.020) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Katrukha_1986_reference](drugs/toxin_cimetidine/Cimetidine_Katrukha1986_reference.md) | — | 1-compartment (no model) | 6 | Katrukha SP et al., [Cimetidine pharmacokinetics], Farmakologiia i toksikologi… (1986) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Zhang_2022_reference](drugs/toxin_cimetidine/Cimetidine_Zhang2022_reference.md) | — | 1-compartment (no model) | 0 | Zhang T et al., Physiologically based pharmacokinetic m…, Biopharmaceutics & drug dis… (2022) | [10.1002/bdd.2335](https://doi.org/10.1002/bdd.2335) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SLC22A1 (OCT1)** | `Q21` · AUC ratio | transport | [Ailabouni_2024](drugs/toxin_cimetidine/pgx_Ailabouni_2024_SLC22A1_OCT1_Q21.md) | Ailabouni AS et al., Quantitative contributions of hepatic a…, bioRxiv : the preprint serv… (2024) | [10.1101/2024.11.19.624371](https://doi.org/10.1101/2024.11.19.624371) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SLC22A2 (OCT2)** | `Q26` · CLR | transport | [Ailabouni_2024](drugs/toxin_cimetidine/pgx_Ailabouni_2024_SLC22A2_OCT2_Q26.md) | Ailabouni AS et al., Quantitative contributions of hepatic a…, bioRxiv : the preprint serv… (2024) | [10.1101/2024.11.19.624371](https://doi.org/10.1101/2024.11.19.624371) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SLC47A1 (MATE1)** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Ailabouni_2024](drugs/toxin_cimetidine/pgx_Ailabouni_2024_SLC47A1_MATE1_Q100.md) | Ailabouni AS et al., Quantitative contributions of hepatic a…, bioRxiv : the preprint serv… (2024) | [10.1101/2024.11.19.624371](https://doi.org/10.1101/2024.11.19.624371) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SLC47A2 (MATE2K)** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Ailabouni_2024](drugs/toxin_cimetidine/pgx_Ailabouni_2024_SLC47A2_MATE2K_Q100.md) | Ailabouni AS et al., Quantitative contributions of hepatic a…, bioRxiv : the preprint serv… (2024) | [10.1101/2024.11.19.624371](https://doi.org/10.1101/2024.11.19.624371) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cimetidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inducer/substrate, `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inducer/substrate, `SLC22A3` inhibitor/substrate | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor/substrate, `SLC22A5` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inducer/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor, `SLC22A7` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor, `CYP3A5` inhibitor, `FMO3` substrate, `SLC22A1` inhibitor/substrate, `SLC22A7` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `CYP3A5` inhibitor | DrugBank actor |
| excretion | kidney | `ABCB1` inducer/substrate, `SLC22A2` inhibitor/substrate, `SLC22A4` inhibitor, `SLC22A5` inhibitor, `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor/substrate, `SLC47A1` inhibitor/substrate, `SLC47A2` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inducer/substrate, `ABCB11` inhibitor, `SLC47A1` inhibitor/substrate | DrugBank actor |
| — | adrenal gland | `CYP11B1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: FMO1 (substrate), HRH2 (target), SLC22A1 (OCT1) (transport), SLC22A11 (inhibitor), SLC22A2 (OCT2) (transport), SLC47A1 (MATE1) (transport), SLC47A2 (MATE2K) (transport).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 07:26 | 34:13 | 4/3/0 | 0/0/0 | 0/0/4 | 993,029/142,473 | ollama / glm-5.3-flash | 28 | 7/19 | 27/1 | 0 |

## Coverage

- **PubMed hits:** 1544 matched, 205 returned
- **screened:** 10  ·  **relevant:** 10
- **records:** 7  ·  extracted 1  ·  needs review 3  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_12 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Katrukha_1986.pdf` | Katrukha SP et al., [Cimetidine pharmacokinetics], Farmakologiia i toksikologi… (1986) | popPK | 10 |  | [3770173](https://pubmed.ncbi.nlm.nih.gov/3770173) | Human pharmacokinetic parameters (half-lives, Vd, clearances, bioavailability) for cimetidine are reported numerically in the abstract. |
| `Somogyi_1983.pdf` | Somogyi A et al., Clinical pharmacokinetics of cimetidine, Clinical pharmacokinetics (1983) | popPK | 10 | [10.2165/00003088-198308060-00001](https://doi.org/10.2165/00003088-198308060-00001) | [6418428](https://pubmed.ncbi.nlm.nih.gov/6418428) | A review-style clinical pharmacokinetics paper of cimetidine presenting many numeric parameters (CL 500–600 ml/min, t½ ~2 h, Vd ~1 L/kg, bioavailability, ratios) directly in the abstract; values may repeat other studies but the paper is the original synopsis by the author. |
| `Schentag_1981.pdf` | Schentag JJ et al., Age, disease, and cimetidine dispositio…, Clinical pharmacology and t… (1981) | popPK | 9 | [10.1038/clpt.1981.104](https://doi.org/10.1038/clpt.1981.104) | [7226705](https://pubmed.ncbi.nlm.nih.gov/7226705) | Multiple numeric cimetidine kinetic parameters (clearance, tissue:serum ratios, regression) are present in the abstract. |
| `Zhang_2022.pdf` | Zhang T et al., Physiologically based pharmacokinetic m…, Biopharmaceutics & drug dis… (2022) | popPK | 9 | [10.1002/bdd.2335](https://doi.org/10.1002/bdd.2335) | [36265038](https://pubmed.ncbi.nlm.nih.gov/36265038) | PBPK models of cimetidine disposition in nursing women with a numeric predicted milk-to-plasma ratio (3.55) in the abstract; full concentration-time profiles likely reside in figures not provided. |
| `Hansmann_2016.pdf` | Hansmann S et al., Forecasting oral absorption across biop…, The Journal of pharmacy and… (2016) | popPK | 8 | [10.1111/jphp.12618](https://doi.org/10.1111/jphp.12618) | [27781273](https://pubmed.ncbi.nlm.nih.gov/27781273) | PBPK oral absorption/IV models built for cimetidine in humans, but the cimetidine-specific numeric parameters and predicted profiles appear to reside in figures/tables not included in the evidence. |
| `Pade_1997.pdf` | Pade V et al., Estimation of the relative contribution…, Pharmaceutical research (1997) | popPK | 8 | [10.1023/a:1012111008617](https://doi.org/10.1023/a:1012111008617) | [9327450](https://pubmed.ncbi.nlm.nih.gov/9327450) | Cimetidine is a subject drug with permeability coefficients measured in Caco-2, and numeric values are reported in the study (likely in tables). |
| `Willmann_2009.pdf` | Willmann S et al., Whole-body physiologically based pharma…, The Journal of pharmacy and… (2009) | popPK | 8 | [10.1211/jpp/61.07.0008](https://doi.org/10.1211/jpp/61.07.0008) | [19589231](https://pubmed.ncbi.nlm.nih.gov/19589231) | A PBPK population model of cimetidine absorption/disposition is exactly the wanted model type, but the evidence contains no numeric parameter values — they come from the literature and appear only in figures/simulations not provided. |
| `Brox_2016.pdf` | Brox S et al., Toxicokinetics of Polar Chemicals in Ze…, Environmental science & tec… (2016) | popPK | 7 | [10.1021/acs.est.6b04325](https://doi.org/10.1021/acs.est.6b04325) | [27571242](https://pubmed.ncbi.nlm.nih.gov/27571242) | Cimetidine is one of the 17 test compounds studied for toxicokinetics in zebrafish embryos with uptake rate constants and BCFs reported, but only range values appear in the abstract — compound-specific numeric values likely sit in tables/figures not provided. |
| `Kawase_2021.pdf` | Kawase A et al., Increased brain penetration of diphenhy…, Brain research (2021) | popPK | 6 | [10.1016/j.brainres.2021.147581](https://doi.org/10.1016/j.brainres.2021.147581) | [34280372](https://pubmed.ncbi.nlm.nih.gov/34280372) | Cimetidine is one of the subject drugs with brain-to-plasma partition coefficients measured in arthritic vs control rats, but the abstract reports significance only for DPHM/MMT and no numeric values, which likely live in figures/tables not provided. |
| `Severance_2017.pdf` | Severance AC et al., Correlation between Apparent Substrate…, The Journal of pharmacology… (2017) | popPK | 6 | [10.1124/jpet.117.242552](https://doi.org/10.1124/jpet.117.242552) | [28615288](https://pubmed.ncbi.nlm.nih.gov/28615288) | Cimetidine is a study substrate with OCT2 Jmax and Ktapp values reported, but exact numeric values per substrate (e.g., cimetidine's specific Jmax/Ktapp) appear only as ranges in the abstract, with full values likely in a table or figure not provided here. |
| `Yamane_2021.pdf` | Yamane M et al., The Provisional No-Effect Threshold of…, Journal of pharmaceutical s… (2021) | popPK | 6 | [10.1016/j.xphs.2020.05.013](https://doi.org/10.1016/j.xphs.2020.05.013) | [32470348](https://pubmed.ncbi.nlm.nih.gov/32470348) | Cimetidine is a modeled subject drug in a physiologically based biopharmaceutics model, but the extracted evidence contains no numeric parameter values, which likely reside in supplementary material. |
| `Frum_2007.pdf` | Frum Y et al., The influence of drug partition coeffic…, European journal of pharmac… (2007) | popPK | 5 | [10.1016/j.ejps.2006.11.014](https://doi.org/10.1016/j.ejps.2006.11.014) | [17188470](https://pubmed.ncbi.nlm.nih.gov/17188470) | Dermal penetration/flux data for cimetidine were measured in vitro in human skin; numeric follicular contributions given, but drug-specific flux values may be in figures or tables not shown. |

<sub>queue written 2026-11-13 07:12 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abate_1982 | irrelevant | 0 | 0 | no_text gate: only 27 chars of text extracted (&lt; 400) |
| popPK | Ailabouni_2024 | irrelevant | 2 | 4 | Cimetidine appears only as an OCT inhibitor/co-exposure; the kinetic parameters (AUC, CL, Cmax, PBPK model) belong to metformin and biomarkers, not to cimetidine as subject substance. |
| popPK | Ailabouni_2024_2 | irrelevant | 2 | 3 | Cimetidine is used only as an Oct/Mate inhibitor tool; the kinetic parameters (AUC, renal clearance) belong to metformin, not cimetidine's own disposition. |
| popPK | Ailabouni_2025 | irrelevant | 2 | 1 | Cimetidine appears only as the perpetrator/inhibitor in a metformin-focused DDI and PBPK study; the reported PK parameters (metformin exposures, renal clearance) belong to metformin, and cimetidine's own parameters are not shown and likely live in the PBPK model/supplement not provided. |
| popPK | Ailabouni_2025_2 | irrelevant | 2 | 4 | The kinetic parameters (AUC, Cmax, CLr of NMN) belong to the biomarker N1-methylnicotinamide, with cimetidine serving only as an inhibitor/precipitant; the few cimetidine-related numbers are in vitro uptake inhibition percentages, not cimetidine's own toxicokinetics. |
| PGx | Alván_1991 | not_relevant | 1 | 2 | Cimetidine is mentioned only as an inhibitor of debrisoquine hydroxylase; no gene variant effect on cimetidine PK/PD is reported. |
| PGx | Arnold_1997 | not_relevant | 0 | 0 | Cimetidine is only used as a metabolic inhibitor of dextromethorphan; no pharmacogenomic effect on cimetidine's own PK/PD parameters is reported. |
| popPK | Baelum_1991 | irrelevant | 0 | 0 | Cimetidine appears only as a co-administered drug tested for its effect on toluene metabolism, with no kinetic parameters for cimetidine itself and no numeric values present. |
| popPK | Bismuth_1982 | irrelevant | 0 | 0 | Cimetidine appears only as a discussed potential modifier of hepatic metabolism; the kinetic parameters (plasma levels) belong to imipramine, not cimetidine, and no numeric values are present. |
| popPK | Borchard_1990 | irrelevant | 1 | 0 | Cimetidine appears only as a metabolic inhibitor altering beta-blocker levels; no quantitative kinetic parameters for cimetidine itself. |
| popPK | Breen_1982 | irrelevant | 4 | 2 | Cimetidine's parameters belong to other substances (antipyrine, theophylline clearances), so cimetidine acts only as an inhibitor; no kinetic parameters of cimetidine itself. |
| popPK | Brox_2014 | irrelevant | 2 | 2 | Cimetidine is only one of the analytes in an analytical-method validation; the exemplified toxicokinetic time courses are for other compounds, and no numeric kinetic parameters for cimetidine appear in the evidence. |
| popPK | Brox_2016 | relevant | 7 | 4 | Cimetidine is one of the 17 test compounds studied for toxicokinetics in zebrafish embryos with uptake rate constants and BCFs reported, but only range values appear in the abstract — compound-specific numeric values likely sit in tables/figures not provided. |
| popPK | Bukowskyj_1984 | irrelevant | 0 | 0 | Cimetidine appears only as a comparator affecting theophylline clearance; no cimetidine kinetic parameters reported. |
| PGx | Cashman_2000 | not_relevant | 3 | 2 | Suggests cimetidine S-oxygenation as an FMO3 functional probe and that FMO3 polymorphism may affect drug response, but reports no specific variant effect on cimetidine PK/PD parameters. |
| PGx | Ceckova_2018 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (efavirenz/cimetidine inhibiting transporters to alter lamivudine PK), not a gene variant/genotype/phenotype effect on cimetidine PK/PD. |
| popPK | Chellingsworth_1988 | irrelevant | 1 | 1 | Cimetidine is used only as a perpetrator drug altering metoprolol kinetics; no kinetic parameters of cimetidine itself are reported. |
| popPK | Cheymol_1993 | irrelevant | 2 | 0 | Narrative review only; cimetidine mentioned qualitatively (renal clearance increases in obesity) with no numeric kinetic parameters, which appear to live in the cited primary literature. |
| popPK | Chi_2016 | irrelevant | 1 | 5 | Cimetidine appears only as an inhibitor in a modeling study of ethanol metabolism; quantitative parameters belong to ethanol and ADH isozymes, not to cimetidine's own toxicokinetic disposition. |
| popPK | Choules_2025 | irrelevant | 1 | 2 | Cimetidine appears only as a CYP1A2 probe inhibitor to model fezolinetant DDI; the kinetic parameters (Ki 3.5 µM, DDI ratios) belong to fezolinetant, not cimetidine as the subject substance. |
| PGx | Choules_2025 | not_relevant | 3 | 3 | Cimetidine is only used as a CYP1A2 inhibitor in a PBPK DDI prediction for fezolinetant; no gene variant/genotype effect on cimetidine PK/PD is reported. |
| popPK | DSouza_1988 | irrelevant | 0 | 5 | The kinetic parameters (clearance, volume of distribution) belong to cyclosporine; cimetidine is only the interacting/inhibiting treatment, not the subject substance. |
| PGx | Damme_2011 | not_relevant | 8 | 2 | Review mentions genetic MATE variants may alter cimetidine PK but reports no specific variant-PK parameter data. |
| PGx | Dayer_1989 | not_relevant | 2 | 5 | Genotype affects dextromethorphan kinetics; cimetidine appears only as an inhibitor of the enzyme, not as a drug whose PK/PD parameter is changed by genotype. |
| PGx | DeVane_2001 | not_relevant | 0 | 0 | Cimetidine is mentioned only as a DDI on quetiapine PK (no effect); no gene variant/genotype/phenotype effect is reported. |
| popPK | Del_1979 | irrelevant | 0 | 0 | Cimetidine is used as a comparator/intervention in a rat indomethacin study; no kinetic parameters for cimetidine are reported. |
| PGx | Derayea_2019 | not_relevant | 2 | 3 | In vitro spectroscopic drug–CYP2C19 binding study; no gene variant/genotype-driven PK or PD change of cimetidine reported. |
| popPK | Duchin_1988 | irrelevant | 0 | 0 | Kinetic parameters are for captopril; cimetidine appears only as a co-administered interaction drug with no cimetidine kinetics reported. |
| popPK | Echizen_1991 | irrelevant | 1 | 1 | The paper's quantitative parameters all belong to famotidine; cimetidine appears only as a potency comparator with no kinetic values of its own. |
| popPK | Faessel_2010 | irrelevant | 1 | 3 | This is a pharmacokinetic review of varenicline; cimetidine appears only as a co-administered interacting drug, with no kinetic parameters for cimetidine itself reported. |
| PGx | Ferguson_2017 | not_relevant | 2 | 0 | No gene variant/genotype/phenotype was tested (CYP2C19 genotype explicitly not measured); cimetidine is used as a metabolic inhibitor affecting voriconazole levels, not as the drug with a pharmacogenomic PK/PD effect. |
| popPK | Fish_1997 | irrelevant | 0 | 0 | The subject substance is levofloxacin; cimetidine appears only as an interaction perpetrator affecting levofloxacin clearance, with no kinetic parameters of cimetidine itself. |
| popPK | Frum_2007 | relevant | 5 | 4 | Dermal penetration/flux data for cimetidine were measured in vitro in human skin; numeric follicular contributions given, but drug-specific flux values may be in figures or tables not shown. |
| popPK | Giacomini_1988 | irrelevant | 3 | 1 | A methodological overview about renal transport with cimetidine only as an illustrative example; no numeric kinetic values for cimetidine appear in the evidence. |
| PGx | Gill_1995 | not_relevant | 0 | 0 | Cimetidine is only mentioned as a comparator; the paper concerns dapsone metabolism with no genetic effect on cimetidine PK/PD. |
| popPK | Green_1984 | irrelevant | 0 | 0 | Cimetidine is only the interacting drug; the kinetic parameters (clearance, bioavailability) belong to theophylline and methylprednisolone, not cimetidine itself. |
| PGx | Greenblatt_1993 | not_relevant | 0 | 0 | Cimetidine interaction with alprazolam is drug-drug, not gene/genotype-related. |
| PGx | Greene_1997 | not_relevant | 0 | 0 | The paper is about nefazodone, not cimetidine; cimetidine is only mentioned as showing no interaction, with no pharmacogenomic effect on PK/PD parameters. |
| PGx | Guo_2021 | not_relevant | 1 | 2 | Cimetidine is only mentioned as an inhibitor of CYP1A2 activity; no gene variant/genotype effect on cimetidine PK/PD is reported. |
| popPK | Hanke_2020 | relevant | 8 | 4 | A whole-body PBPK model of cimetidine is developed and qualified, and some numeric cimetidine values appear in the text (renal clearance ~400 mL/min, kidney:serum partition coefficient 14.9, GMFEs 1.14/1.17), but most cimetidine model parameters and performance details live in the supplementary material not provided here. |
| PGx | Hanke_2020 | not_relevant | 2 | 4 | The SLC22A2 808G&gt;T genotype effect is modeled on metformin PK, with cimetidine acting only as a perpetrator inhibitor, not as the gene-affected drug. |
| PGx | Hanke_2020_2 | not_relevant | 0 | 0 | The paper is a PBPK/DDI modeling study of verapamil and cimetidine with no gene variant, genotype, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Hansmann_2016 | relevant | 8 | 4 | PBPK oral absorption/IV models built for cimetidine in humans, but the cimetidine-specific numeric parameters and predicted profiles appear to reside in figures/tables not included in the evidence. |
| PGx | Heinig_1998 | not_relevant | 0 | 0 | This paper is about nisoldipine pharmacokinetics; cimetidine appears only as a drug interaction, with no gene variant/genotype/phenotype effects on cimetidine PK or PD parameters. |
| popPK | Hernández-Lozano_2023 | irrelevant | 2 | 3 | Cimetidine appears only as an inhibitor/co-substance affecting [18F]ciprofloxacin kinetics in mice; no kinetic parameters of cimetidine itself are reported. |
| PGx | Hesse_2003 | not_relevant | 0 | 0 | Cimetidine's interaction with hypnosedatives is a drug-drug interaction, not a pharmacogenomic variant effect; no gene/genotype effects reported. |
| popPK | Jaiswal_2025 | irrelevant | 1 | 0 | The PBPK model and all kinetic parameters (CL/F, Vd, fm, AUC/Cmax) belong to dordaviprone; cimetidine appears only as a comparator weak CYP3A4 inhibitor in DDI simulations with no cimetidine kinetic parameters reported. |
| PGx | Jaiswal_2025 | not_relevant | 0 | 0 | Cimetidine appears only as a CYP3A4 DDI perpetrator for dordaviprone; no gene variant/genotype/phenotype effect on any PK/PD parameter is reported. |
| popPK | Jeong_2019 | relevant | 5 | 4 | Cimetidine is mostly the perpetrator in a PBPK model of procainamide/NAPA, but its own kinetics were studied in rats (IV 100 mg/kg group) with parameters such as systemic clearance (20.3 mL/min/kg) and fe (0.45) appearing in the text, though key full parameter tables appear to live in tables/references not fully provided. |
| popPK | Jia_2024 | irrelevant | 1 | 1 | Cimetidine appears only as a perpetrator/inhibitor in a DDI study of roflumilast; no kinetic parameters of cimetidine itself are reported, and perpetrator PBPK parameters are in supplementary tables not included. |
| PGx | Jia_2024 | not_relevant | 0 | 0 | Cimetidine appears only as a CYP inhibitor perpetrator in DDI/PBPK simulations; no gene variant/genotype/phenotype effect on any drug's PK/PD is reported. |
| popPK | Jonkman_1984 | irrelevant | 0 | 0 | Cimetidine appears only as an interacting co-administered drug affecting theophylline kinetics; no kinetic parameters of cimetidine itself are reported. |
| popPK | Kawase_2021 | relevant | 6 | 3 | Cimetidine is one of the subject drugs with brain-to-plasma partition coefficients measured in arthritic vs control rats, but the abstract reports significance only for DPHM/MMT and no numeric values, which likely live in figures/tables not provided. |
| popPK | Klecker_1994 | irrelevant | 1 | 0 | Cimetidine appears only as a co-administered interaction agent; the kinetic parameters (concentrations, biliary excretion) belong to taxol, not cimetidine. |
| popPK | Klotz_1980 | irrelevant | 2 | 1 | Kinetic parameters (half-life, clearance) are for desmethyldiazepam/oxazepam; cimetidine acts only as an interaction pretreatment, and no cimetidine kinetic values are reported. |
| popPK | Knapp_1983 | irrelevant | 2 | 1 | Cimetidine is used as the interacting agent; kinetic parameters (lidocaine clearance/levels) belong to lidocaine, not cimetidine, and no numeric cimetidine kinetic values are provided. |
| popPK | Koishikawa_2025 | irrelevant | 2 | 1 | Cimetidine appears only as a comparator OCT2 inhibitor for uptake-time-dependent IC50 trends; the subject substance is dolutegravir, and no numeric cimetidine parameters appear in the evidence. |
| popPK | Kustra_1999 | irrelevant | 1 | 0 | Cimetidine appears only as a co-administered interactant; all kinetic parameters (AUC, Cmax, t1/2, CL/F) belong to bupropion/hydroxybupropion, not cimetidine itself. |
| PGx | Labbé_1999 | not_relevant | 0 | 0 | Paper concerns mexiletine; cimetidine is only mentioned as not affecting mexiletine disposition, with no gene variant effect on cimetidine PK/PD. |
| PGx | Langtry_1999 | not_relevant | 0 | 0 | Cimetidine is only mentioned as a CYP3A4 inhibitor warranting sildenafil dose reduction, a drug interaction with no gene variant/genotype effect reported. |
| popPK | Lazar_1990 | irrelevant | 0 | 0 | The kinetic parameters reported are for fluconazole; cimetidine appears only as an interaction co-drug. |
| PGx | Lehmann_1998 | not_relevant | 2 | 3 | This is a drug-drug interaction study (cimetidine inhibiting sulfamethoxazole metabolism via CYP3A4), with no pharmacogenomic variant/genotype effect on cimetidine PK/PD reported. |
| PGx | Lehner_2024 | not_relevant | 2 | 3 | Cimetidine is a co-administered inhibitor affecting voriconazole PK, not a gene/variant effect on cimetidine's PK/PD parameters. |
| PGx | Leopold_1986 | not_relevant | 2 | 5 | Paper concerns bisoprolol PK; cimetidine appears only as a metabolism inhibitor, and genetic polymorphism is stated to have no effect, with no pharmacogenomic effect on PK/PD parameters reported. |
| PGx | Levy_1995 | not_relevant | 2 | 2 | Cimetidine only mentioned as possible unspecific inhibitor of CYP2C19 for PHT interactions; no gene variant/genotype effect on PK/PD parameters reported. |
| PGx | Lewis_1992 | not_relevant | 1 | 4 | Cimetidine is only used as a nonspecific P450 inhibitor in vitro; no genotype/phenotype effect on cimetidine PK/PD is reported. |
| popPK | Li_2014 | irrelevant | 0 | 1 | Cimetidine appears only as an OCT2 inhibitor co-administered in a veliparib PK study; all kinetic parameters belong to veliparib, not cimetidine. |
| PGx | Li_2014 | not_relevant | 2 | 5 | Cimetidine appears only as an OCT2 inhibitor co-administration; the pharmacogenomic effects (CYP2D6 phenotype) concern veliparib, not cimetidine PK/PD. |
| PGx | Li_2025 | not_relevant | 0 | 0 | Only DDI with CYP3A inhibitors; no gene variant/genotype effect on venglustat PK reported (cimetidine mentioned only as inhibitor). |
| popPK | Liu_1989 | irrelevant | 0 | 0 | Cimetidine appears only as a pretreatment drug with no kinetic parameter reported for it; the paper's quantitative parameters concern WR-2721 behavioral dose-response. |
| popPK | Mahmood_1999 | irrelevant | 0 | 0 | The paper concerns buspirone; cimetidine appears only as a co-administered interacting drug with no kinetic parameters of its own. |
| PGx | Maideen_2021 | not_relevant | 0 | 0 | Reports cimetidine-DDI effects on β-blocker plasma concentrations, not gene variant effects on cimetidine PK/PD. |
| popPK | Martel_2003 | irrelevant | 0 | 0 | Cimetidine appears only as a listed transporter substrate in a review of EMT with no kinetic parameters reported. |
| PGx | Mayersohn_1995 | not_relevant | 0 | 0 | Paper discusses moclobemide PK and cimetidine as a drug-drug interaction, with no pharmacogenomic/genotype effect on cimetidine PK/PD reported. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | Drug-drug interaction review with no gene variants or pharmacogenomic effects; cimetidine only mentioned as a CYP3A4 inhibitor. |
| popPK | Minematsu_2008 | irrelevant | 1 | 1 | Cimetidine appears only as a co-administered inhibitor of zonampanel's kinetics; no quantitative kinetic parameters for cimetidine itself are reported. |
| PGx | Monsarrat_1997 | not_relevant | 0 | 0 | In vitro metabolism study of taxoids with CYP phenotype correlation, no gene variant/genotype effect on cimetidine PK/PD. |
| popPK | Naveh_1987 | irrelevant | 3 | 2 | Paper reports changes in trace-element tissue concentrations after cimetidine dosing in rats, but no kinetic parameters (half-life, clearance, rate constants) of cimetidine itself appear. |
| PGx | Nishikawa_2007 | not_relevant | 0 | 0 | Cimetidine is used as a CYP3A4 inhibitor affecting tandospirone, not as the drug with a pharmacogenomic effect on its own PK/PD parameters. |
| popPK | Ohtsuki_2004 | irrelevant | 2 | 1 | Cimetidine appears only as one of many radiolabeled substrates in an in vitro oocyte uptake screen; no numeric kinetic parameters for cimetidine are reported (Km/Vmax likely absent or buried elsewhere). |
| popPK | Palmen_1993 | irrelevant | 0 | 0 | Cimetidine appears only as a P450 inhibitor/pretreatment tool; the kinetic parameters (extraction ratio, clearance) belong to DMAc, not cimetidine. |
| popPK | Prandota_1988 | irrelevant | 2 | 1 | Cimetidine appears only in qualitative narrative statements about absorption and metabolism in cystic fibrosis, with no numeric kinetic parameters reported. |
| PGx | Prescott_1983 | not_relevant | 1 | 3 | Cimetidine appears only as a drug interaction (on acetaminophen metabolism), not a gene/genotype effect on cimetidine PK/PD. |
| PGx | Rao_2007 | not_relevant | 0 | 0 | The cimetidine finding is a drug-drug interaction, not a pharmacogenomic genotype/phenotype effect on escitalopram PK. |
| PGx | Riaz_2019 | not_relevant | 0 | 0 | Paper reports cimetidine's CYP inhibition effect on loperamide levels, not a gene variant effect on cimetidine PK/PD. |
| popPK | Ritschel_1983 | irrelevant | 1 | 1 | Cimetidine is only a co-exposed modifier of theophylline disposition; no kinetic parameters of cimetidine itself are reported, only in vitro solubility percentages. |
| popPK | Roberts_1984 | irrelevant | 1 | 1 | Cimetidine appears only as an interaction modifier; the quantitative kinetic parameters (theophylline clearance) belong to a different substance. |
| popPK | Romane_2025 | irrelevant | 2 | 2 | Structural biology paper on the hMATE1 transporter; cimetidine appears only as an inhibitor/ligand, and its IC50 value in Fig. 6d is not given numerically in the evidence. |
| popPK | Ruffalo_1981 | irrelevant | 0 | 0 | Cimetidine appears only as an inhibitor of benzodiazepine metabolism; no kinetic parameters for cimetidine itself are reported and extraction likely relies on external studies not included. |
| popPK | Schaefer_1995 | irrelevant | 0 | 0 | Cimetidine appears only as a drug-interaction co-medication in a review of quinolone development; no kinetic parameters for cimetidine are reported. |
| popPK | Schumacher_1980 | irrelevant | 3 | 1 | This is a review of age-related pharmacokinetic changes; cimetidine values from other studies are referenced but no numeric parameters appear in the evidence. |
| popPK | Severance_2017 | relevant | 6 | 4 | Cimetidine is a study substrate with OCT2 Jmax and Ktapp values reported, but exact numeric values per substrate (e.g., cimetidine's specific Jmax/Ktapp) appear only as ranges in the abstract, with full values likely in a table or figure not provided here. |
| popPK | Shibasaki_1987 | irrelevant | 0 | 0 | The extracted evidence contains no paper content (only a GROBID processing header), so no cimetidine kinetic parameters or species information can be identified. |
| popPK | Shibasaki_1988 | irrelevant | 0 | 0 | The extracted full text contains only GROBID boilerplate metadata with no kinetic parameters or any substance data. |
| popPK | Shibasaki_1989 | irrelevant | 0 | 0 | The extracted evidence contains no text or numeric kinetic data for cimetidine, only the GROBID processing metadata. |
| popPK | Shibasaki_1989_2 | irrelevant | 0 | 0 | The evidence contains only a GROBID processing header with no paper content or numeric data for cimetidine. |
| PGx | Shibata_1983 | not_relevant | 0 | 0 | Paper describes cimetidine crystal polymorphism effects on dissolution and PD, with no gene variant/genotype involved. |
| PGx | Singh_2012 | not_relevant | 0 | 0 | Cimetidine is only used as a CYP inhibitor tool in vitro; no gene variant/genotype effect on cimetidine PK/PD parameters. |
| PGx | Spina_1996 | not_relevant | 0 | 0 | This paper describes drug-drug interactions involving cimetidine; no gene variant, genotype or pharmacogenomic effect on cimetidine PK/PD is reported. |
| PGx | Stevens_1993 | not_relevant | 1 | 1 | Species comparison of cimetidine S-oxygenation, not a genetic/pharmacogenomic effect on cimetidine PK/PD parameters. |
| popPK | Stringer_1992 | irrelevant | 0 | 0 | Cimetidine appears only as the interacting co-administered drug; the pharmacokinetic parameters (elimination rate constant etc.) belong to pirmenol, not cimetidine, and no numeric values are given. |
| popPK | Strum_1983 | irrelevant | 0 | 0 | The paper concerns ranitidine's pharmacokinetics; cimetidine appears only as a comparator drug with no kinetic parameters reported for it. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | This is an environmental adsorption study of microplastics; cimetidine is only one adsorbate and no toxicokinetic parameters in any organism are reported. |
| PGx | Takeda_2006 | not_relevant | 2 | 3 | Reports drug-drug inhibition (ketoconazole/cimetidine) of UGT2B7 morphine glucuronidation in vitro, not a gene variant/genotype effect on cimetidine PK/PD. |
| popPK | Takita_2020 | relevant | 4 | 2 | Cimetidine PK (compartment) models and unbound fraction (0.84 in CKD) are developed, but cimetidine is mainly the inhibitor in a creatinine interaction model, and its parameter values live in Supplementary Material Section S6 / tables not provided. |
| popPK | Tan_2024 | irrelevant | 0 | 0 | A clinical case report with only a dose (30 mg/kg) and no kinetic parameters of any kind. |
| PGx | Tepper_2001 | not_relevant | 0 | 0 | Only mentions a drug-drug interaction of zolmitriptan with cimetidine; no gene variant/genotype effect on any PK/PD parameter of cimetidine is reported. |
| popPK | Terada_2006 | relevant | 4 | 2 | Cimetidine is a transported substrate of rat MATE1, but its kinetic values (e.g., Km) appear only in figures/tables not included; only TEA kinetics are described. |
| PGx | Tsoutsoulopoulos_2020 | not_relevant | 0 | 0 | Cimetidine is only used as a CYP1A2 inhibitor to modify sulfur mustard toxicity; no gene variant/genotype effect on cimetidine PK/PD is reported. |
| popPK | Türk_2022 | irrelevant | 3 | 2 | Cimetidine appears only as a perpetrator drug in DDI models of creatinine/NMN; its Ki values are given but cimetidine's own disposition parameters live in supplementary tables not provided. |
| popPK | Uddin_2022 | irrelevant | 1 | 3 | Cimetidine appears only as a comparator/inhibitor of dofetilide transport in a study of dofetilide PK; kinetic numbers (Km, Vmax, AUC) belong to dofetilide, not cimetidine. Some cimetidine-interaction PBPK values live in supplementary tables not provided. |
| PGx | Uddin_2022 | not_relevant | 1 | 3 | Cimetidine is used only as a MATE1 inhibitor/positive control in a study of dofetilide; the paper does not report gene/genotype effects on cimetidine's own PK or PD parameters. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | Cimetidine appears only as an interaction perpetrator altering theophylline clearance, not as the drug whose PK/PD is changed by a gene variant/genotype. |
| popPK | Urakami_2002 | irrelevant | 4 | 2 | Cimetidine appears only as a tested substrate of the human renal transporter hOCT2-A in vitro, with no numeric kinetic parameter for cimetidine present (TEA Km only). |
| popPK | Wang_2022 | irrelevant | 1 | 4 | All quantitative pharmacokinetic parameters (clearance, doses, concentrations) belong to ciclosporin; cimetidine appears only as a co-administered interaction agent with no kinetic parameter of its own. |
| PGx | Wang_2025 | not_relevant | 2 | 3 | Effects are drug–drug interactions (cimetidine–epirubicin, PPI–palbociclib), not gene variant/genotype effects on cimetidine PK/PD; DPYD/CYP2D6 genotyping mentioned only generically. |
| popPK | Wendl_2022 | irrelevant | 1 | 1 | The subject substance is finerenone (a PBPK model of its disposition); cimetidine appears only as a CYP3A4 perpetrator to yield a predicted finerenone AUCR (1.59)/CmaxR (1.40), so no kinetic parameters of cimetidine itself are reported — the cimetidine PBPK model itself lives in external references not provided. |
| PGx | Wendl_2022 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects; paper only covers PBPK drug-drug interactions of finerenone, with cimetidine merely a perpetrator. |
| popPK | Willmann_2009 | relevant | 8 | 2 | A PBPK population model of cimetidine absorption/disposition is exactly the wanted model type, but the evidence contains no numeric parameter values — they come from the literature and appear only in figures/simulations not provided. |
| popPK | Wood_1983 | irrelevant | 0 | 0 | Cimetidine appears only as an inhibitor altering propranolol's clearance; no kinetic parameters for cimetidine itself are reported. |
| popPK | Wu_1996 | irrelevant | 0 | 0 | Cimetidine is only a pretreatment modulator; the kinetic parameters (clearance, AUC) belong to diazinon, not cimetidine. |
| popPK | Wu_2000 | irrelevant | 0 | 0 | Cimetidine appears only as an inhibitor/substrate in transporter characterization; its own toxicokinetic parameters are not reported. |
| popPK | Xie_2024 | irrelevant | 3 | 2 | Cimetidine appears only as a perpetrator in a drug-interaction study whose quantitative outputs (peak concentrations) are for metformin; any cimetidine PBPK parameter values are not shown in the evidence. |
| PGx | Xie_2026 | not_relevant | 0 | 2 | Cimetidine is studied as a CYP3A modulator drug-drug interaction, not a pharmacogenomic variant effect on cimetidine's PK/PD. |
| PGx | Xu_2019 | not_relevant | 0 | 0 | The paper studies a docetaxel-cimetidine nanoparticle formulation's effect on oral bioavailability; no gene variant, genotype, or pharmacogenomic effect on PK/PD parameters is reported. |
| popPK | Yamamura_2023 | irrelevant | 2 | 3 | Cimetidine is the inhibitor/interacting co-substance, not the subject; kinetic parameters (Kp, CLr, CLt) reported are for mirogabalin, metformin and PAH, with only a target unbound cimetidine concentration of 7.0 μM stated. |
| popPK | Yamane_2021 | relevant | 6 | 3 | Cimetidine is a modeled subject drug in a physiologically based biopharmaceutics model, but the extracted evidence contains no numeric parameter values, which likely reside in supplementary material. |
| popPK | Yang_2021 | irrelevant | 2 | 4 | The paper is a PBPK/DDI model of metformin, with cimetidine only as a perpetrator/inhibitor; a few numeric cimetidine transporter clearance values (e.g., 29.89, 7.63, 17.67, 11.87 µL/min/10⁶ tubules) appear in the text, but most cimetidine parameters (Ki values, PK parameters) live in Table 1 / references and cimetidine is not the subject substance. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | Cimetidine appears only as a co-administered DDI perpetrator in a PBPK model of atorvastatin; no kinetic parameters for cimetidine itself are reported. |
| PGx | von_1995 | not_relevant | 0 | 0 | Review of macrolide drug interactions via CYP3A4 inhibition; no gene variant/genotype effect on cimetidine PK/PD reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcimetidine%5D&body=Drug%3A%20cimetidine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cimetidine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 07:13 UTC</sub>
