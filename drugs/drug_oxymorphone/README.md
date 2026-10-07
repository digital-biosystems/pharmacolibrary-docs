<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;oxymorphone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxymorphone_Noh2017_reference&quot;,&quot;label&quot;:&quot;Noh_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxymorphone/Oxymorphone_Noh2017_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxymorphone_Sadiq2013_reference&quot;,&quot;label&quot;:&quot;Sadiq_2013_bootstrap_resampling&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxymorphone_Sadiq2013_reference&quot;,&quot;label&quot;:&quot;Sadiq_2013_original_data_set&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxymorphone_Svensson2017_reference&quot;,&quot;label&quot;:&quot;Svensson_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxymorphone/Oxymorphone_Svensson2017_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-10-07 15:07 | 8:56 | 4/1/0 | 1/0/1 | 0/0/4 | 480,009/31,586 | einfracz / qwen3.8-27b | 32 | 9/22 | 31/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Noh_2017_reference](drugs/drug_oxymorphone/Oxymorphone_Noh2017_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Noh K et al., Calculation of a First-In-Man Dose of 7…, Biomolecules & therapeutics (2017) | [10.4062/biomolther.2016.192](https://doi.org/10.4062/biomolther.2016.192) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Sadiq_2013_bootstrap_resampling](drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Sadiq MW et al., Oxymorphone active uptake at the blood-…, Journal of pharmaceutical s… (2013) | [10.1002/jps.23492](https://doi.org/10.1002/jps.23492) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Sadiq_2013_original_data_set](drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Sadiq MW et al., Oxymorphone active uptake at the blood-…, Journal of pharmaceutical s… (2013) | [10.1002/jps.23492](https://doi.org/10.1002/jps.23492) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Svensson_2017_reference](drugs/drug_oxymorphone/Oxymorphone_Svensson2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Svensson RJ et al., Improved power for TB Phase IIa trials…, The Journal of antimicrobia… (2017) | [10.1093/jac/dkx129](https://doi.org/10.1093/jac/dkx129) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Chen_2017_reference](drugs/drug_oxymorphone/Oxymorphone_Chen2017_reference.md) | — | — (no model) | 0 | Chen X et al., Revisiting atenolol as a low passive pe…, Fluids and barriers of the… (2017) | [10.1186/s12987-017-0078-x](https://doi.org/10.1186/s12987-017-0078-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Sadiq_2013_TFL](drugs/drug_oxymorphone/pd_Sadiq_2013_TFL.md) | tail-flick latency ← unbound oxymorphone · direct Emax (saturable) effect | model (no simulator) | Sadiq MW et al., Oxymorphone active uptake at the blood-…, Journal of pharmaceutical s… (2013) | [10.1002/jps.23492](https://doi.org/10.1002/jps.23492) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hutchinson_2004_cell_proliferation](drugs/drug_oxymorphone/pd_Hutchinson_2004_cell_proliferation.md) | cell proliferation biomarker turnover ← oxymorphone | — | Hutchinson MR et al., Relationship between 4,5-epoxymorphinan…, European journal of pharmac… (2004) | [10.1016/j.ejphar.2004.04.049](https://doi.org/10.1016/j.ejphar.2004.04.049) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Balyan_2017](drugs/drug_oxymorphone/pgx_Balyan_2017_CYP2D6_Q100.md) | Balyan R et al., CYP2D6 pharmacogenetic and oxycodone ph…, Pharmacogenomics (2017) | [10.2217/pgs-2016-0183](https://doi.org/10.2217/pgs-2016-0183) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q21` · AUC ratio | metabolism | [Jakobsson_2021](drugs/drug_oxymorphone/pgx_Jakobsson_2021_CYP2D6_Q21.md) | Jakobsson G et al., Oxycodone findings and CYP2D6 function…, Forensic science internatio… (2021) | [10.1016/j.fsigen.2021.102510](https://doi.org/10.1016/j.fsigen.2021.102510) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Samer_2010](drugs/drug_oxymorphone/pgx_Samer_2010_CYP2D6_Q100.md) | Samer CF et al., The effects of CYP2D6 and CYP3A activit…, British journal of pharmaco… (2010) | [10.1111/j.1476-5381.2010.00673.x](https://doi.org/10.1111/j.1476-5381.2010.00673.x) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q31` · CL_ratio | formation | [Stamer_2013](drugs/drug_oxymorphone/pgx_Stamer_2013_CYP2D6_Q31.md) | Stamer UM et al., CYP2D6 genotype dependent oxycodone met…, PloS one (2013) | [10.1371/journal.pone.0060239](https://doi.org/10.1371/journal.pone.0060239) |

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
- **records:** 5  ·  extracted 4  ·  needs_review 0  ·  rejected 1  ·  stale 5
- **scholar-agent fallback query used:** True

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Siao_2011.pdf` | Siao KT et al., Pharmacokinetics of oxymorphone in cats, Journal of veterinary pharm… (2011) | popPK | 10 | [10.1111/j.1365-2885.2011.01271.x](https://doi.org/10.1111/j.1365-2885.2011.01271.x) | [21323677](https://pubmed.ncbi.nlm.nih.gov/21323677) | The study reports quantitative pharmacokinetic parameters (V1, Vss, CL, t1/2) for oxymorphone in cats. |
| `Kelly_2011.pdf` | Kelly KR et al., Pharmacokinetics of oxymorphone in titi…, Journal of the American Ass… (2011) | popPK | 9 | not captured | [21439215](https://pubmed.ncbi.nlm.nih.gov/21439215) | The study reports oxymorphone PK parameters (clearance, half-life) in non-human primates, but the specific numeric values are not present in the provided evidence text. |
| `Xu_2012.pdf` | Xu XS et al., Pharmacokinetic and pharmacodynamic mod…, Pharmaceutical research (2012) | popPK | 9 | [10.1007/s11095-012-0786-5](https://doi.org/10.1007/s11095-012-0786-5) | [22618801](https://pubmed.ncbi.nlm.nih.gov/22618801) | The study performs population PK modeling for oxymorphone (as a metabolite of oxycodone) but provides no numeric parameter values in the abstract or evidence. |
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
| `Otton_1993.pdf` | Otton SV et al., Inhibition by fluoxetine of cytochrome…, Clinical pharmacology and t… (1993) | pgx | 5 | [10.1038/clpt.1993.43](https://doi.org/10.1038/clpt.1993.43) | [8477556](https://www.ncbi.nlm.nih.gov/pubmed/8477556) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-07T15:00:34.886244+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adams_2005 | not_relevant | 0 | 0 | The study examines the effect of oxymorphone on CYP enzyme activity (drug-drug interaction potential) rather than the effect of a specific gene variant/genotype on oxymorphone's PK or PD. |
| popPK | Agema_2021 | irrelevant | 2 | 0 | The study models oxymorphone as a metabolite of oxycodone (not the subject drug), and the text explicitly states oxymorphone could not be incorporated into the final model due to low detectability, so no quantitative PK parameters for oxymorphone are reported. |
| popPK | Ahmadi_2025 | irrelevant | 0 | 0 | The paper is an in-silico study on dengue virus inhibitors and does not involve oxymorphone or its pharmacokinetics. |
| popPK | Alhaj-Suliman_2020 | irrelevant | 1 | 0 | The study is a model-based meta-analysis of efficacy endpoints (pain relief) and safety, not a pharmacokinetic study, and does not report PK parameters like clearance or volume. |
| PGx | Arguelles_2021 | not_relevant | 0 | 0 | The study focuses on sex and estrous cycle differences, not pharmacogenomic variants (gene/genotype/phenotype effects are secondary/indirect via CYP2D activity, not a primary genetic study on oxymorphone PK/PD). |
| PGx | Ballas_2015 | not_relevant | 2 | 1 | The paper discusses general principles of opioid metabolism and pharmacogenomics in sickle cell disease but does not report specific experimental data or fitted effect sizes linking specific genetic variants to PK/PD parameters of oxymorphone. |
| popPK | Carliss_2009 | irrelevant | 0 | 0 | The study focuses on receptor binding, intrinsic efficacy, and pharmacodynamics (receptor reserve) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Chamberlin_2007 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and safety but does not report any gene variants or genotypes affecting oxymorphone PK or PD. |
| popPK | Chen_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of S-atenolol, not oxymorphone. |
| PGx | DePriest_2015 | not_relevant | 0 | 0 | The paper is a general review of opioid metabolism that mentions oxymorphone is metabolized by UGT enzymes but does not report any pharmacogenomic effects or variant-specific changes in PK/PD parameters for oxymorphone. |
| PGx | Deodhar_2021 | not_relevant | 1 | 0 | The paper is a review of oxycodone pharmacogenomics and discusses oxymorphone only as a metabolite, not as the primary drug of interest. |
| PGx | Detert_2023 | not_relevant | 1 | 5 | The study investigates a drug-drug interaction (enzalutamide) rather than a pharmacogenomic effect, as genotype subgroups (CYP2D6) showed no significant differences in oxymorphone PK and were not a primary determinant of the reported results. |
| popPK | EFSA_2023 | irrelevant | 0 | 0 | The paper discusses the toxicology of grayanotoxins in honey and does not involve oxymorphone. |
| popPK | Gabrail_2004 | irrelevant | 0 | 0 | This is a clinical efficacy study comparing analgesic effects, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Gebrin_2025 | irrelevant | 0 | 0 | The paper is a systematic review of tranexamic acid for traumatic brain injury and does not contain pharmacokinetic data for oxymorphone. |
| PGx | Grönlund_2011 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (miconazole) on oxycodone metabolism, not a genetic variant effect on oxymorphone. |
| PGx | Heiskanen_1998 | not_relevant | 4 | 5 | The paper reports drug-drug interaction (quinidine) blocking CYP2D6, not a genetic variant, and does not report PK/PD effects for oxymorphone. |
| PGx | Hoshi_2022 | not_relevant | 0 | 0 | The paper focuses on the association between physical activity and bioactive lipids (including an oxymorphone metabolite as a minor annotation) regarding cardiovascular events, and does not investigate how gene variants affect oxymorphone pharmacokinetics or pharmacodynamics. |
| popPK | Hutchinson_2004 | irrelevant | 0 | 0 | The study investigates in vitro immunomodulatory effects and structure-activity relationships, not pharmacokinetic disposition parameters. |
| popPK | Ing_2012 | irrelevant | 2 | 0 | This is a review of PK/PD modeling for analgesics; oxymorphone is mentioned only as a metabolite of oxycodone contributing to analgesia, and no quantitative disposition parameters (CL, V, etc.) for oxymorphone are reported. |
| popPK | Israni_2026 | irrelevant | 0 | 0 | The paper is a review on bioactive anti-inflammatory compounds (e.g., resveratrol, quercetin) and does not study oxymorphone pharmacokinetics. |
| PGx | Jakobsson_2021 | not_relevant | 6 | 7 | The study reports an association between CYP2D6 phenotype and oxymorphone concentrations in postmortem samples, but it does not fit a specific quantitative pharmacokinetic effect size (theta) for the drug's pharmacokinetics. |
| popPK | Kaiko_1996 | irrelevant | 2 | 0 | The study focuses on oxycodone pharmacokinetics, with oxymorphone measured only as a minor metabolite for which no specific quantitative disposition parameters (CL, V, etc.) are reported, only relative AUC trends. |
| popPK | Kelly_2011 | relevant | 9 | 2 | The study reports oxymorphone PK parameters (clearance, half-life) in non-human primates, but the specific numeric values are not present in the provided evidence text. |
| PGx | Kummer_2011 | not_relevant | 1 | 0 | The paper studies drug-drug interactions (inhibitors) affecting the PK/PD of oxycodone, not the pharmacogenomic effect of a gene variant on oxymorphone. |
| popPK | Laffont_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response relationship of buprenorphine, not oxymorphone. |
| PGx | Lalovic_2004 | not_relevant | 2 | 0 | The paper investigates the enzymatic formation of oxymorphone from its prodrug oxycodone, rather than reporting pharmacogenomic effects on the PK/PD parameters of oxymorphone itself. |
| PGx | Lalovic_2006 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics and pharmacodynamics of oxycodone and its metabolites but does not report pharmacogenomic effects of gene variants (e.g., CYP2D6/CYP3A4) on oxymorphone's PK/PD parameters. |
| popPK | Li_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of oxycodone; oxymorphone is mentioned only as a metabolite without reporting specific PK parameters for it. |
| popPK | Linares_2014 | irrelevant | 0 | 0 | The study focuses on OxyContin (oxycodone), not oxymorphone. |
| PGx | Madadi_2012 | not_relevant | 0 | 0 | The paper is a narrative review discussing the need for future studies on CYP2D6 induction and opioid metabolism, but it does not report specific pharmacogenomic data or effect sizes for oxymorphone. |
| PGx | Merchant_2022 | not_relevant | 1 | 0 | The study reports pharmacogenomic effects on oxycodone requirements (PD), not on the PK/PD parameters of oxymorphone itself, which is only mentioned as a metabolite. |
| popPK | Muir_2026 | irrelevant | 0 | 0 | The paper is a review on fluid dynamics and IV fluid therapy, mentioning PK concepts generally but containing no data for oxymorphone. |
| popPK | Noh_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 7-O-Succinyl Macrolactin A (SMA), not oxymorphone. |
| PGx | Otton_1993 | not_relevant | 2 | 1 | The paper reports in vitro inhibition of oxymorphone formation by fluoxetine, but does not report a pharmacogenomic effect (gene variant/genotype) on a PK/PD parameter in vivo. |
| PGx | Overholser_2011 | not_relevant | 1 | 0 | The paper is a review of drug-drug interactions involving opioids and explicitly notes oxymorphone is not metabolized by CYP450, but it does not report specific pharmacogenomic effects on oxymorphone PK/PD. |
| popPK | Piirainen_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oxycodone, and while oxymorphone is mentioned as a metabolite, no population PK model or quantitative disposition parameters for oxymorphone itself are reported. |
| PGx | Ramey_2014 | not_relevant | 0 | 0 | The paper studies the metabolism of imipramine and desipramine, not oxymorphone. |
| PGx | Rytkönen_2020 | not_relevant | 0 | 0 | The paper models drug-drug interactions (inhibitors/inducers) for oxycodone and its metabolites, not pharmacogenomic effects of gene variants on oxymorphone pharmacokinetics. |
| PGx | Saari_2010 | not_relevant | 0 | 0 | The study examines drug-drug interaction (CYP3A4 inhibition by itraconazole) on oxycodone/oxymorphone, not a pharmacogenomic effect of a gene variant. |
| popPK | Schmith_2019 | irrelevant | 0 | 0 | The paper focuses on the QT interval effects of buprenorphine, and oxymorphone is only mentioned as a potential covariate/opioid class in the analysis plan, not as the subject of PK parameter estimation. |
| popPK | Schoedel_2010 | irrelevant | 0 | 0 | The study evaluates cognitive and psychomotor effects (pharmacodynamics) rather than pharmacokinetic parameters, and no PK data for oxymorphone are reported. |
| popPK | Siao_2012 | irrelevant | 1 | 0 | This is a pharmacodynamic study reporting effect concentration (EC50) parameters, not pharmacokinetic disposition parameters (CL, V, Ka, t1/2). |
| popPK | Svensson_2017 | irrelevant | 0 | 0 | The paper is a simulation study on anti-TB drugs (rifampicin and hypothetical drugs A-D) and does not involve oxymorphone. |
| PGx | Söderberg_2013 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomic effects on oxycodone pharmacokinetics, not oxymorphone. |
| popPK | Toyama_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for oxycodone (the parent drug), while oxymorphone is only mentioned as a metabolite in the introduction without any reported quantitative data. |
| popPK | Valtola_2020 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of oxycodone (and co-administered naloxone), with oxymorphone only mentioned as a detected metabolite at low concentrations without providing specific pharmacokinetic parameter estimates for oxymorphone itself. |
| popPK | Vats_2025 | irrelevant | 0 | 0 | The paper is a review of the medicinal plant Tecomella undulata and does not contain any pharmacokinetic data for oxymorphone. |
| popPK | Wei_2025 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of clinical outcomes (pain, depression, hospitalization) associated with drug-drug interactions, not a pharmacokinetic study measuring disposition parameters for oxymorphone. |
| popPK | Wilson_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nalbuphine, not oxymorphone. |
| popPK | Xu_2012 | relevant | 9 | 0 | The study performs population PK modeling for oxymorphone (as a metabolite of oxycodone) but provides no numeric parameter values in the abstract or evidence. |
| popPK | Zaidi_2026 | irrelevant | 0 | 0 | The paper is a systematic review of opioid PK models in pregnancy that covers morphine, codeine, buprenorphine, fentanyl, oxycodone, methadone, and sufentanil, but does not include oxymorphone. |
| popPK | Zeitlinger_2021 | irrelevant | 0 | 0 | The study focuses on oxycodone pharmacokinetics, and oxymorphone is mentioned only as a metabolite that was too often below the limit of quantification to be modeled or provide quantitative parameters. |
| popPK | Zádor_2017 | irrelevant | 0 | 0 | The study characterizes the pharmacological properties (affinity and potency) of a novel compound 14-O-methylmorphine and does not report pharmacokinetic parameters for oxymorphone. |
| PGx | de_2008 | not_relevant | 0 | 0 | The paper is a general review of cancer pain management that mentions pharmacogenetics in a theoretical context but does not report specific genetic effects on oxymorphone PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:00 UTC</sub>
