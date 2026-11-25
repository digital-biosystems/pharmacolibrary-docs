<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;levomepromazine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levomepromazine_ter2003_reference&quot;,&quot;label&quot;:&quot;ter_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levomepromazine/Levomepromazine_ter2003_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# levomepromazine

- **generic name:** levomepromazine
- **ATC codes:** `N05AA02`
- **DrugBank:** [DB01403](https://go.drugbank.com/drugs/DB01403) · **PubChem:** none
- **groups:** approved

## About

Levomepromazine is a phenothiazine antipsychotic used to treat pain and anxiety disorders. It is given orally in forms such as tablets and liquid solutions. The drug is approved and used in palliative care settings.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q417204](https://www.wikidata.org/wiki/Q417204), [Wikipedia](https://en.wikipedia.org/wiki/Levomepromazine?oldid=1360365557) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| levomepromazine | parent | 328.474 | C19H24N2OS | PubChem | [72287](https://pubchem.ncbi.nlm.nih.gov/compound/72287) | ter_2003 |

## Start here

> **ter_2003_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> patients. [Run it in the simulator](drugs/drug_levomepromazine/Levomepromazine_ter2003_reference.md?tab=Simulation) · [record](drugs/drug_levomepromazine/Levomepromazine_ter2003_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [ter_2003_reference](drugs/drug_levomepromazine/Levomepromazine_ter2003_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | ter Horst PG et al., Simultaneous determination of levomepro…, Journal of chromatography.… (2003) | [10.1016/s1570-0232(03)00253-8](https://doi.org/10.1016/s1570-0232(03)00253-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">fish</span> | [Pihlaja_2024_BFCOD](drugs/drug_levomepromazine/pd_Pihlaja_2024_BFCOD.md) | CYP3A-like activity (benzyloxy-4-trifluoromethylcoumarin-O-debenzyloxylation, BFCOD) ← levomepromazine · inhibition effect | — | Pihlaja TLM et al., Comparative in vitro hepatic clearances…, Aquatic toxicology (Amsterd… (2024) | [10.1016/j.aquatox.2024.107048](https://doi.org/10.1016/j.aquatox.2024.107048) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">fish</span> | [Pihlaja_2024_EROD](drugs/drug_levomepromazine/pd_Pihlaja_2024_EROD.md) | CYP1A-like activity (7-ethoxyresorufin-O-deethylation, EROD) ← levomepromazine · inhibition effect | — | Pihlaja TLM et al., Comparative in vitro hepatic clearances…, Aquatic toxicology (Amsterd… (2024) | [10.1016/j.aquatox.2024.107048](https://doi.org/10.1016/j.aquatox.2024.107048) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Järvinen_2024_Cytotoxicity_toward_3D_spheroid_cultures_of_rainbow_trout_hepatocytes_RTH_149_RTHEP](drugs/drug_levomepromazine/pd_J_rvinen_2024_Cytotoxicity_toward_3D_spheroid_cultures_of_ra.md) | Cytotoxicity toward 3D spheroid cultures of rainbow trout hepatocytes (RTH-149 / RTHEP) ← levomepromazine · direct sigmoid Emax (Hill) effect | — | Järvinen P et al., Cytotoxicity of pharmaceuticals and the…, European journal of pharmac… (2024) | [10.1016/j.ejps.2024.106817](https://doi.org/10.1016/j.ejps.2024.106817) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Butwicka_2014](drugs/drug_levomepromazine/pgx_Butwicka_2014_CYP2D6_Q27.md) | Butwicka A et al., Neuroleptic malignant syndrome in an ad…, European journal of pediatr… (2014) | [10.1007/s00431-013-2208-z](https://doi.org/10.1007/s00431-013-2208-z) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 23:35 | 0:42 | 1/0/0 | 2/1/0 | 0/0/1 | 13,006/5,234 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 57 matched, 57 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_15 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `ter_2003.pdf` | ter Horst PG et al., Simultaneous determination of levomepro…, Journal of chromatography.… (2003) | popPK | 9 | [10.1016/s1570-0232(03)00253-8](https://doi.org/10.1016/s1570-0232(03)00253-8) | [12798199](https://pubmed.ncbi.nlm.nih.gov/12798199) | The abstract explicitly reports quantitative population PK parameters (Vd and CL) for levomepromazine in human plasma. |
| `El_2004.pdf` | El Ela AA et al., Identification of P-glycoprotein substr…, The Journal of pharmacy and… (2004) | pd | 5 | [10.1211/0022357043969](https://doi.org/10.1211/0022357043969) | [15285840](https://www.ncbi.nlm.nih.gov/pubmed/15285840) | metadata signals extractable PD data (IC50) |
| `Pihlaja_2024.pdf` | Pihlaja TLM et al., Comparative in vitro hepatic clearances…, Aquatic toxicology (Amsterd… (2024) | pd | 5 | [10.1016/j.aquatox.2024.107048](https://doi.org/10.1016/j.aquatox.2024.107048) | [39146846](https://www.ncbi.nlm.nih.gov/pubmed/39146846) | metadata signals extractable PD data (IC50) |
| `Koski_2003.pdf` | Koski A et al., Interaction of alcohol and drugs in fat…, Human & experimental toxico… (2003) | pd | 4 | [10.1191/0960327103ht324oa](https://doi.org/10.1191/0960327103ht324oa) | [12774892](https://www.ncbi.nlm.nih.gov/pubmed/12774892) | metadata signals extractable PD data (concentration-effect) |
| `Gram_1993.pdf` | Gram LF et al., Citalopram: interaction studies with le…, Therapeutic drug monitoring (1993) | pgx | 8 |  | [8451775](https://www.ncbi.nlm.nih.gov/pubmed/8451775) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Park_2026.pdf` | Park Y et al., Association between CYP2D6 and CYP2C19…, The lancet. Psychiatry (2026) | pgx | 8 | [10.1016/S2215-0366(26)00238-5](https://doi.org/10.1016/S2215-0366(26)00238-5) | [42716055](https://www.ncbi.nlm.nih.gov/pubmed/42716055) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Syvälahti_1997.pdf` | Syvälahti EK et al., Citalopram causes no significant altera…, The Journal of internationa… (1997) | pgx | 8 | [10.1177/030006059702500104](https://doi.org/10.1177/030006059702500104) | [9027670](https://www.ncbi.nlm.nih.gov/pubmed/9027670) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Vandel_1995.pdf` | Vandel S et al., Fluvoxamine and fluoxetine: interaction…, Pharmacological research (1995) | pgx | 8 | [10.1016/1043-6618(95)80088-3](https://doi.org/10.1016/1043-6618(95)80088-3) | [8685072](https://www.ncbi.nlm.nih.gov/pubmed/8685072) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Basińska-Ziobroń_2015.pdf` | Basińska-Ziobroń A et al., Inhibition of human cytochrome P450 iso…, Pharmacological reports : PR (2015) | pgx | 7 | [10.1016/j.pharep.2015.04.005](https://doi.org/10.1016/j.pharep.2015.04.005) | [26481538](https://www.ncbi.nlm.nih.gov/pubmed/26481538) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Daniel_2005.pdf` | Daniel WA et al., Inhibition of rat liver CYP2D in vitro…, European neuropsychopharmac… (2005) | pgx | 7 | [10.1016/j.euroneuro.2004.05.008](https://doi.org/10.1016/j.euroneuro.2004.05.008) | [15572279](https://www.ncbi.nlm.nih.gov/pubmed/15572279) | metadata signals extractable PGX data (CYP2D, PK/PD-context) |
| `Davies_2010.pdf` | Davies SJ et al., Characterisation of zuclopenthixol meta…, Acta psychiatrica Scandinav… (2010) | pgx | 7 | [10.1111/j.1600-0447.2010.01619.x](https://doi.org/10.1111/j.1600-0447.2010.01619.x) | [20946203](https://www.ncbi.nlm.nih.gov/pubmed/20946203) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kornhuber_2006.pdf` | Kornhuber J et al., Region specific distribution of levomep…, Journal of neural transmiss… (2006) | pgx | 7 | [10.1007/s00702-005-0331-3](https://doi.org/10.1007/s00702-005-0331-3) | [15997416](https://www.ncbi.nlm.nih.gov/pubmed/15997416) | metadata signals extractable PGX data (Cyp2D6, PK/PD-context) |
| `LLerena_2003.pdf` | LLerena A et al., Determination of risperidone and 9-hydr…, Journal of chromatography.… (2003) | pgx | 7 | [10.1016/s1570-0232(02)00661-x](https://doi.org/10.1016/s1570-0232(02)00661-x) | [12450541](https://www.ncbi.nlm.nih.gov/pubmed/12450541) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Ieiri_2003.pdf` | Ieiri I et al., A CYP2D6 phenotype-genotype mismatch in…, Pharmacopsychiatry (2003) | pgx | 5 | [10.1055/s-2003-43049](https://doi.org/10.1055/s-2003-43049) | [14571354](https://www.ncbi.nlm.nih.gov/pubmed/14571354) | metadata signals extractable PGX data (CYP2D6) |
| `Vevelstad_2009.pdf` | Vevelstad M et al., O-demethylation of codeine to morphine…, European journal of clinica… (2009) | pgx | 5 | [10.1007/s00228-009-0640-9](https://doi.org/10.1007/s00228-009-0640-9) | [19308365](https://www.ncbi.nlm.nih.gov/pubmed/19308365) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-11-23 23:34 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bagli_1995 | not_relevant | 5 | 10 | The study investigated CYP2D6 phenotypes but found no significant correlation with levomepromazine pharmacokinetic parameters. |
| popPK | Balant-Gorgia_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clomipramine, and levomepromazine is only mentioned as a co-administered neuroleptic in a clinical trial context, not as the subject drug for PK parameter estimation. |
| PGx | Balant-Gorgia_1986 | not_relevant | 1 | 1 | The study focuses on clomipramine pharmacokinetics, and while levomepromazine is mentioned as a potential confounder for neuroleptics, no specific pharmacogenomic effect on levomepromazine parameters is reported. |
| popPK | Basińska-Ziobroń_2015 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of CYP inhibition, not a pharmacokinetic study reporting disposition parameters like CL, V, or t1/2 for levomepromazine. |
| PGx | Basińska-Ziobroń_2015 | not_relevant | 0 | 0 | The study investigates in vitro CYP inhibition by levomepromazine and does not examine the effect of genetic variants on the drug's PK or PD. |
| PGx | Belančić_2024 | not_relevant | 2 | 1 | Levomepromazine is only listed among the patient's medications; no gene variant effect on its PK/PD parameters is reported or quantified. |
| popPK | Brøsen_1991 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of imipramine metabolism where levomepromazine is only used as a CYP2D6 inhibitor, providing no pharmacokinetic parameters for levomepromazine. |
| PGx | Brøsen_1991 | not_relevant | 0 | 0 | The study focuses on the metabolism of imipramine; levomepromazine is only mentioned as an inhibitor of imipramine metabolism, so no PK/PD pharmacogenomic effect for levomepromazine is reported. |
| PGx | Butwicka_2014 | not_relevant | 6 | 3 | Case report suggests CYP2D6*4/*4 may have increased levomepromazine toxicity/NMS risk, but no plasma concentrations or PK/PD parameters were measured. |
| PGx | Danek_2021 | not_relevant | 0 | 0 | Study reports CYP3A4 induction by levomepromazine in vitro; no gene variant/genotype/phenotype effect on levomepromazine PK/PD parameters. |
| popPK | Daniel_2001 | irrelevant | 0 | 0 | This is an in-vitro study measuring the inhibition of caffeine metabolism by levomepromazine, not a pharmacokinetic study of levomepromazine itself. |
| PGx | Daniel_2001 | not_relevant | 0 | 0 | The study reports on the direct inhibitory effect of levomepromazine on CYP enzymes (caffeine metabolism) and does not analyze the effect of a genetic variant on levomepromazine's PK/PD. |
| popPK | Daniel_2005 | irrelevant | 0 | 0 | This is an in-vitro/in-vivo enzyme inhibition study measuring CYP2D activity (metabolism rate), not a pharmacokinetic study reporting disposition parameters (CL, V, ka, etc.) for levomepromazine. |
| PGx | Daniel_2005 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (inhibition of CYP2D by neuroleptics) in rats, not the influence of a human gene variant/genotype on levomepromazine's PK or PD. |
| popPK | Davies_2010 | irrelevant | 0 | 0 | The study focuses on zuclopenthixol pharmacokinetics and metabolism, with levomepromazine only serving as a co-administered interacting agent. |
| PGx | Davies_2010 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions affecting the metabolism of zuclopenthixol, not pharmacogenomic effects on levomepromazine PK/PD. |
| popPK | El_2004 | irrelevant | 2 | 0 | The study is an in-vitro mechanistic investigation of P-glycoprotein transport properties (affinity/IC50) using Caco-2 cells, not a quantitative pharmacokinetic parameter study for levomepromazine. |
| PGx | El_2004 | not_relevant | 0 | 0 | The study characterizes the interaction of levomepromazine with P-glycoprotein in vitro, but it does not report a pharmacogenomic effect (gene variant/genotype) on its pharmacokinetics or pharmacodynamics. |
| PGx | Gervasini_2013 | not_relevant | 2 | 5 | Reports levomepromazine's in vitro CYP2D6/CYP3A inhibition (IC50 25.5 and 30 μM), a drug-drug interaction, not a gene variant/genotype effect on levomepromazine PK/PD. |
| popPK | Gram_1993 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of citalopram and its metabolites, with levomepromazine acting only as a co-administered drug to test for interactions. |
| PGx | Gram_1993 | not_relevant | 0 | 0 | The paper studies pharmacokinetic drug interactions (CYP2D6 inhibition) in subjects with a single, selected genotype (extensive metabolizers), and does not report a comparison of different genotypes or a pharmacogenomic effect on levomepromazine. |
| popPK | Haenisch_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter inhibition and does not report pharmacokinetic disposition parameters. |
| PGx | Haenisch_2010 | not_relevant | 0 | 0 | The study investigates the direct molecular interaction between drugs and a transporter (hPMAT) and does not report pharmacokinetic or pharmacodynamic changes based on genetic variants. |
| popPK | Hefner_2021 | irrelevant | 0 | 0 | The study analyzes pharmacodynamic drug-drug interactions (QT prolongation) and prescribing patterns, containing no pharmacokinetic parameter estimation for levomepromazine. |
| PGx | Hefner_2021 | not_relevant | 0 | 0 | The study analyzes pharmacodynamic drug-drug interactions involving levomepromazine but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Ieiri_2003 | irrelevant | 0 | 0 | The study is a CYP2D6 pharmacogenetic investigation using dextromethorphan as the probe, with levomepromazine measured only as a co-medicated substance without reporting any pharmacokinetic parameters (CL, V, t1/2). |
| popPK | Jerling_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amitriptyline and nortriptyline, with levomepromazine acting only as a interacting concomitant drug. |
| PGx | Jerling_1994 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (phenothiazines affecting tricyclics) rather than pharmacogenomic effects (gene variants affecting levomepromazine). |
| popPK | Järvinen_2024 | irrelevant | 0 | 0 | In-vitro fish hepatocyte cytotoxicity study; levomepromazine only tested for EC50 toxicity, no PK disposition parameters. |
| popPK | Kornhuber_2006 | irrelevant | 0 | 0 | no_text gate: only 66 chars of text extracted (&lt; 400) |
| PGx | Kornhuber_2006 | not_relevant | 0 | 0 | The paper describes the regional distribution of levomepromazine in the human brain but does not report any association with gene variants or genotypes. |
| popPK | Kornhuber_2006_2 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of amantadine, using levomepromazine only as a comparator without reporting its quantitative parameters. |
| PGx | Kornhuber_2006_2 | not_relevant | 0 | 0 | The paper studies amantadine, not levomepromazine, and reports population PK without any pharmacogenomic (gene variant) analysis. |
| popPK | Koski_2003 | irrelevant | 0 | 0 | The paper is an epidemiological analysis of fatal poisonings and reports postmortem blood concentrations in deceased victims, not quantitative pharmacokinetic disposition parameters (CL, V, t1/2) or PK models. |
| PGx | Koski_2003 | not_relevant | 0 | 0 | The paper analyzes fatal poisoning rates and alcohol concentration correlations, reporting no pharmacogenomic variants or effects on PK/PD parameters. |
| popPK | LLerena_2003 | irrelevant | 0 | 0 | The study is a case report on risperidone pharmacokinetics where levomepromazine is merely a co-administered drug in the patient's history, with no PK parameters reported for levomepromazine. |
| PGx | LLerena_2003 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of risperidone and a CYP2D6 interaction, not a pharmacogenomic effect on levomepromazine. |
| popPK | Mannheimer_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of risperidone, and levomepromazine is only mentioned as a concurrent CYP2D6 inhibitor in the patient population, not as the subject drug. |
| PGx | Mannheimer_2008 | not_relevant | 0 | 0 | The paper reports on the impact of CYP2D6 inhibitors (including levomepromazine as an inhibitor) on risperidone levels, not the pharmacokinetics or pharmacodynamics of levomepromazine itself. |
| popPK | Ohsuka_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor binding and signal transduction, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Ohsuka_1995 | not_relevant | 0 | 0 | The paper measures drug potency on serotonin receptors in human platelets and does not investigate the effect of gene variants on levomepromazine PK/PD parameters. |
| PGx | Park_2026 | not_relevant | 0 | 0 | Levomepromazine is only mentioned as an exclusion criterion (CYP2D6 inhibitor); the paper reports pharmacogenomic effects on venlafaxine, not levomepromazine PK/PD. |
| popPK | Syvälahti_1997 | irrelevant | 2 | 0 | The study is a drug interaction trial measuring steady-state plasma concentrations of levomepromazine as a co-administered neuroleptic, not a primary pharmacokinetic disposition study for levomepromazine. |
| PGx | Syvälahti_1997 | not_relevant | 0 | 0 | The paper studies drug-drug interactions (citalopram vs. neuroleptics) and reports no significant changes in levomepromazine levels; while CYP2D6 genotype is mentioned, no specific pharmacogenomic effect on levomepromazine PK is reported. |
| popPK | Takei_2024 | irrelevant | 0 | 0 | This is a forensic autopsy case report providing single time-point toxicological concentrations, not a pharmacokinetic study with disposition parameters (CL, V, t1/2, ka). |
| PGx | Takei_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction case report (CYP2D6 inhibition) without analyzing any genetic variants or pharmacogenomic effects on levomepromazine. |
| popPK | Vandel_1995 | irrelevant | 1 | 0 | Levomepromazine is used only as a co-administered probe agent to assess CYP450 interactions with SSRIs; no quantitative pharmacokinetic parameters (CL, V, etc.) for levomepromazine are reported. |
| PGx | Vandel_1995 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (SSRIs on levomepromazine metabolism) and phenotyping markers (dextromethorphan/mephenytoin), rather than the effect of a specific gene variant on levomepromazine's pharmacokinetics. |
| popPK | Vevelstad_2009 | irrelevant | 1 | 0 | The study investigates the pharmacokinetic inhibition of codeine metabolism (demethylation to morphine) by levomepromazine, rather than determining the disposition parameters of levomepromazine itself. |
| popPK | Wójcikowski_2014 | irrelevant | 1 | 0 | This is an in-vitro mechanistic study of CYP isoenzyme involvement in metabolism, not a pharmacokinetic study reporting quantitative disposition parameters like CL or V. |
| PGx | Wójcikowski_2014 | not_relevant | 1 | 1 | The study identifies CYP3A4 as the primary enzyme for metabolism but does not report the effect of specific genetic variants or phenotypes on pharmacokinetic parameters. |
| popPK | Yoshimura_2000 | irrelevant | 0 | 0 | The study assesses drug-drug interaction effects on fluvoxamine plasma concentrations, not the pharmacokinetic parameters of levomepromazine. |
| PGx | Yoshimura_2000 | not_relevant | 0 | 0 | The paper studies the effect of levomepromazine on fluvoxamine pharmacokinetics (drug-drug interaction), not a pharmacogenomic effect (gene variant) on levomepromazine. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for haloperidol, and levomepromazine is only mentioned as a CYP2D6 substrate co-administered with haloperidol, not as the subject of PK characterization. |
| PGx | Yukawa_2002 | not_relevant | 0 | 0 | The study reports population pharmacokinetics of haloperidol and mentions levomepromazine only as a concomitant CYP2D6 substrate, with no report of gene variants affecting PK/PD parameters. |
| PGx | ter_2003 | not_relevant | 0 | 0 | The paper describes the development and validation of an HPLC method for levomepromazine and does not report any pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevomepromazine%5D&body=Drug%3A%20levomepromazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levomepromazine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 23:34 UTC</sub>
