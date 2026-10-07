<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fludarabine&quot;}]"></div>

# fludarabine

- **generic name:** fludarabine
- **ATC codes:** `L01BB05`
- **DrugBank:** [DB01073](https://go.drugbank.com/drugs/DB01073) · **PubChem:** [CID 657237](https://pubchem.ncbi.nlm.nih.gov/compound/657237)
- **molar mass:** 285.235 g/mol (C10H12FN5O4) — DrugBank
- **groups:** approved, investigational

## About

Fludarabine is a purine analogue anticancer drug used to treat certain blood cancers such as chronic lymphocytic leukaemia. It is an approved medicine and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72478349](https://www.wikidata.org/wiki/Q72478349) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fludarabine | parent | 285.235 | C10H12FN5O4 | DrugBank | [657237](https://pubchem.ncbi.nlm.nih.gov/compound/657237) | Ivaturi_2017, Varela-González-Aller_2025 |
| f-ara-ATP | metabolite | 525.172 | C10H15FN5O13P3 | PubChem | [22842095](https://pubchem.ncbi.nlm.nih.gov/compound/22842095) | Ivaturi_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:54 | 4:13 | 1/2/0 | 0/0/1 | 0/0/1 | 236,506/13,364 | einfracz / qwen3.8-27b | 24 | 9/15 | 20/4 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Ivaturi_2017_reference](drugs/drug_fludarabine/Fludarabine_Ivaturi2017_reference.md) | model (no simulator) | 2-compartment general linear | 6 (+1 cov.) | Ivaturi V et al., Pharmacokinetics and Model-Based Dosing…, Biology of blood and marrow… (2017) | [10.1016/j.bbmt.2017.06.021](https://doi.org/10.1016/j.bbmt.2017.06.021) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Varela-González-Aller_2025_estimates_rse](drugs/drug_fludarabine/Fludarabine_VarelaGonzlezAller2025_reference.md) | — | 1-compartment (no model) | 1 | Varela-González-Aller J et al., Towards Personalized Lymphodepletion: A…, Pharmaceutics (2025) | [10.3390/pharmaceutics17121592](https://doi.org/10.3390/pharmaceutics17121592) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Varela-González-Aller_2025_shrinkage](drugs/drug_fludarabine/Fludarabine_VarelaGonzlezAller2025_reference.md) | — | 1-compartment (no model) | 1 | Varela-González-Aller J et al., Towards Personalized Lymphodepletion: A…, Pharmaceutics (2025) | [10.3390/pharmaceutics17121592](https://doi.org/10.3390/pharmaceutics17121592) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Yang_2021_HBV_DNA](drugs/drug_fludarabine/pd_Yang_2021_HBV_DNA.md) | HBV progeny DNA ← fludarabine · direct Emax (saturable) effect | model (no simulator) | Yang J et al., A new high-content screening assay of t…, JHEP reports : innovation i… (2021) | [10.1016/j.jhepr.2021.100296](https://doi.org/10.1016/j.jhepr.2021.100296) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **NT5E** | `Q22` · CL | metabolism | [Mohanan_2017](drugs/drug_fludarabine/pgx_Mohanan_2017_NT5E_Q22.md) | Mohanan E et al., Population pharmacokinetics of fludarab…, Bone marrow transplantation (2017) | [10.1038/bmt.2017.79](https://doi.org/10.1038/bmt.2017.79) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fludarabine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `SLC29A1` substrate | DrugBank actor |
| distribution | liver | `SLC29A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADA (inhibitor), DCK (target), DNA (incorporation into and destabilization), NT5E (metabolism), POLA1 (inhibitor), RRM1 (inhibitor), SLC28A3 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 108 matched, 54 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Knebel_1998.pdf` | Knebel W et al., The pharmacokinetics and pharmacodynami…, Pharmacotherapy (1998) | popPK | 10 | not captured | [9855320](https://pubmed.ncbi.nlm.nih.gov/9855320) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for fludarabine in humans directly in the text. |
| `McCune_2015.pdf` | McCune JS et al., Population pharmacokinetic/dynamic mode…, Cancer chemotherapy and pha… (2015) | popPK | 9 | [10.1007/s00280-014-2618-2](https://doi.org/10.1007/s00280-014-2618-2) | [25374408](https://pubmed.ncbi.nlm.nih.gov/25374408) | The paper describes a population PK/PD model for fludarabine, but the specific numeric PK parameter values (CL, V, etc.) are not listed in the provided evidence, only PK parameters for the PD model are mentioned. |
| `Takahashi_2022.pdf` | Takahashi T et al., Effects of cyclophosphamide related gen…, Cancer chemotherapy and pha… (2022) | pgx | 8 | [10.1007/s00280-021-04389-w](https://doi.org/10.1007/s00280-021-04389-w) | [35083501](https://www.ncbi.nlm.nih.gov/pubmed/35083501) | metadata signals extractable PGX data (ABCC4, PK/PD-context) |
| `Vukovic_2020.pdf` | Vukovic V et al., Association of SLC28A3 Gene Expression…, Pathology oncology research… (2020) | pgx | 8 | [10.1007/s12253-019-00613-4](https://doi.org/10.1007/s12253-019-00613-4) | [30778771](https://www.ncbi.nlm.nih.gov/pubmed/30778771) | metadata signals extractable PGX data (SLC28A3, PK/PD-context) |
| `Johnson_2013.pdf` | Johnson GG et al., CYP2B6*6 is an independent determinant…, Blood (2013) | pgx | 5 | [10.1182/blood-2013-07-516666](https://doi.org/10.1182/blood-2013-07-516666) | [24128861](https://www.ncbi.nlm.nih.gov/pubmed/24128861) | metadata signals extractable PGX data (CYP2B6*6) |

<sub>queue written 2026-10-07T16:51:31.895541+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ben_2021 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects of GSTA1 polymorphisms on the pharmacokinetics of busulfan, not fludarabine. |
| PGx | Ben_2021_2 | not_relevant | 0 | 0 | The paper is a narrative review focused on conditioning regimens, with tables and specific pharmacogenomic data dedicated to busulfan and treosulfan, while fludarabine is only mentioned qualitatively without reported genetic associations to its PK/PD. |
| popPK | Ben_2026 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and outcomes in a fludarabine-busulfan-thiotepa regimen, with no quantitative PK parameters reported for fludarabine. |
| PGx | Bhatla_2009 | not_relevant | 2 | 5 | The study focuses on the pharmacodynamics and toxicity of cytosine arabinoside (ara-C), not fludarabine; fludarabine is only mentioned as part of the combination regimen. |
| PGx | Bhattacharjee_2024 | not_relevant | 0 | 0 | The paper reports in-silico molecular docking and dynamics simulations of fludarabine binding to viral proteins, not the effect of human genetic variants on fludarabine pharmacokinetics or pharmacodynamics. |
| PGx | Boulad_2000 | not_relevant | 0 | 0 | The paper is a case report of stem cell transplantation in Fanconi anemia patients using fludarabine, focusing on engraftment and safety, but does not report any pharmacogenomic effects on fludarabine pharmacokinetics or pharmacodynamics. |
| popPK | Campàs_2006 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of Bcl-2 inhibitors, where fludarabine is used only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Campàs_2006 | not_relevant | 1 | 0 | The paper reports EC50 values for Bcl-2 inhibitors (HA14-1, etc.) but only qualitatively describes the additive effect of fludarabine combinations without providing numeric PD parameters or exposure-response data for fludarabine itself. |
| popPK | Chandra_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters exclusively for melphalan, with fludarabine mentioned only as a co-administered agent in the conditioning regimen. |
| PGx | Contreras_2020 | not_relevant | 0 | 0 | The paper describes clinical outcomes of a conditioning regimen using fludarabine but does not investigate or report any pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of the drug. |
| PGx | Damiani_2010 | not_relevant | 2 | 3 | The paper reports clinical outcomes (survival, remission) associated with protein overexpression (phenotype) rather than specific pharmacokinetic or pharmacodynamic parameter changes (e.g., Cmax, AUC, IC50) and does not link to specific gene variants. |
| PGx | Dumontet_1999 | not_relevant | 2 | 10 | The study investigates acquired cellular resistance mechanisms in a cell line rather than the impact of human genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | El-Serafi_2026 | not_relevant | 0 | 0 | The paper focuses on busulphan PK and a drug-drug interaction with omeprazole, and does not report pharmacogenomic effects on fludarabine. |
| popPK | Everett_2007 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on curcumin-induced apoptosis in B-CLL cells where fludarabine is only a comparator drug, and no fludarabine pharmacokinetic parameters are reported. |
| PD | Everett_2007 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, Hill slope) for curcumin, not fludarabine; fludarabine is only used as a comparator agent in combination studies without specific dose-response modeling for fludarabine itself. |
| popPK | Fabrizio_2022 | irrelevant | 2 | 2 | The paper reports clinical outcomes based on fludarabine AUC estimated using a previously published model, but it does not report the underlying quantitative PK parameters (CL, V, Q, ka) or define a new PK model. |
| PGx | Hao_2021 | not_relevant | 0 | 0 | The paper predicts busulfan drug-drug interactions and does not analyze a pharmacogenomic effect (gene variant) on a pharmacokinetic or pharmacodynamic parameter of fludarabine. |
| PGx | Iacobucci_2013 | not_relevant | 1 | 0 | The study reports genetic associations with overall clinical response and toxicity outcomes, not changes in specific pharmacokinetic or pharmacodynamic parameters of fludarabine. |
| PGx | Koike_2026 | not_relevant | 0 | 0 | The paper describes a conditioning regimen including fludarabine but reports pharmacokinetic data only for Treosulfan (comparing children vs. adults), not for fludarabine, and does not report pharmacogenomic effects. |
| popPK | Larráyoz_2006 | irrelevant | 0 | 0 | The study characterizes a transporter in vitro (Xenopus oocytes) and reports transport kinetics (affinity/current), not in vivo pharmacokinetic parameters (CL, V, T1/2) for fludarabine. |
| PD | Larráyoz_2006 | not_relevant | 0 | 0 | The paper reports transporter kinetics (K0.5, Imax) for fludarabine in oocytes, which is a pharmacokinetic/transport mechanism study, not a pharmacodynamic exposure-response or dose-response relationship for a biological effect. |
| PGx | Law_2012 | not_relevant | 0 | 0 | The study evaluates the safety and efficacy of a transplant conditioning regimen and does not investigate the effect of gene variants on fludarabine pharmacokinetics or pharmacodynamics. |
| popPK | Li_2012 | irrelevant | 2 | 0 | The study models the pharmacokinetics of rituximab, and while it notes that fludarabine disposition was unchanged when co-administered, it does not report quantitative pharmacokinetic parameters (CL, V, etc.) for fludarabine. |
| PGx | Lin_2010 | not_relevant | 0 | 0 | The paper reviews ofatumumab and mentions fludarabine only as a prior therapy for refractory CLL, reporting no pharmacogenomic effects on fludarabine PK/PD. |
| popPK | Lindemalm_2003 | irrelevant | 0 | 0 | The paper reports in vitro cytotoxicity (EC50) for clofarabine and cladribine, not pharmacokinetic parameters for fludarabine. |
| PGx | Lum_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes and disease-associated genetic subtypes of SCID, but does not report pharmacogenomic effects of gene variants on the pharmacokinetics or pharmacodynamics of fludarabine. |
| popPK | McCune_2015 | relevant | 9 | 0 | The paper describes a population PK/PD model for fludarabine, but the specific numeric PK parameter values (CL, V, etc.) are not listed in the provided evidence, only PK parameters for the PD model are mentioned. |
| popPK | McCune_2015_2 | irrelevant | 1 | 0 | The paper is a review of pediatric HSCT pharmacokinetics that explicitly states there are no comprehensive PK studies or numeric values for fludarabine in this population, citing only a BSA association in adults without providing parameters. |
| PGx | Ousia_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes (survival, GVHD) after conditioning but does not investigate genetic variants affecting fludarabine pharmacokinetics or pharmacodynamics. |
| PGx | Pai_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics and pharmacokinetics of treosulfan, not fludarabine. |
| PGx | Remberger_2017 | not_relevant | 0 | 0 | The paper describes general toxicity of a conditioning regimen and does not report any genetic variants or pharmacogenomic effects on fludarabine pharmacokinetics or pharmacodynamics. |
| PGx | Robak_2012 | not_relevant | 0 | 0 | The paper is a general review on the mechanism and pharmacokinetics of purine nucleoside analogs but does not report any specific gene variant/genotype effects on PK or PD parameters. |
| PGx | Robinson_2013 | not_relevant | 1 | 1 | The paper reports that RB1 status did not affect sensitivity to fludarabine (no effect reported). |
| popPK | Schwemmlein_2007 | irrelevant | 0 | 0 | The study focuses on the antileukemic efficacy of a CD19-targeted immunotoxin in cell lines and mice, with no pharmacokinetic data for fludarabine reported. |
| PD | Schwemmlein_2007 | not_relevant | 0 | 0 | The paper reports PD for a CD19-specific immunotoxin, not fludarabine; fludarabine is only mentioned as a comparator for patient responsiveness. |
| PGx | Shimoni_2017 | not_relevant | 0 | 0 | The paper reports the effect of HLA-C ligand status on transplant outcomes (relapse, survival) rather than changes in fludarabine's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Sweiss_2025 | relevant | 4 | 3 | The study uses a previously published population PK model to estimate AUC and Cmax for fludarabine in humans, reporting median exposure values but not the underlying model parameters (CL, V) or derivation of new PK parameters. |
| PGx | Takahashi_2022 | not_relevant | 1 | 0 | The paper investigates pharmacogenomic effects of cyclophosphamide, not fludarabine. |
| PGx | Tiribelli_2011 | not_relevant | 1 | 5 | The paper analyzes ABCG2 and FLT3-ITD as prognostic factors for relapse and survival, not as modulators of fludarabine pharmacokinetics or pharmacodynamics. |
| PGx | Wade_2011 | not_relevant | 2 | 0 | The study reports associations between SNPs and overall progression-free survival (clinical outcome), not specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, tumor burden kinetics) of fludarabine. |
| PGx | Yamazaki_2016 | not_relevant | 0 | 0 | The text discusses fludarabine as a standard conditioning regimen for bone marrow transplantation in aplastic anemia but does not report any pharmacogenomic effects or changes in PK/PD parameters. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The study is an in vitro antiviral screening where fludarabine is used as a probe/drug to inhibit HBV, reporting antiviral EC50 values rather than pharmacokinetic parameters. |
| PGx | Yoon_2023 | not_relevant | 0 | 0 | The paper describes a Phase I clinical trial for NK cell therapy and reports that fludarabine was used only as part of the lymphodepletion regimen; it does not report any pharmacogenomic effects of gene variants on fludarabine's PK or PD parameters. |
| PGx | de_2008 | not_relevant | 2 | 0 | The study reports in vitro cellular resistance and transport data for ABCG2 overexpression but does not report pharmacogenomic effects based on human genetic variants/polymorphisms on clinical PK or PD parameters for fludarabine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:51 UTC</sub>
