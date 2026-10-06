<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;levomepromazine&quot;}]"></div>

# levomepromazine

- **generic name:** levomepromazine
- **ATC codes:** `N05AA02`
- **DrugBank:** [DB01403](https://go.drugbank.com/drugs/DB01403) · **PubChem:** not captured
- **groups:** approved

## About

Levomepromazine is a phenothiazine antipsychotic used for conditions such as pain and anxiety disorder. It is an approved medicine, though it is not listed as authorised by the European Medicines Agency, so its availability appears limited to certain countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417204](https://www.wikidata.org/wiki/Q417204) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:55 | 6:17 | 0/0/0 | 1/2/0 | 0/0/1 | 59,580/4,377 | ollama / glm-5.3-flash | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">fish</span> | [Pihlaja_2024_BFCOD](drugs/drug_levomepromazine/pd_Pihlaja_2024_BFCOD.md) | CYP3A-like activity (benzyloxy-4-trifluoromethylcoumarin-O-debenzyloxylation, BFCOD) ← levomepromazine · inhibition effect | — | Pihlaja TLM et al., Comparative in vitro hepatic clearances…, Aquatic toxicology (Amsterd… (2024) | [10.1016/j.aquatox.2024.107048](https://doi.org/10.1016/j.aquatox.2024.107048) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">fish</span> | [Pihlaja_2024_EROD](drugs/drug_levomepromazine/pd_Pihlaja_2024_EROD.md) | CYP1A-like activity (7-ethoxyresorufin-O-deethylation, EROD) ← levomepromazine · inhibition effect | — | Pihlaja TLM et al., Comparative in vitro hepatic clearances…, Aquatic toxicology (Amsterd… (2024) | [10.1016/j.aquatox.2024.107048](https://doi.org/10.1016/j.aquatox.2024.107048) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Järvinen_2024_Cytotoxicity_toward_3D_spheroid_cultures_of_rainbow_trout_hepatocytes_RTH_149_RTHEP](drugs/drug_levomepromazine/pd_J_rvinen_2024_Cytotoxicity_toward_3D_spheroid_cultures_of_ra.md) | Cytotoxicity toward 3D spheroid cultures of rainbow trout hepatocytes (RTH-149 / RTHEP) ← levomepromazine · direct sigmoid Emax (Hill) effect | — | Järvinen P et al., Cytotoxicity of pharmaceuticals and the…, European journal of pharmac… (2024) | [10.1016/j.ejps.2024.106817](https://doi.org/10.1016/j.ejps.2024.106817) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ohsuka_1995_3H_ketanserin_binding](drugs/drug_levomepromazine/pd_Ohsuka_1995_3H_ketanserin_binding.md) | 3H-ketanserin binding ← levomepromazine · inhibition effect | — | Ohsuka N et al., Effects of Antidepressants and antipsyc…, Psychopharmacology (1995) | [10.1007/BF02246490](https://doi.org/10.1007/BF02246490) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ohsuka_1995_3H_paroxetine_binding](drugs/drug_levomepromazine/pd_Ohsuka_1995_3H_paroxetine_binding.md) | 3H-paroxetine binding ← levomepromazine · inhibition effect | — | Ohsuka N et al., Effects of Antidepressants and antipsyc…, Psychopharmacology (1995) | [10.1007/BF02246490](https://doi.org/10.1007/BF02246490) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ohsuka_1995_5HT_induced_intracellular_Ca2_increase](drugs/drug_levomepromazine/pd_Ohsuka_1995_5HT_induced_intracellular_Ca2_increase.md) | 5HT-induced intracellular Ca2+ increase ← levomepromazine · inhibition effect | — | Ohsuka N et al., Effects of Antidepressants and antipsyc…, Psychopharmacology (1995) | [10.1007/BF02246490](https://doi.org/10.1007/BF02246490) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ohsuka_1995_5HT_induced_shape_change](drugs/drug_levomepromazine/pd_Ohsuka_1995_5HT_induced_shape_change.md) | 5HT-induced shape change ← levomepromazine · inhibition effect | — | Ohsuka N et al., Effects of Antidepressants and antipsyc…, Psychopharmacology (1995) | [10.1007/BF02246490](https://doi.org/10.1007/BF02246490) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Butwicka_2014](drugs/drug_levomepromazine/pgx_Butwicka_2014_CYP2D6_Q27.md) | Butwicka A et al., Neuroleptic malignant syndrome in an ad…, European journal of pediatr… (2014) | [10.1007/s00431-013-2208-z](https://doi.org/10.1007/s00431-013-2208-z) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=levomepromazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor/metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/metabolism/substrate, `CYP2E1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), DRD5 (target), HRH1 (target), HTR2A (target), HTR2C (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 57 matched, 57 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `ter_2003.pdf` | ter Horst PG et al., Simultaneous determination of levomepro…, Journal of chromatography.… (2003) | popPK | 8 | [10.1016/s1570-0232(03)00253-8](https://doi.org/10.1016/s1570-0232(03)00253-8) | [12798199](https://pubmed.ncbi.nlm.nih.gov/12798199) | Reports numeric PK parameters for levomepromazine (V 4.1±2.4 l/kg, clearance 309±225 l/h/70 kg) from a one-compartment model in human plasma. |
| `El_2004.pdf` | El Ela AA et al., Identification of P-glycoprotein substr…, The Journal of pharmacy and… (2004) | pd | 5 | [10.1211/0022357043969](https://doi.org/10.1211/0022357043969) | [15285840](https://www.ncbi.nlm.nih.gov/pubmed/15285840) | metadata signals extractable PD data (IC50) |
| `Pihlaja_2024.pdf` | Pihlaja TLM et al., Comparative in vitro hepatic clearances…, Aquatic toxicology (Amsterd… (2024) | pd | 5 | [10.1016/j.aquatox.2024.107048](https://doi.org/10.1016/j.aquatox.2024.107048) | [39146846](https://www.ncbi.nlm.nih.gov/pubmed/39146846) | metadata signals extractable PD data (IC50) |
| `Koski_2003.pdf` | Koski A et al., Interaction of alcohol and drugs in fat…, Human & experimental toxico… (2003) | pd | 4 | [10.1191/0960327103ht324oa](https://doi.org/10.1191/0960327103ht324oa) | [12774892](https://www.ncbi.nlm.nih.gov/pubmed/12774892) | metadata signals extractable PD data (concentration-effect) |
| `Bagli_1995.pdf` | Bagli M et al., Bioequivalence and absolute bioavailabi…, International journal of cl… (1995) | pgx | 8 | not captured | [8963481](https://www.ncbi.nlm.nih.gov/pubmed/8963481) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Gram_1993.pdf` | Gram LF et al., Citalopram: interaction studies with le…, Therapeutic drug monitoring (1993) | pgx | 8 | not captured | [8451775](https://www.ncbi.nlm.nih.gov/pubmed/8451775) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
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

<sub>queue written 2026-10-06T15:54:15.724539+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Balant-Gorgia_1986 | not_relevant | 2 | 3 | The pharmacogenomic effect (debrisoquine oxidation phenotype) concerns clomipramine pharmacokinetics, not levomepromazine, which is only mentioned as a co-administered neuroleptic. |
| PGx | Basińska-Ziobroń_2015 | not_relevant | 0 | 0 | In vitro enzyme inhibition by levomepromazine (drug as inhibitor), not a gene variant/genotype effect on its PK/PD. |
| PGx | Belančić_2024 | not_relevant | 2 | 1 | Levomepromazine is only listed among the patient's medications; no gene variant effect on its PK/PD parameters is reported or quantified. |
| PGx | Brøsen_1991 | not_relevant | 0 | 0 | Levomepromazine appears only as a competitive inhibitor of imipramine 2-hydroxylation; the paper does not report a pharmacogenomic effect of any variant on levomepromazine's own PK/PD parameters. |
| PGx | Butwicka_2014 | not_relevant | 6 | 3 | Case report suggests CYP2D6*4/*4 may have increased levomepromazine toxicity/NMS risk, but no plasma concentrations or PK/PD parameters were measured. |
| PGx | Danek_2021 | not_relevant | 0 | 0 | Study reports CYP3A4 induction by levomepromazine in vitro; no gene variant/genotype/phenotype effect on levomepromazine PK/PD parameters. |
| PGx | Daniel_2001 | not_relevant | 0 | 5 | In vitro rat microsome CYP inhibition by levomepromazine; no gene variant/genotype/phenotype effect on PK/PD parameters. |
| PGx | Daniel_2005 | not_relevant | 0 | 0 | Rat in vitro/in vivo drug-drug inhibition of CYP2D; no gene variant/genotype effect on levomepromazine PK/PD. |
| PGx | Davies_2010 | not_relevant | 0 | 0 | Paper concerns zuclopenthixol drug-drug interactions; levomepromazine is only a co-medication, no gene variant effect on levomepromazine PK/PD reported. |
| PGx | Gervasini_2013 | not_relevant | 2 | 5 | Reports levomepromazine's in vitro CYP2D6/CYP3A inhibition (IC50 25.5 and 30 μM), a drug-drug interaction, not a gene variant/genotype effect on levomepromazine PK/PD. |
| PGx | Gram_1993 | not_relevant | 0 | 0 | Drug-drug interaction study in all extensive metabolizers; no gene variant/genotype effect on levomepromazine PK/PD reported. |
| PGx | Ieiri_2003 | not_relevant | 6 | 3 | Reports mean levomepromazine serum concentrations but no genotype/phenotype-stratified PK comparison or effect size for levomepromazine. |
| PGx | Jerling_1994 | not_relevant | 0 | 0 | Reports drug–drug interactions (levomepromazine inhibiting nortriptyline metabolism), not a pharmacogenomic effect of a gene variant on levomepromazine PK/PD. |
| popPK | Järvinen_2024 | irrelevant | 0 | 0 | In-vitro fish hepatocyte cytotoxicity study; levomepromazine only tested for EC50 toxicity, no PK disposition parameters. |
| popPK | Kornhuber_2006 | irrelevant | 0 | 0 | no_text gate: only 66 chars of text extracted (&lt; 400) |
| PGx | Kornhuber_2006 | not_relevant | 0 | 0 | Study of brain regional distribution of levomepromazine; no gene variant/genotype effect on PK/PD parameters reported. |
| popPK | Kornhuber_2006_2 | irrelevant | 1 | 0 | The study models amantadine brain PK; levomepromazine is only mentioned as a previously investigated comparator with no numeric parameters given. |
| PGx | LLerena_2003 | not_relevant | 0 | 0 | Paper concerns risperidone PK and CYP2D6 interaction; levomepromazine is only a co-medication with no gene-variant effect on its PK/PD reported. |
| PGx | Mannheimer_2008 | not_relevant | 0 | 0 | Levomepromazine is only mentioned as a CYP2D6 inhibitor affecting risperidone levels; no pharmacogenomic effect on levomepromazine's own PK/PD parameters is reported. |
| PGx | Park_2026 | not_relevant | 0 | 0 | Levomepromazine is only mentioned as an exclusion criterion (CYP2D6 inhibitor); the paper reports pharmacogenomic effects on venlafaxine, not levomepromazine PK/PD. |
| PGx | Syvälahti_1997 | not_relevant | 3 | 2 | CYP2D6 genotyping found no poor metabolizers and no genotype-stratified PK effect on levomepromazine levels is reported. |
| PGx | Takei_2024 | not_relevant | 2 | 3 | No gene variant/genotype or pharmacogenomic effect on levomepromazine PK/PD is reported; only a drug-drug interaction hypothesis with postmortem concentrations. |
| PGx | Vandel_1995 | not_relevant | 3 | 4 | Levomepromazine levels reported unchanged under SSRI co-treatment; no gene variant/genotype effect on its PK/PD, only drug-drug interaction and phenotype switching of probe drugs. |
| PGx | Vevelstad_2009 | not_relevant | 3 | 5 | CYP2D6 genotype affects codeine metabolism, with levomepromazine acting only as an inhibitor; no pharmacogenomic effect on levomepromazine's own PK/PD parameters is reported. |
| PGx | Wójcikowski_2014 | not_relevant | 3 | 5 | In vitro CYP phenotyping of levomepromazine metabolism; no gene variant/genotype/phenotype effect on PK/PD parameters in patients reported. |
| PGx | Yoshimura_2000 | not_relevant | 2 | 3 | Study examines levomepromazine's effect on fluvoxamine PK, not a gene variant's effect on levomepromazine PK/PD; no genotype-stratified results reported. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | This is a population PK study of haloperidol; levomepromazine appears only as a co-administered CYP2D6 substrate covariate, with no levomepromazine parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
