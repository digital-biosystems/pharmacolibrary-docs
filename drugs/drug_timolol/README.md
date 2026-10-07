<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;timolol&quot;}]"></div>

# timolol

- **generic name:** timolol
- **ATC codes:** `C07AA06`, `C07BA06`, `S01ED01`
- **DrugBank:** [DB00373](https://go.drugbank.com/drugs/DB00373) · **PubChem:** [CID 33624](https://pubchem.ncbi.nlm.nih.gov/compound/33624)
- **molar mass:** 316.42 g/mol (C13H24N4O3S) — DrugBank
- **groups:** approved, investigational

## About

Timolol is a non-selective beta blocker used for high blood pressure, angina, after a heart attack, and as eye drops for glaucoma and raised eye pressure. It is an approved medicine and is listed as a WHO essential medicine, so it is widely used worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413994](https://www.wikidata.org/wiki/Q413994) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| timolol | parent | 316.42 | C13H24N4O3S | DrugBank | [33624](https://pubchem.ncbi.nlm.nih.gov/compound/33624) | Chiang_1996, Ishizaki_1978, Ji_1993 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:37 | 9:30 | 1/1/1 | 2/0/1 | 1/0/3 | 160,789/24,724 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 4/5 | 8/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Ji_1993_reference](drugs/drug_timolol/Timolol_Ji1993_reference.md) | held back | 1-compartment, IV | 5 | Ji XF et al., [The bioavailability of transdermal the…, Yao xue xue bao = Acta phar… (1993) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.889). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Ishizaki_1978_reference](drugs/drug_timolol/Timolol_Ishizaki1978_reference.md) | — | 1-compartment (no model) | 4 | Ishizaki T et al., Clinical pharmacologic observations on…, Journal of clinical pharmac… (1978) | [10.1002/j.1552-4604.1978.tb01580.x](https://doi.org/10.1002/j.1552-4604.1978.tb01580.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Chiang_1996_reference](drugs/drug_timolol/Timolol_Chiang1996_reference.md) | — | 1-compartment (no model) | 1 | Chiang CH et al., Pharmacokinetics and intraocular pressu…, Journal of ocular pharmacol… (1996) | [10.1089/jop.1996.12.471](https://doi.org/10.1089/jop.1996.12.471) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Sakanaka_2008_2_IOP](drugs/drug_timolol/pd_Sakanaka_2008_2_IOP.md) | intraocular pressure ← timolol · indirect response — drug inhibits the production of intraocular pressure | — | Sakanaka K et al., Ocular pharmacokinetic/pharmacodynamic…, Biological & pharmaceutical… (2008) | [10.1248/bpb.31.970](https://doi.org/10.1248/bpb.31.970) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [van_2009_HR](drugs/drug_timolol/pd_van_2009_HR.md) | heart rate ← timolol · inhibition effect | — | van Steeg TJ et al., Influence of plasma protein binding on…, Journal of pharmaceutical s… (2009) | [10.1002/jps.21658](https://doi.org/10.1002/jps.21658) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Sakanaka_2008_IOP](drugs/drug_timolol/pd_Sakanaka_2008_IOP.md) | intraocular pressure ← timolol · indirect response — drug inhibits the production of intraocular pressure | model (no simulator) | Sakanaka K et al., Ocular pharmacokinetic/pharmacodynamic…, Biological & pharmaceutical… (2008) | [10.1248/bpb.31.1590](https://doi.org/10.1248/bpb.31.1590) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Samer_2013](drugs/drug_timolol/pgx_Samer_2013_CYP2C9_safety.md) | Samer CF et al., Applications of CYP450 testing in the c…, Molecular diagnosis & thera… (2013) | [10.1007/s40291-013-0028-5](https://doi.org/10.1007/s40291-013-0028-5) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Liu_2016](drugs/drug_timolol/pgx_Liu_2016_CYP2C19_Q100.md) | Liu XL et al., Roles of CYP2C19 Gene Polymorphisms in…, Medical science monitor : i… (2016) | [10.12659/msm.894868](https://doi.org/10.12659/msm.894868) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2C19** | `Q305` · kfm | formation | [Samer_2013](drugs/drug_timolol/pgx_Samer_2013_CYP2C19_Q305.md) | Samer CF et al., Applications of CYP450 testing in the c…, Molecular diagnosis & thera… (2013) | [10.1007/s40291-013-0028-5](https://doi.org/10.1007/s40291-013-0028-5) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2D6** | `Q22` · CL | metabolism | [Samer_2013](drugs/drug_timolol/pgx_Samer_2013_CYP2D6_Q22.md) | Samer CF et al., Applications of CYP450 testing in the c…, Molecular diagnosis & thera… (2013) | [10.1007/s40291-013-0028-5](https://doi.org/10.1007/s40291-013-0028-5) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=timolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` metabolism/substrate, `CYP2C9` safety_allele, `CYP2D6` metabolism/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 98 matched, 60 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ishizaki_1978.pdf` | Ishizaki T et al., Clinical pharmacologic observations on…, Journal of clinical pharmac… (1978) | popPK | 10 | [10.1002/j.1552-4604.1978.tb01580.x](https://doi.org/10.1002/j.1552-4604.1978.tb01580.x) | [721948](https://pubmed.ncbi.nlm.nih.gov/721948) | The abstract explicitly reports quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance) for timolol in normal individuals. |
| `Ji_1993.pdf` | Ji XF et al., [The bioavailability of transdermal the…, Yao xue xue bao = Acta phar… (1993) | popPK | 10 | not captured | [8285070](https://pubmed.ncbi.nlm.nih.gov/8285070) | The paper reports quantitative pharmacokinetic parameters (Vss, K, AUC, Cmax, Tmax) for timolol in humans. |
| `Chiang_1996.pdf` | Chiang CH et al., Pharmacokinetics and intraocular pressu…, Journal of ocular pharmacol… (1996) | popPK | 9 | [10.1089/jop.1996.12.471](https://doi.org/10.1089/jop.1996.12.471) | [8951683](https://pubmed.ncbi.nlm.nih.gov/8951683) | The study reports quantitative pharmacokinetic parameters (ka, kd, ke, AUC) for timolol in rabbit eyes using a two-compartment model. |
| `Fayyaz_2021.pdf` | Fayyaz A et al., Ocular pharmacokinetics of atenolol, ti…, European journal of pharmac… (2021) | popPK | 8 | [10.1016/j.ejpb.2021.06.003](https://doi.org/10.1016/j.ejpb.2021.06.003) | [34139290](https://pubmed.ncbi.nlm.nih.gov/34139290) | The study reports ocular pharmacokinetics for timolol in rabbits, but the evidence only provides relative AUC ratios (e.g., 1.4 times) rather than absolute quantitative disposition parameters like clearance or volume. |
| `McCrea_1990.pdf` | McCrea JB et al., Transdermal timolol: beta blockade and…, Pharmacotherapy (1990) | pd | 5 | not captured | [2388875](https://www.ncbi.nlm.nih.gov/pubmed/2388875) | metadata signals extractable PD data (EMAX) |
| `Yoshida_1991.pdf` | Yoshida S et al., A potassium current evoked by growth ho…, The Journal of physiology (1991) | pd | 5 | [10.1113/jphysiol.1991.sp018856](https://doi.org/10.1113/jphysiol.1991.sp018856) | [1822542](https://www.ncbi.nlm.nih.gov/pubmed/1822542) | metadata signals extractable PD data (EC50) |
| `Sharif_2024.pdf` | Sharif NA, Human experience and efficacy of omiden…, Current opinion in pharmaco… (2024) | pd | 4 | [10.1016/j.coph.2023.102426](https://doi.org/10.1016/j.coph.2023.102426) | [38168596](https://www.ncbi.nlm.nih.gov/pubmed/38168596) | metadata signals extractable PD data (EC50) |
| `Nieminen_2005.pdf` | Nieminen T et al., Polymorphisms of genes CYP2D6, ADRB1 an…, European journal of clinica… (2005) | pgx | 8 | [10.1007/s00228-005-0052-4](https://doi.org/10.1007/s00228-005-0052-4) | [16315032](https://www.ncbi.nlm.nih.gov/pubmed/16315032) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Nieminen_2007.pdf` | Nieminen T et al., Ophthalmic timolol: plasma concentratio…, Scandinavian journal of cli… (2007) | pgx | 8 | [10.1080/00365510601034736](https://doi.org/10.1080/00365510601034736) | [17366003](https://www.ncbi.nlm.nih.gov/pubmed/17366003) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mäenpää_2014.pdf` | Mäenpää J et al., Paroxetine markedly increases plasma co…, Drug metabolism and disposi… (2014) | pgx | 7 | [10.1124/dmd.114.059576](https://doi.org/10.1124/dmd.114.059576) | [25261563](https://www.ncbi.nlm.nih.gov/pubmed/25261563) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Volotinen_2007.pdf` | Volotinen M et al., Timolol metabolism in human liver micro…, Drug metabolism and disposi… (2007) | pgx | 7 | [10.1124/dmd.106.012906](https://doi.org/10.1124/dmd.106.012906) | [17431033](https://www.ncbi.nlm.nih.gov/pubmed/17431033) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Volotinen_2010.pdf` | Volotinen M et al., Effects of selective serotonin reuptake…, Basic & clinical pharmacolo… (2010) | pgx | 7 | [10.1111/j.1742-7843.2009.00487.x](https://doi.org/10.1111/j.1742-7843.2009.00487.x) | [19912165](https://www.ncbi.nlm.nih.gov/pubmed/19912165) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Elikowski_2022.pdf` | Elikowski W et al., Bradycardia during optical timolol ther…, Polski merkuriusz lekarski… (2022) | pgx | 5 | not captured | [35278294](https://www.ncbi.nlm.nih.gov/pubmed/35278294) | metadata signals extractable PGX data (CYP2D6) |
| `Epperla_2014.pdf` | Epperla N et al., Topical timolol for treatment of epista…, BMJ case reports (2014) | pgx | 5 | [10.1136/bcr-2013-203056](https://doi.org/10.1136/bcr-2013-203056) | [24518395](https://www.ncbi.nlm.nih.gov/pubmed/24518395) | metadata signals extractable PGX data (CYP2D6) |
| `He_2016.pdf` | He A et al., Genotyping for CYP2D6 in Patients with…, Pediatric dermatology (2016) | pgx | 5 | [10.1111/pde.12942](https://doi.org/10.1111/pde.12942) | [27882672](https://www.ncbi.nlm.nih.gov/pubmed/27882672) | metadata signals extractable PGX data (CYP2D6) |
| `Volotinen_2011.pdf` | Volotinen M et al., Metabolism of ophthalmic timolol: new a…, Basic & clinical pharmacolo… (2011) | pgx | 5 | [10.1111/j.1742-7843.2011.00694.x](https://doi.org/10.1111/j.1742-7843.2011.00694.x) | [21385322](https://www.ncbi.nlm.nih.gov/pubmed/21385322) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-07T01:29:24.348443+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belalcazar_2026 | irrelevant | 0 | 0 | The study is a clinical trial assessing intraocular pressure and tolerability, not a pharmacokinetic study, and reports no disposition parameters for timolol. |
| popPK | Denet_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transdermal transport mechanisms using diffusion cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Denet_2003_2 | irrelevant | 0 | 0 | The study is an in-vitro transdermal delivery experiment measuring flux through skin, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Elikowski_2022 | not_relevant | 3 | 5 | The paper is a case report describing a clinical outcome (bradycardia) and mentions a CYP2D6 variant as a potential cause for slowed metabolism, but it does not report measured pharmacokinetic parameters (e.g., AUC, Cmax) or quantitative pharmacodynamic effect sizes for the genotype. |
| popPK | Fayyaz_2021 | relevant | 8 | 2 | The study reports ocular pharmacokinetics for timolol in rabbits, but the evidence only provides relative AUC ratios (e.g., 1.4 times) rather than absolute quantitative disposition parameters like clearance or volume. |
| PGx | Fishbain_2004 | not_relevant | 2 | 0 | The paper is a structured review that lists timolol as a drug with potential clinical consequences from genetic polymorphisms but does not report specific quantitative PK/PD parameter changes or fitted effect sizes for timolol. |
| popPK | Floreani_2004 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of carteolol's intrinsic sympathomimetic activity, using timolol only as a reference antagonist, and reports no pharmacokinetic parameters for timolol. |
| PD | Floreani_2004 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of carteolol, not timolol; timolol is only used as a reference antagonist. |
| popPK | Friedrich_1996 | irrelevant | 2 | 0 | The study reports relative AUC ratios and absorption coefficients for ocular tissues in rabbits, but does not provide standard systemic PK parameters (CL, V, t1/2) or a population PK model for timolol. |
| popPK | Gómez_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of timolol's effect on Kir2.1 ion channels, not a pharmacokinetic study. |
| PD | Gómez_2014 | not_relevant | 4 | 2 | The paper reports a qualitative effect of timolol on Kir2.1 currents but does not provide numeric PD parameters (e.g., EC50) or a concentration-effect curve for timolol, unlike the data provided for propafenone. |
| PGx | He_2016 | not_relevant | 0 | 0 | The paper title suggests a study on CYP2D6 genotyping in patients using topical timolol, but the provided text is only the title and does not contain any data, results, or discussion regarding changes in PK or PD parameters. |
| popPK | Inatani_2023 | irrelevant | 0 | 0 | The study is a clinical trial evaluating intraocular pressure reduction and tolerability, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for timolol. |
| PGx | Kalenak_1996 | not_relevant | 0 | 0 | The paper describes a clinical case of excessive beta-blockade with timolol but does not report a pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| popPK | Kolli_2021 | irrelevant | 0 | 0 | The study reports hemodynamic effects (ocular perfusion pressure and blood pressure) rather than pharmacokinetic disposition parameters (CL, V, ka, etc.) for timolol. |
| PGx | Mann_2010 | not_relevant | 0 | 0 | The paper investigates the neuroprotective role of CYP2D6 against MPP+ toxicity using timolol only as a non-specific CYP2D6 inhibitor, rather than reporting a pharmacogenomic effect on timolol's own PK or PD parameters. |
| popPK | McCrea_1990 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PGx | Moshetova_2019 | not_relevant | 0 | 0 | The text is an introduction discussing the general need for personalized medicine and side effects of timolol, but it does not report specific gene variants or quantitative PK/PD data. |
| PGx | Mäenpää_2014 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (paroxetine inhibiting CYP2D6) rather than a pharmacogenomic effect based on a specific gene variant or genotype. |
| PGx | Novack_1996 | not_relevant | 0 | 0 | The paper describes a clinical case of excessive beta-blockade with timolol but does not report a pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| popPK | Sakanaka_2008 | relevant | 8 | 2 | The paper describes a compartmental PK/PD model for timolol in rabbits, but the specific numeric parameter values are referenced from previous reports (ref 7) or contained in figures/tables not fully provided in the text. |
| popPK | Sakanaka_2008_2 | relevant | 10 | 2 | The paper reports a quantitative 6-compartment ocular PK model for timolol in rabbits, but the specific numeric parameter values are located in Table 1 and Table 2, which are not included in the provided evidence. |
| PGx | Samer_2013 | not_relevant | 3 | 2 | The paper mentions an association between CYP2D6 PM phenotype and timolol toxicity but is a general review without specific quantitative PK/PD data or fitted effect sizes for timolol. |
| popPK | Sharif_2024 | irrelevant | 0 | 0 | no_text gate: only 183 chars of text extracted (&lt; 400) |
| PD | Sharif_2024 | not_relevant | 0 | 0 | The paper focuses on omidenepag isopropyl, not timolol, and does not report PD parameters for the target drug. |
| popPK | Sidorova_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anticancer activity and cell viability, not a pharmacokinetic study reporting disposition parameters for timolol. |
| PGx | Volotinen_2007 | not_relevant | 2 | 5 | The paper identifies CYP2D6 as the metabolic enzyme for timolol using in vitro microsomes and recombinant P450s, but it does not report a pharmacogenomic effect (genotype-based difference) on a PK or PD parameter in humans. |
| PGx | Volotinen_2010 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (SSRIs inhibiting CYP2D6) rather than the effect of a specific gene variant or genotype on timolol pharmacokinetics. |
| PGx | Volotinen_2011 | not_relevant | 5 | 0 | The text discusses the role of CYP2D6 in timolol metabolism and mentions that poor metabolizers may have higher systemic concentrations, but it does not report specific quantitative pharmacokinetic or pharmacodynamic data or fitted effect sizes from a study. |
| PGx | Witczyńska_2025 | not_relevant | 0 | 0 | The paper is a review of propranolol's structure and pharmacology, mentioning timolol only for structural comparison, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Yamamoto_2003 | not_relevant | 0 | 0 | The paper describes an in vitro assay method for estimating enzyme involvement in drug metabolism and does not report pharmacogenomic effects on PK/PD parameters in humans. |
| popPK | Yoshida_1991 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Yoshida_1991 | not_relevant | 0 | 0 | The paper studies the effect of growth hormone-releasing hormone on potassium currents in Xenopus oocytes and does not mention timolol or report any pharmacodynamic parameters for it. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | The provided text consists only of a URL and a list of figure captions without any specific data, results, or mention of timolol. |
| popPK | de_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor activity in bovine tracheal smooth muscle, not a pharmacokinetic study, and timolol is used only as a comparator/inverse agonist. |
| PD | de_2000 | not_relevant | 3 | 2 | The paper reports qualitative inverse agonism and rank order of efficacy for timolol in a tissue model, but does not provide numeric PD parameters (e.g., pA2, Ki, Emax) or a quantitative concentration-effect curve for timolol itself. |
| popPK | van_2009 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic receptor affinities (K_B) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for timolol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:29 UTC</sub>
