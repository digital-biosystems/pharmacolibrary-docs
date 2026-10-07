<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;mivacurium chloride&quot;}]"></div>

# mivacurium chloride

- **generic name:** mivacurium chloride
- **ATC codes:** `M03AC10`
- **DrugBank:** [DB01226](https://go.drugbank.com/drugs/DB01226) · **PubChem:** [CID 5281042](https://pubchem.ncbi.nlm.nih.gov/compound/5281042)
- **molar mass:** 1029.2608 g/mol (C58H80N2O14) — DrugBank
- **groups:** approved, withdrawn

## About

Mivacurium chloride is a short-acting non-depolarising neuromuscular blocking agent used to relax muscles during surgery and anaesthesia. It has been withdrawn from the market and is no longer in general clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413877](https://www.wikidata.org/wiki/Q413877) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mivacurium_chloride | metabolite | 1029.26 | C58H80N2O14 | DrugBank | [5281042](https://pubchem.ncbi.nlm.nih.gov/compound/5281042) | Head-Rapson_1995 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:12 | 4:07 | 0/2/1 | 5/0/0 | 1/0/3 | 79,444/5,727 | einfracz / qwen3.8-27b | 6 | 4/2 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Head-Rapson_1995_reference](drugs/drug_mivacurium_chloride/MivacuriumChloride_HeadRapson1995_reference.md) | — | 1-compartment (no model) | 1 | Head-Rapson AG et al., Pharmacokinetics and pharmacodynamics o…, British journal of anaesthe… (1995) | [10.1093/bja/75.1.31](https://doi.org/10.1093/bja/75.1.31) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Head-Rapson_1994_reference](drugs/drug_mivacurium_chloride/MivacuriumChloride_HeadRapson1994_reference.md) | — | 1-compartment (no model) | 0 | Head-Rapson AG et al., Pharmacokinetics of the three isomers o…, British journal of anaesthe… (1994) | [10.1093/bja/73.5.613](https://doi.org/10.1093/bja/73.5.613) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Trocóniz_1997_reference](drugs/drug_mivacurium_chloride/MivacuriumChloride_Trocniz1997_reference.md) | — | 1-compartment (no model) | 0 | Trocóniz IF et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmaceutical s… (1997) | [10.1021/js960153d](https://doi.org/10.1021/js960153d) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Markakis_1996_TD](drugs/drug_mivacurium_chloride/pd_Markakis_1996_TD.md) | twitch depression ← mivacurium · direct sigmoid Emax (Hill) effect | — | Markakis DA et al., Does age or pseudocholinesterase activi…, Anesthesia and analgesia (1996) | [10.1097/00000539-199601000-00008](https://doi.org/10.1097/00000539-199601000-00008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Markakis_1998_twitch](drugs/drug_mivacurium_chloride/pd_Markakis_1998_twitch.md) | adductor pollicis twitch tension in response to train-of-four stimuli ← mivacurium · direct Emax (saturable) effect | — | Markakis DA et al., The pharmacokinetics and steady state p…, Anesthesiology (1998) | [10.1097/00000542-199804000-00018](https://doi.org/10.1097/00000542-199804000-00018) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ostergaard_2000_NM_block](drugs/drug_mivacurium_chloride/pd_Ostergaard_2000_NM_block.md) | neuromuscular block ← mivacurium · delayed effect through an effect compartment | — | Ostergaard D et al., The influence of drug-induced low plasm…, Anesthesiology (2000) | [10.1097/00000542-200006000-00014](https://doi.org/10.1097/00000542-200006000-00014) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Schiere_2004_NMB](drugs/drug_mivacurium_chloride/pd_Schiere_2004_NMB.md) | Neuromuscular block ← mivacurium · direct Emax (saturable) effect | — | Schiere S et al., An interstitial compartment is necessar…, European journal of anaesth… (2004) | [10.1017/s0265021504000237](https://doi.org/10.1017/s0265021504000237) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Trocóniz_1997_E](drugs/drug_mivacurium_chloride/pd_Troc_niz_1997_E.md) | % depression of initial twitch tension ← mivacurium · direct sigmoid Emax (Hill) effect | — | Trocóniz IF et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmaceutical s… (1997) | [10.1021/js960153d](https://doi.org/10.1021/js960153d) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> | **G6PD** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Vale_2003](drugs/drug_mivacurium_chloride/pgx_Vale_2003_G6PD_safety.md) | Vale NB et al., [Could the understanding of racial diff…, Revista brasileira de anest… (2003) | — |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2A6** | `Q22` · CL | metabolism | [Pimenta_2005](drugs/drug_mivacurium_chloride/pgx_Pimenta_2005_CYP2A6_Q22.md) | Pimenta KB, [Prolonged neuromuscular block after mi…, Revista brasileira de anest… (2005) | [10.1590/s0034-70942005000500011](https://doi.org/10.1590/s0034-70942005000500011) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q320` · Emax | metabolism | [Vale_2003](drugs/drug_mivacurium_chloride/pgx_Vale_2003_CYP2D6_Q320.md) | Vale NB et al., [Could the understanding of racial diff…, Revista brasileira de anest… (2003) | — |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **NAT2** | `Q22` · CL | metabolism | [Vale_2003](drugs/drug_mivacurium_chloride/pgx_Vale_2003_NAT2_Q22.md) | Vale NB et al., [Could the understanding of racial diff…, Revista brasileira de anest… (2003) | — |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mivacurium_chloride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` substrate/unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` metabolism | paper PGx gene |
| metabolism | liver | `BCHE` substrate/unknown, `CYP2A6` metabolism, `CYP2D6` metabolism, `NAT2` metabolism | DrugBank actor |
| metabolism | small intestine | `NAT2` metabolism | paper PGx gene |

<sub>Actors without a tissue in the table: CHRM2 (partial agonist), CHRM2 (target), CHRM3 (target), CHRNA2 (target), G6PD (safety_allele).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 44 matched, 41 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Head-Rapson_1994.pdf` | Head-Rapson AG et al., Pharmacokinetics of the three isomers o…, British journal of anaesthe… (1994) | popPK | 10 | [10.1093/bja/73.5.613](https://doi.org/10.1093/bja/73.5.613) | [7826789](https://pubmed.ncbi.nlm.nih.gov/7826789) | The abstract provides specific quantitative pharmacokinetic values (clearance for three isomers) for mivacurium in humans. |
| `Head-Rapson_1995.pdf` | Head-Rapson AG et al., Pharmacokinetics and pharmacodynamics o…, British journal of anaesthe… (1995) | popPK | 10 | [10.1093/bja/75.1.31](https://doi.org/10.1093/bja/75.1.31) | [7669465](https://pubmed.ncbi.nlm.nih.gov/7669465) | The abstract provides specific clearance values for the cis-cis isomer of mivacurium in three patient groups, but other parameters (Vd, half-life, other isomers) are only described qualitatively or implied to be in the full text. |
| `Laurin_2001.pdf` | Laurin J et al., Peripheral link model as an alternative…, Journal of pharmacokinetics… (2001) | popPK | 10 | [10.1023/a:1011513618081](https://doi.org/10.1023/a:1011513618081) | [11253615](https://pubmed.ncbi.nlm.nih.gov/11253615) | The study models the pharmacokinetics and pharmacodynamics of mivacurium, but no numeric parameter values are present in the provided evidence. |
| `Lugo_1998.pdf` | Lugo SI et al., Pharmacokinetics and pharmacodynamics o…, Biopharmaceutics & drug dis… (1998) | popPK | 10 | [10.1002/(sici)1099-081x(1998110)19:8&lt;485::aid-bdd131&gt;3.0.co;2-g](https://doi.org/10.1002/(sici)1099-081x(1998110)19:8<485::aid-bdd131>3.0.co;2-g) | [9840210](https://pubmed.ncbi.nlm.nih.gov/9840210) | The study provides quantitative PK parameters (Cl, Vdss) for mivacurium stereoisomers measured in beagle dogs. |
| `Trocóniz_1997.pdf` | Trocóniz IF et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmaceutical s… (1997) | popPK | 10 | [10.1021/js960153d](https://doi.org/10.1021/js960153d) | [9040105](https://pubmed.ncbi.nlm.nih.gov/9040105) | The study reports quantitative pharmacokinetic parameters (Vss and CL) for mivacurium in rats based on a two-compartment model. |
| `Ostergaard_2000.pdf` | Ostergaard D et al., The influence of drug-induced low plasm…, Anesthesiology (2000) | popPK | 9 | [10.1097/00000542-200006000-00014](https://doi.org/10.1097/00000542-200006000-00014) | [10839906](https://pubmed.ncbi.nlm.nih.gov/10839906) | The study is a PK/PD trial in humans reporting that clearance and half-life of mivacurium isomers were significantly altered, but the abstract only provides qualitative descriptions ("significantly lower", "prolonged") and lacks specific numeric parameter values (CL, V, t1/2 in minutes) for the drug. |
| `Laurin_1999.pdf` | Laurin J et al., Assuming peripheral elimination: its im…, Journal of pharmacokinetics… (1999) | popPK | 8 | [10.1023/a:1023286329945](https://doi.org/10.1023/a:1023286329945) | [10948695](https://pubmed.ncbi.nlm.nih.gov/10948695) | The paper is a simulation study using previously published PK data for mivacurium to evaluate model assumptions, but specific numeric parameter values are not provided in the text evidence. |
| `Markakis_1998.pdf` | Markakis DA et al., The pharmacokinetics and steady state p…, Anesthesiology (1998) | popPK | 8 | [10.1097/00000542-199804000-00018](https://doi.org/10.1097/00000542-199804000-00018) | [9579507](https://pubmed.ncbi.nlm.nih.gov/9579507) | The study is a PK/PD analysis of mivacurium in humans reporting clearance values, but specific numeric parameter values are not listed in the provided abstract text. |
| `Schiere_2004.pdf` | Schiere S et al., An interstitial compartment is necessar…, European journal of anaesth… (2004) | popPK | 8 | [10.1017/s0265021504000237](https://doi.org/10.1017/s0265021504000237) | [15717705](https://pubmed.ncbi.nlm.nih.gov/15717705) | Reports quantitative PK-PD parameters (k1p, ke0, EC50) for mivacurium in humans, but lacks explicit clearance and volume of distribution values. |
| `Roy_2004.pdf` | Roy JJ et al., Physicochemical properties of neuromusc…, British journal of anaesthe… (2004) | pd | 5 | [10.1093/bja/aeh181](https://doi.org/10.1093/bja/aeh181) | [15169739](https://www.ncbi.nlm.nih.gov/pubmed/15169739) | metadata signals extractable PD data (EC50) |
| `Rimaniol_1996.pdf` | Rimaniol JM et al., A comparison of the neuromuscular block…, Anesthesia and analgesia (1996) | pd | 4 | [10.1097/00000539-199610000-00027](https://doi.org/10.1097/00000539-199610000-00027) | [8831326](https://www.ncbi.nlm.nih.gov/pubmed/8831326) | metadata signals extractable PD data (EMAX) |

<sub>queue written 2026-10-07T02:11:53.450929+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Borden_2021 | not_relevant | 2 | 0 | The paper is a systematic review and guideline development study that identifies mivacurium/BCHE as an actionable drug-gene pair but does not report primary pharmacogenomic effect sizes or specific PK/PD parameter changes. |
| PGx | Ceppa_2002 | not_relevant | 2 | 1 | The paper describes a diagnostic PCR method for identifying a butyrylcholinesterase variant but does not report quantitative pharmacokinetic or pharmacodynamic parameter changes for mivacurium. |
| PGx | Dell_1996 | not_relevant | 8 | 0 | The text describes the clinical phenomenon of prolonged paralysis due to cholinesterase deficiency but does not report specific quantitative PK/PD parameters or fitted effect sizes for mivacurium. |
| PGx | Dimov_2012 | not_relevant | 1 | 0 | The paper investigates the effect of BChE variants on soman toxicity and enzyme reactivation, mentioning mivacurium only as a background example of the enzyme's function without reporting any PK/PD parameters or genetic effects for mivacurium. |
| popPK | Doufas_2009 | irrelevant | 0 | 0 | The study investigates the effect of mivacurium on anesthesia-induced immobility and cortical activation (BIS) rather than its pharmacokinetic disposition parameters. |
| PGx | Gardiner_2006 | not_relevant | 8 | 0 | The paper is a narrative review that mentions mivacurium and butyrylcholinesterase as examples of drugs with an evidence base for pharmacogenetics, but it does not provide specific quantitative data, tables, or fitted effect sizes for mivacurium PK/PD parameters in the text provided. |
| PGx | Gätke_2002 | not_relevant | 3 | 0 | The paper describes a genotyping method for BChE variants and does not report data on how these variants alter the pharmacokinetic or pharmacodynamic parameters of mivacurium in the subjects tested. |
| popPK | Hart_1995 | irrelevant | 2 | 0 | Study reports steady-state infusion rates and correlation coefficients for neuromuscular block, but lacks compartmental PK parameters (CL, V, t1/2) for mivacurium. |
| popPK | Kopman_2000 | irrelevant | 0 | 0 | The study focuses on the dose-response and pharmacodynamics of rapacurium, with mivacurium mentioned only as a comparator for recovery rates, and no mivacurium PK parameters are reported. |
| PGx | Krasowski_1997 | not_relevant | 2 | 0 | The paper is a review of natural cholinesterase inhibitors (SGAs) and their evolutionary impact on BuChE genetics, not a study reporting specific pharmacogenomic effects of gene variants on mivacurium PK/PD parameters. |
| popPK | Laurin_1999 | relevant | 8 | 2 | The paper is a simulation study using previously published PK data for mivacurium to evaluate model assumptions, but specific numeric parameter values are not provided in the text evidence. |
| popPK | Laurin_2001 | relevant | 10 | 0 | The study models the pharmacokinetics and pharmacodynamics of mivacurium, but no numeric parameter values are present in the provided evidence. |
| PGx | Lejus_1998 | not_relevant | 2 | 0 | The paper is a general review of butyrylcholinesterase that mentions mivacurium only in the context of clinical management and general principles, without reporting specific quantitative pharmacogenomic effect sizes or fitted parameters for the drug. |
| PGx | Levano_2008 | not_relevant | 2 | 0 | The paper validates a genotyping method (dHPLC) for BCHE variants but does not report any pharmacokinetic or pharmacodynamic data for mivacurium. |
| popPK | Markakis_1996 | relevant | 4 | 6 | The study reports quantitative dose-response parameters (IR50/IR90) derived from a pharmacodynamic/pharmacokinetic model for mivacurium, but does not report standard compartmental PK parameters like clearance or volume of distribution. |
| popPK | Markakis_1998 | relevant | 8 | 4 | The study is a PK/PD analysis of mivacurium in humans reporting clearance values, but specific numeric parameter values are not listed in the provided abstract text. |
| PGx | Miller_1995 | not_relevant | 2 | 1 | The paper discusses plasma cholinesterase genotypes (BuSS/BuSA) in the context of reversal agent requirements, but it does not present data on how these genotypes specifically alter mivacurium PK (e.g., clearance) or PD (e.g., potency) parameters, focusing instead on the effect of edrophonium doses on recovery time. |
| popPK | Ostergaard_2000 | relevant | 9 | 1 | The study is a PK/PD trial in humans reporting that clearance and half-life of mivacurium isomers were significantly altered, but the abstract only provides qualitative descriptions ("significantly lower", "prolonged") and lacks specific numeric parameter values (CL, V, t1/2 in minutes) for the drug. |
| popPK | Rimaniol_1996 | irrelevant | 0 | 0 | no_text gate: only 160 chars of text extracted (&lt; 400) |
| popPK | Roy_2004 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| popPK | Schiere_2004 | relevant | 8 | 4 | Reports quantitative PK-PD parameters (k1p, ke0, EC50) for mivacurium in humans, but lacks explicit clearance and volume of distribution values. |
| PGx | Snak_2026 | not_relevant | 1 | 2 | The paper is a systematic review of genotype-phenotype correlations for enzyme activity (dibucaine numbers) rather than reporting specific pharmacokinetic or pharmacodynamic parameters of mivacurium. |
| PGx | Zeng_2024 | not_relevant | 3 | 3 | The paper reports a pharmacogenomic association between BCHE variants and mivacurium metabolism, but it is a case report of a specific patient who did not receive mivacurium, and it lacks fitted effect sizes or population-level quantitative PK/PD parameters for the drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:11 UTC</sub>
