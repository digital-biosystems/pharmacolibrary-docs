<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;oxymorphone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxymorphone_Noh2017_reference&quot;,&quot;label&quot;:&quot;Noh_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxymorphone/Oxymorphone_Noh2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxymorphone_Sadiq2013_bootstrap_resampling&quot;,&quot;label&quot;:&quot;Sadiq_2013_bootstrap_resampling&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_bootstrap_resampling.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxymorphone_Sadiq2013_original_data_set&quot;,&quot;label&quot;:&quot;Sadiq_2013_original_data_set&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_original_data_set.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxymorphone_Svensson2017_reference&quot;,&quot;label&quot;:&quot;Svensson_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxymorphone/Oxymorphone_Svensson2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# oxymorphone

- **generic name:** oxymorphone
- **ATC codes:** `N02AA11`
- **DrugBank:** [DB01192](https://go.drugbank.com/drugs/DB01192) · **PubChem:** [CID 5284604](https://pubchem.ncbi.nlm.nih.gov/compound/5284604)
- **molar mass:** 301.3371 g/mol (C17H19NO4) — DrugBank
- **groups:** approved, vet_approved

## About

Oxymorphone is an opioid painkiller used to treat moderate to severe pain. It is an approved medicine, also approved for veterinary use, and is used mainly in North America rather than the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423380](https://www.wikidata.org/wiki/Q423380) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| oxymorphone | parent | 301.337 | C17H19NO4 | DrugBank | [5284604](https://pubchem.ncbi.nlm.nih.gov/compound/5284604) | Sadiq_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:01 | 9:12 | 4/1/0 | 2/0/0 | 0/0/4 | 907,178/35,592 | einfracz / qwen3.8-27b | 31 | 9/21 | 30/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Noh_2017_reference](drugs/drug_oxymorphone/Oxymorphone_Noh2017_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Noh K et al., Calculation of a First-In-Man Dose of 7…, Biomolecules & therapeutics (2017) | [10.4062/biomolther.2016.192](https://doi.org/10.4062/biomolther.2016.192) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Sadiq_2013_bootstrap_resampling](drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_bootstrap_resampling.md) | ▶ model + simulator | 1-compartment, oral | 6 | Sadiq MW et al., Oxymorphone active uptake at the blood-…, Journal of pharmaceutical s… (2013) | [10.1002/jps.23492](https://doi.org/10.1002/jps.23492) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Sadiq_2013_original_data_set](drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_original_data_set.md) | ▶ model + simulator | 1-compartment, oral | 6 | Sadiq MW et al., Oxymorphone active uptake at the blood-…, Journal of pharmaceutical s… (2013) | [10.1002/jps.23492](https://doi.org/10.1002/jps.23492) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Svensson_2017_reference](drugs/drug_oxymorphone/Oxymorphone_Svensson2017_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Svensson RJ et al., Improved power for TB Phase IIa trials…, The Journal of antimicrobia… (2017) | [10.1093/jac/dkx129](https://doi.org/10.1093/jac/dkx129) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Chen_2017_reference](drugs/drug_oxymorphone/Oxymorphone_Chen2017_reference.md) | — | 2-compartment (no model) | 4 | Chen X et al., Revisiting atenolol as a low passive pe…, Fluids and barriers of the… (2017) | [10.1186/s12987-017-0078-x](https://doi.org/10.1186/s12987-017-0078-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hutchinson_2004_isolated_mouse_splenocytes_stimulated_with_concanavalin_A](drugs/drug_oxymorphone/pd_Hutchinson_2004_isolated_mouse_splenocytes_stimulated_with_c.md) | isolated mouse splenocytes stimulated with concanavalin A ← oxymorphone · direct sigmoid Emax (Hill) effect | — | Hutchinson MR et al., Relationship between 4,5-epoxymorphinan…, European journal of pharmac… (2004) | [10.1016/j.ejphar.2004.04.049](https://doi.org/10.1016/j.ejphar.2004.04.049) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Sadiq_2013_tail_flick_latency](drugs/drug_oxymorphone/pd_Sadiq_2013_tail_flick_latency.md) | tail-flick latency ← unbound oxymorphone · direct Emax (saturable) effect | model (no simulator) | Sadiq MW et al., Oxymorphone active uptake at the blood-…, Journal of pharmaceutical s… (2013) | [10.1002/jps.23492](https://doi.org/10.1002/jps.23492) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Balyan_2017](drugs/drug_oxymorphone/pgx_Balyan_2017_CYP2D6_Q100.md) | Balyan R et al., CYP2D6 pharmacogenetic and oxycodone ph…, Pharmacogenomics (2017) | [10.2217/pgs-2016-0183](https://doi.org/10.2217/pgs-2016-0183) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Jakobsson_2021](drugs/drug_oxymorphone/pgx_Jakobsson_2021_CYP2D6_Q100.md) | Jakobsson G et al., Oxycodone findings and CYP2D6 function…, Forensic science internatio… (2021) | [10.1016/j.fsigen.2021.102510](https://doi.org/10.1016/j.fsigen.2021.102510) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Samer_2010](drugs/drug_oxymorphone/pgx_Samer_2010_CYP2D6_Q100.md) | Samer CF et al., The effects of CYP2D6 and CYP3A activit…, British journal of pharmaco… (2010) | [10.1111/j.1476-5381.2010.00673.x](https://doi.org/10.1111/j.1476-5381.2010.00673.x) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q305` · kfm | metabolism | [Stamer_2013](drugs/drug_oxymorphone/pgx_Stamer_2013_CYP2D6_Q305.md) | Stamer UM et al., CYP2D6 genotype dependent oxycodone met…, PloS one (2013) | [10.1371/journal.pone.0060239](https://doi.org/10.1371/journal.pone.0060239) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxymorphone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` formation/substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2D6` formation/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 220 matched, 102 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 5  ·  extracted 4  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** True

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Siao_2011.pdf` | Siao KT et al., Pharmacokinetics of oxymorphone in cats, Journal of veterinary pharm… (2011) | popPK | 10 | [10.1111/j.1365-2885.2011.01271.x](https://doi.org/10.1111/j.1365-2885.2011.01271.x) | [21323677](https://pubmed.ncbi.nlm.nih.gov/21323677) | The study reports quantitative compartmental PK parameters (Vc, Vss, CL, t1/2) for oxymorphone in cats with all numeric values clearly stated in the evidence. |
| `Kelly_2011.pdf` | Kelly KR et al., Pharmacokinetics of oxymorphone in titi…, Journal of the American Ass… (2011) | popPK | 8 | not captured | [21439215](https://pubmed.ncbi.nlm.nih.gov/21439215) | The study reports oxymorphone pharmacokinetics in nonhuman primates using a 2-compartment model, but specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence. |
| `Schoedel_2010.pdf` | Schoedel KA et al., Reduced cognitive and psychomotor impai…, Pain physician (2010) | pd | 4 | not captured | [21102969](https://www.ncbi.nlm.nih.gov/pubmed/21102969) | metadata signals extractable PD data (Emax) |
| `Heiskanen_1998.pdf` | Heiskanen T et al., Effects of blocking CYP2D6 on the pharm…, Clinical pharmacology and t… (1998) | pgx | 8 | [10.1016/S0009-9236(98)90051-0](https://doi.org/10.1016/S0009-9236(98)90051-0) | [9871425](https://www.ncbi.nlm.nih.gov/pubmed/9871425) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kummer_2011.pdf` | Kummer O et al., Effect of the inhibition of CYP3A4 or C…, European journal of clinica… (2011) | pgx | 8 | [10.1007/s00228-010-0893-3](https://doi.org/10.1007/s00228-010-0893-3) | [20857093](https://www.ncbi.nlm.nih.gov/pubmed/20857093) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Söderberg_2013.pdf` | Söderberg Löfdal KC et al., Cytochrome P450-mediated changes in oxy…, Drugs (2013) | pgx | 8 | [10.1007/s40265-013-0036-0](https://doi.org/10.1007/s40265-013-0036-0) | [23605691](https://www.ncbi.nlm.nih.gov/pubmed/23605691) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Lalovic_2004.pdf` | Lalovic B et al., Quantitative contribution of CYP2D6 and…, Drug metabolism and disposi… (2004) | pgx | 7 | [10.1124/dmd.32.4.447](https://doi.org/10.1124/dmd.32.4.447) | [15039299](https://www.ncbi.nlm.nih.gov/pubmed/15039299) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Lalovic_2006.pdf` | Lalovic B et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacology and t… (2006) | pgx | 7 | [10.1016/j.clpt.2006.01.009](https://doi.org/10.1016/j.clpt.2006.01.009) | [16678548](https://www.ncbi.nlm.nih.gov/pubmed/16678548) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Overholser_2011.pdf` | Overholser BR et al., Opioid pharmacokinetic drug-drug intera…, The American journal of man… (2011) | pgx | 7 | not captured | [21999760](https://www.ncbi.nlm.nih.gov/pubmed/21999760) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Rytkönen_2020.pdf` | Rytkönen J et al., Physiologically based pharmacokinetic m…, Biopharmaceutics & drug dis… (2020) | pgx | 7 | [10.1002/bdd.2215](https://doi.org/10.1002/bdd.2215) | [31925778](https://www.ncbi.nlm.nih.gov/pubmed/31925778) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Saari_2010.pdf` | Saari TI et al., Effects of itraconazole on the pharmaco…, European journal of clinica… (2010) | pgx | 7 | [10.1007/s00228-009-0775-8](https://doi.org/10.1007/s00228-009-0775-8) | [20076952](https://www.ncbi.nlm.nih.gov/pubmed/20076952) | metadata signals extractable PGX data (CYP34A, PK/PD-context) |
| `Madadi_2012.pdf` | Madadi P et al., Pharmacogenetics of opioids for the tre…, Current drug metabolism (2012) | pgx | 5 | [10.2174/138920012800840392](https://doi.org/10.2174/138920012800840392) | [22452458](https://www.ncbi.nlm.nih.gov/pubmed/22452458) | metadata signals extractable PGX data (CYP2D6) |
| `Merchant_2022.pdf` | Merchant S et al., Association of CYP2D6 genotype predicte…, Annals of translational med… (2022) | pgx | 5 | [10.21037/atm-2022-58](https://doi.org/10.21037/atm-2022-58) | [36618804](https://www.ncbi.nlm.nih.gov/pubmed/36618804) | metadata signals extractable PGX data (CYP2D6) |
| `Otton_1993.pdf` | Otton SV et al., Inhibition by fluoxetine of cytochrome…, Clinical pharmacology and t… (1993) | pgx | 5 | [10.1038/clpt.1993.43](https://doi.org/10.1038/clpt.1993.43) | [8477556](https://www.ncbi.nlm.nih.gov/pubmed/8477556) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-07T05:54:44.606554+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adams_2005 | not_relevant | 0 | 0 | The study evaluates oxymorphone's effect on CYP enzyme activity (drug-drug interaction potential) in general healthy subjects, not the effect of a specific gene variant/genotype on oxymorphone's PK/PD. |
| popPK | Agema_2021 | irrelevant | 1 | 0 | The study models the pharmacokinetics of oxycodone and its metabolites (nor-oxycodone, nor-oxymorphone), but explicitly excludes oxymorphone from the final model due to data quality issues and reports no quantitative PK parameters for oxymorphone itself. |
| popPK | Ahmadi_2025 | irrelevant | 0 | 0 | The paper is an in-silico study on dengue virus inhibitors and does not involve oxymorphone or report any pharmacokinetic parameters for it. |
| popPK | Alhaj-Suliman_2020 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of efficacy (EMAX, EC50) and safety for osteoarthritis, reporting no pharmacokinetic disposition parameters (CL, V, etc.) for oxymorphone. |
| PGx | Arguelles_2021 | not_relevant | 0 | 0 | The paper studies the effects of sex and estrous cycle on oxycodone PK/PD, not pharmacogenomic effects of a gene variant/genotype on oxymorphone. |
| PGx | Ballas_2015 | not_relevant | 0 | 0 | The text is a review discussing pain pathophysiology and general opioid metabolism, but does not report specific quantitative pharmacogenomic effects on oxymorphone PK/PD parameters. |
| popPK | Carliss_2009 | irrelevant | 0 | 0 | The study is an in vitro receptor pharmacology and in vivo functional assay study, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Chamberlin_2007 | not_relevant | 0 | 0 | The paper is a clinical review of oxymorphone's pharmacology and safety but contains no information regarding gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Chen_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of S-atenolol in rats, and oxymorphone is only mentioned in the methods section as a comparator for the model structure. |
| PGx | DePriest_2015 | not_relevant | 2 | 1 | The paper is a general review of opioid metabolism and disposition; it identifies oxymorphone as primarily metabolized by UGT enzymes but does not report specific gene variants or pharmacogenomic effects on its PK parameters. |
| PGx | Deodhar_2021 | not_relevant | 8 | 0 | This is a review article summarizing the literature rather than an original study, so it does not report specific new quantitative pharmacokinetic or pharmacodynamic parameters or fitted effect sizes for oxymorphone. |
| PGx | Detert_2023 | not_relevant | 3 | 5 | The paper reports a drug-drug interaction (enzalutamide) affecting oxymorphone PK, not a pharmacogenomic effect from a specific gene variant/genotype. |
| PGx | Doyle_2023 | not_relevant | 6 | 3 | The study reports strain differences in oxymorphone metabolism as a consequence of oxycodone self-administration, rather than a direct pharmacogenomic effect of a specific variant on oxymorphone's PK/PD parameters. |
| popPK | EFSA_2023 | irrelevant | 0 | 0 | The paper is a risk assessment of grayanotoxins in honey and does not involve oxymorphone or its pharmacokinetics. |
| popPK | Gabrail_2004 | irrelevant | 1 | 0 | This is a clinical efficacy and safety study comparing analgesic dosages, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume of distribution. |
| popPK | Gebrin_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of tranexamic acid for traumatic brain injury and does not contain pharmacokinetic data for oxymorphone. |
| PGx | Grönlund_2011 | not_relevant | 0 | 0 | The study investigates the effect of a drug interaction (miconazole) on oxycodone and its metabolites, not the effect of a genetic variant on PK/PD parameters. |
| PGx | Heiskanen_1998 | not_relevant | 2 | 5 | The study investigates the pharmacokinetics and pharmacodynamics of the parent drug (oxycodone) following CYP2D6 inhibition, rather than reporting the pharmacogenomic effect on oxymorphone itself. |
| PGx | Hoshi_2022 | not_relevant | 0 | 0 | The paper discusses bioactive lipids and cardiovascular disease, and 'oxymorphone-3b-D-glucuronide' is listed as an annotated metabolite, but there is no analysis of pharmacogenomic effects on its PK/PD parameters. |
| popPK | Hutchinson_2004 | irrelevant | 0 | 0 | The study is an in vitro immunology investigation of cell proliferation and does not report any pharmacokinetic parameters (CL, V, half-life) for oxymorphone. |
| popPK | Ing_2012 | irrelevant | 2 | 0 | The paper is a review discussing oxymorphone only as the active metabolite of oxycodone in the context of oxycodone's PK/PD, and it does not provide quantitative pharmacokinetic parameters (e.g., clearance, volume) for oxymorphone itself. |
| popPK | Israni_2026 | irrelevant | 0 | 0 | The paper is a review on bioactive anti-inflammatory compounds (e.g., resveratrol, quercetin) and does not contain any pharmacokinetic data for oxymorphone. |
| popPK | Kaiko_1996 | irrelevant | 0 | 0 | The study reports AUC values for oxymorphone (a metabolite) after oxycodone administration, but does not provide the specific numerical PK parameter values (such as clearance or volume) required for extraction, nor is it a dedicated oxymorphone PK study. |
| popPK | Kelly_2011 | relevant | 8 | 0 | The study reports oxymorphone pharmacokinetics in nonhuman primates using a 2-compartment model, but specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence. |
| PGx | Kummer_2011 | not_relevant | 2 | 5 | The paper studies the effects of CYP3A4/CYP2D6 inhibition on oxycodone, not the pharmacokinetics or pharmacodynamics of oxymorphone itself. |
| popPK | Laffont_2022 | irrelevant | 0 | 0 | The paper focuses on buprenorphine pharmacokinetics and efficacy in opioid use disorder; oxymorphone is only mentioned as a metabolite detected in urine drug screens for confirmatory testing, not as the subject of PK analysis. |
| PGx | Lalovic_2004 | not_relevant | 0 | 0 | The paper investigates the in vitro metabolism of oxycodone to oxymorphone by CYP enzymes but does not report how a genetic variant affects the PK or PD of oxymorphone itself. |
| PGx | Lalovic_2006 | not_relevant | 0 | 0 | The paper describes oxymorphone as a metabolite of oxycodone and discusses CYP2D6-mediated metabolism, but it does not report a study where specific genetic variants alter the PK or PD parameters of the drug oxymorphone itself. |
| popPK | Li_2016 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of oxycodone, not oxymorphone; oxymorphone is only mentioned as a minor metabolite. |
| popPK | Linares_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of OxyContin (oxycodone), not oxymorphone. |
| PGx | Madadi_2012 | not_relevant | 0 | 0 | The text is a review or perspective highlighting gaps in research and does not report specific experimental data or pharmacogenomic effects on oxymorphone pharmacokinetics or pharmacodynamics. |
| popPK | Muir_2026 | irrelevant | 0 | 0 | The paper is a review of fluid dynamics and hemodynamics in animals/humans and does not report pharmacokinetic parameters for the drug oxymorphone. |
| popPK | Noh_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 7-O-Succinyl Macrolactin A (SMA), not oxymorphone. |
| PGx | Otton_1993 | not_relevant | 3 | 0 | The paper discusses the inhibition of CYP2D6 (a potential prodrug activation pathway for oxymorphone) by fluoxetine, but does not report pharmacokinetic parameters of oxymorphone or the impact of genetic variants on its disposition. |
| PGx | Overholser_2011 | not_relevant | 1 | 0 | The paper is a review of drug-drug interactions, specifically noting that oxymorphone is not metabolized by CYP450 and thus has fewer PK DDIs, but it does not report pharmacogenomic effects on oxymorphone PK/PD. |
| popPK | Piirainen_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of oxycodone, with oxymorphone mentioned only as a minor metabolite detected in CSF without a dedicated PK model or specific parameter estimation for it as the subject drug. |
| PGx | Ramey_2014 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of imipramine/desipramine, while oxymorphone is only mentioned as a detected substance in urine samples, and no pharmacogenomic data regarding oxymorphone is reported. |
| PGx | Rytkönen_2020 | not_relevant | 2 | 10 | The paper focuses on drug-drug interactions (DDI) via CYP inhibition/induction and PBPK modelling, not on pharmacogenomic (genotype-based) effects on oxymorphone PK/PD. |
| PGx | Saari_2010 | not_relevant | 1 | 5 | The study investigates a drug-drug interaction (pharmacological inhibition) with itraconazole, not a pharmacogenomic effect (genotype/variant) on oxymorphone. |
| popPK | Schmith_2019 | irrelevant | 0 | 0 | The study focuses on the QT interval effects of buprenorphine, and oxymorphone is mentioned only as a potential confounding comedication, not as the subject of pharmacokinetic analysis. |
| popPK | Schoedel_2010 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of cognitive and psychomotor impairment, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Siao_2012 | irrelevant | 0 | 0 | This is a pharmacodynamic study measuring thermal antinociception (effect) and fitting concentration-response models (EC50), not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life. |
| PGx | Stamer_2013 | not_relevant | 5 | 8 | The study reports how CYP2D6 genotype affects the PK (formation/metabolism) of oxycodone and its active metabolite oxymorphone, not how a variant directly changes a PK/PD parameter of oxymorphone itself. |
| popPK | Svensson_2017 | irrelevant | 0 | 0 | The study simulates pharmacokinetics for hypothetical anti-TB drugs (A-D) and rifampicin, and does not contain any data for oxymorphone. |
| PGx | Söderberg_2013 | not_relevant | 5 | 5 | The paper discusses oxycodone pharmacogenomics and mentions oxymorphone only as a metabolite, without providing specific PK/PD data for oxymorphone itself. |
| popPK | Toyama_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oxycodone, and oxymorphone is only mentioned as a metabolite in the introduction without any quantitative data provided. |
| popPK | Valtola_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for oxycodone, while oxymorphone is only mentioned as a metabolite detected in low concentrations without any quantitative PK parameter estimates provided. |
| popPK | Vats_2025 | irrelevant | 0 | 0 | The paper is a review of the medicinal plant Tecomella undulata and does not contain any pharmacokinetic data or mention of oxymorphone. |
| popPK | Wei_2025 | irrelevant | 0 | 0 | This is a retrospective cohort study analyzing clinical adverse outcomes (pain, hospitalization) associated with drug-drug interactions (CYP2D6 inhibitors/substrates) in older adults, and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for oxymorphone or any other specific drug. |
| popPK | Wilson_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nalbuphine, not oxymorphone, which is only mentioned as a chemical relative. |
| PGx | Wong_2024 | not_relevant | 3 | 3 | The study found no statistically significant differences in oxymorphone pharmacokinetic parameters (concentrations/ratios) between CYP2D6 phenotype groups. |
| popPK | Xu_2012 | irrelevant | 2 | 0 | Although the study mentions population PK modeling for oxymorphone, the provided evidence does not contain any quantitative PK parameter values (e.g., CL, V) for oxymorphone. |
| popPK | Zaidi_2026 | irrelevant | 0 | 0 | The paper is a systematic review of PK models for opioids (fentanyl, methadone, buprenorphine, etc.) in pregnancy, but oxymorphone is not mentioned or studied. |
| popPK | Zeitlinger_2021 | irrelevant | 1 | 0 | The paper focuses on oxycodone PK; oxymorphone is only mentioned as an oxycodone metabolite that was not successfully modeled due to low concentrations, and no quantitative parameters are reported for it. |
| popPK | Zádor_2017 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor affinity and potency (Ki, EC50) in vitro and in vivo, not a pharmacokinetic study reporting disposition parameters like clearance or volume for oxymorphone. |
| PGx | de_2008 | not_relevant | 0 | 0 | The paper is a general review of cancer pain management and mentions pharmacogenetics conceptually but does not report any specific gene variants or their effects on oxymorphone pharmacokinetics or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:54 UTC</sub>
