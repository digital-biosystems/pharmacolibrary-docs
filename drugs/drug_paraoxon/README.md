<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;paraoxon&quot;}]"></div>

# paraoxon

- **generic name:** paraoxon
- **ATC codes:** `S01EB10`
- **DrugBank:** [DB13495](https://go.drugbank.com/drugs/DB13495) · **PubChem:** not captured
- **molar mass:** 275.195 g/mol (C10H14NO6P) — DrugBank
- **groups:** experimental

## About

Paraoxon is an acetylcholinesterase inhibitor classified as a parasympathomimetic antiglaucoma and miotic eye preparation. It is regarded as an experimental compound and is not an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416108](https://www.wikidata.org/wiki/Q416108) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| paraoxon | parent | 275.195 | C10H14NO6P | DrugBank | — | Abbas_1997 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:20 | 10:44 | 0/1/0 | 2/0/0 | 0/0/1 | 316,887/13,438 | einfracz / qwen3.8-27b | 9 | 1/7 | 8/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Abbas_1997_reference](drugs/drug_paraoxon/Paraoxon_Abbas1997_reference.md) | — | general linear (no model) | 3 | Abbas R et al., A physiologically based pharmacokinetic…, Toxicology and applied phar… (1997) | [10.1006/taap.1997.8168](https://doi.org/10.1006/taap.1997.8168) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Abbas_1997_AChE](drugs/drug_paraoxon/pd_Abbas_1997_AChE.md) | AChE activity ← paraoxon · indirect response — drug inhibits the production of AChE activity | — | Abbas R et al., A physiologically based pharmacokinetic…, Toxicology and applied phar… (1997) | [10.1006/taap.1997.8168](https://doi.org/10.1006/taap.1997.8168) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Abdallah_1992_cAMP](drugs/drug_paraoxon/pd_Abdallah_1992_cAMP.md) | cAMP formation ← paraoxon · direct Emax (saturable) effect | — | Abdallah EA et al., Differential effects of paraoxon on the…, Journal of biochemical toxi… (1992) | [10.1002/jbt.2570070210](https://doi.org/10.1002/jbt.2570070210) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **PON1** | `Q22` · CL | metabolism | [Diepgen_1986](drugs/drug_paraoxon/pgx_Diepgen_1986_PON1_Q22.md) | Diepgen TL et al., Interethnic differences in the detoxifi…, Archives of toxicology. Sup… (1986) | [10.1007/978-3-642-71248-7_18](https://doi.org/10.1007/978-3-642-71248-7_18) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=paraoxon) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CA1 (inhibitor), CA2 (inhibitor), CNR1 (inhibitor), PON1 (metabolism).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 240 matched, 118 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_17 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abbas_1997.pdf` | Abbas R et al., A physiologically based pharmacokinetic…, Toxicology and applied phar… (1997) | popPK | 10 | [10.1006/taap.1997.8168](https://doi.org/10.1006/taap.1997.8168) | [9221837](https://pubmed.ncbi.nlm.nih.gov/9221837) | The paper provides a quantitative PBPK model with specific numeric values for partition coefficients, clearances (uptake and depuration), and enzyme turnover rates for paraoxon in trout. |
| `De_1987.pdf` | De Schryver E et al., Toxicokinetics of methyl paraoxon in th…, Archives of toxicology (1987) | popPK | 8 | [10.1007/BF00295082](https://doi.org/10.1007/BF00295082) | [3579595](https://pubmed.ncbi.nlm.nih.gov/3579595) | The study provides quantitative PK parameters (CL, Vd, t1/2, ka implied by Cmax time) for methyl paraoxon, the active metabolite of paraoxon, in dogs. |
| `Blencowe_1995.pdf` | Blencowe C et al., Enhanced association of platelet-activa…, The Journal of biological c… (1995) | pd | 5 | [10.1074/jbc.270.52.31151](https://doi.org/10.1074/jbc.270.52.31151) | [8537378](https://www.ncbi.nlm.nih.gov/pubmed/8537378) | metadata signals extractable PD data (IC50) |
| `Gonzalvo_1997.pdf` | Gonzalvo MC et al., Inhibition of paraoxonase activity in h…, Chemico-biological interact… (1997) | pd | 5 | [10.1016/s0009-2797(97)00046-x](https://doi.org/10.1016/s0009-2797(97)00046-x) | [9291995](https://www.ncbi.nlm.nih.gov/pubmed/9291995) | metadata signals extractable PD data (IC50) |
| `Jiang_2015.pdf` | Jiang F et al., Identification of polymorphisms in Cyrt…, Pesticide biochemistry and… (2015) | pd | 5 | [10.1016/j.pestbp.2014.10.010](https://doi.org/10.1016/j.pestbp.2014.10.010) | [25619913](https://www.ncbi.nlm.nih.gov/pubmed/25619913) | metadata signals extractable PD data (IC50) |
| `Küster_2006.pdf` | Küster E et al., Comparison of cholin- and carboxylester…, Biomarkers : biochemical in… (2006) | pd | 5 | [10.1080/13547500600742136](https://doi.org/10.1080/13547500600742136) | [16908441](https://www.ncbi.nlm.nih.gov/pubmed/16908441) | metadata signals extractable PD data (IC50) |
| `Petroianu_2005.pdf` | Petroianu GA et al., Weak inhibitors protect cholinesterases…, Journal of applied toxicolo… (2005) | pd | 5 | [10.1002/jat.1036](https://doi.org/10.1002/jat.1036) | [15669026](https://www.ncbi.nlm.nih.gov/pubmed/15669026) | metadata signals extractable PD data (IC50) |
| `Camara_1997.pdf` | Camara AL et al., Methamidophos: an anticholinesterase wi…, Neurotoxicology (1997) | pd | 4 | not captured | [9291508](https://www.ncbi.nlm.nih.gov/pubmed/9291508) | metadata signals extractable PD data (IC50) |
| `DAgostino_2000.pdf` | D'Agostino G et al., Prejunctional muscarinic inhibitory con…, British journal of pharmaco… (2000) | pd | 4 | [10.1038/sj.bjp.0703080](https://doi.org/10.1038/sj.bjp.0703080) | [10711347](https://www.ncbi.nlm.nih.gov/pubmed/10711347) | metadata signals extractable PD data (EC50) |
| `Parker_2000.pdf` | Parker ML et al., Differential toxicities of organophosph…, Archives of environmental c… (2000) | pd | 4 | [10.1007/s002440010100](https://doi.org/10.1007/s002440010100) | [10871426](https://www.ncbi.nlm.nih.gov/pubmed/10871426) | metadata signals extractable PD data (IC50) |
| `Zoh_2005.pdf` | Zoh KD et al., Degradation of parathion and the reduct…, Water science and technolog… (2005) | pd | 4 | not captured | [16312950](https://www.ncbi.nlm.nih.gov/pubmed/16312950) | metadata signals extractable PD data (EC50) |
| `Zoh_2006.pdf` | Zoh KD et al., Parathion degradation and toxicity redu…, Water science and technolog… (2006) | pd | 4 | [10.2166/wst.2006.069](https://doi.org/10.2166/wst.2006.069) | [16605011](https://www.ncbi.nlm.nih.gov/pubmed/16605011) | metadata signals extractable PD data (EC50) |
| `Gentry_2002.pdf` | Gentry PR et al., An approach for the quantitative consid…, Toxicological sciences : an… (2002) | pgx | 8 | [10.1093/toxsci/70.1.120](https://doi.org/10.1093/toxsci/70.1.120) | [12388841](https://www.ncbi.nlm.nih.gov/pubmed/12388841) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Hein_1993.pdf` | Hein DW et al., Metabolic activation and deactivation o…, Carcinogenesis (1993) | pgx | 8 | [10.1093/carcin/14.8.1633](https://doi.org/10.1093/carcin/14.8.1633) | [8353847](https://www.ncbi.nlm.nih.gov/pubmed/8353847) | metadata signals extractable PGX data (NAT2, PK/PD-context) |
| `Hoffler_2003.pdf` | Hoffler U et al., Cytochrome P450 2E1 (CYP2E1) is the pri…, The Journal of pharmacology… (2003) | pgx | 8 | [10.1124/jpet.102.049072](https://doi.org/10.1124/jpet.102.049072) | [12704224](https://www.ncbi.nlm.nih.gov/pubmed/12704224) | metadata signals extractable PGX data (CYP2E1, PK/PD-context) |
| `Foxenberg_2007.pdf` | Foxenberg RJ et al., Human hepatic cytochrome p450-specific…, Drug metabolism and disposi… (2007) | pgx | 7 | [10.1124/dmd.106.012427](https://doi.org/10.1124/dmd.106.012427) | [17079358](https://www.ncbi.nlm.nih.gov/pubmed/17079358) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Mutch_2003.pdf` | Mutch E et al., Do multiple cytochrome P450 isoforms co…, Archives of toxicology (2003) | pgx | 5 | [10.1007/s00204-003-0452-0](https://doi.org/10.1007/s00204-003-0452-0) | [12669189](https://www.ncbi.nlm.nih.gov/pubmed/12669189) | metadata signals extractable PGX data (CYP2C8) |

<sub>queue written 2026-10-07T19:17:56.355825+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdallah_1992 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of receptor binding and second messenger effects in cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Blasiak_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (Na+ K+-ATPase) and reports only inhibition constants (Ki) and Hill coefficients, not pharmacokinetic disposition parameters. |
| PGx | Butler_1997 | not_relevant | 0 | 0 | The paper investigates the in vitro biotransformation of the prodrug parathion to paraoxon in human liver microsomes but does not report any pharmacogenomic effects of specific gene variants on PK or PD parameters of paraoxon. |
| popPK | Cirincione_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of exenatide; paraoxon is mentioned only as a different drug in a citation regarding pralidoxime toxicity. |
| PGx | Cole_2010 | not_relevant | 2 | 2 | The paper examines how genotypes affect the toxicity of a mixture (paraoxon potentiating malaoxon) via enzyme inhibition, rather than reporting a direct pharmacokinetic or pharmacodynamic parameter change for paraoxon itself. |
| PGx | Coombes_2014 | not_relevant | 2 | 10 | The paper studies the metabolism of chlorpyrifos-oxon, not paraoxon; while it mentions paraoxon only for phenotyping, the primary result shows no pharmacogenomic effect on the substrate in question. |
| PGx | Costa_1999 | not_relevant | 5 | 0 | The text describes the role of PON1 in paraoxon detoxication qualitatively (Arg192 hydrolyzes rapidly, Gln192 slowly) but does not report quantitative PK/PD parameter changes (e.g., clearance, AChE inhibition rates) from specific experiments in the provided excerpt. |
| PGx | Costa_2013 | not_relevant | 0 | 0 | The paper discusses the genetic determinants of toxicity (phenotype) rather than specific PK/PD parameters of the drug (paraoxon), and it is a narrative review without quantitative data tables. |
| popPK | DAgostino_2000 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PGx | Darney_2020 | not_relevant | 2 | 8 | The paper analyzes genetic variation in PON1 activity using paraoxon as a diagnostic probe substrate, rather than the pharmacokinetics of paraoxon itself (e.g., clearance or half-life), and it reports on toxicokinetic uncertainty factors rather than fitted individual effect sizes. |
| popPK | Delaunois_1992 | irrelevant | 0 | 0 | The study investigates pulmonary endothelium permeability and edema induction (mechanistic/physiological) rather than pharmacokinetic disposition parameters. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | The paper concerns polybrominated diphenyl ethers (PBDEs), not the drug paraoxon. |
| PGx | Ellison_2012 | not_relevant | 2 | 8 | The study investigates a pesticide exposure and reports associations with enzymatic activity, but does not report a fitted pharmacokinetic or pharmacodynamic effect size for the drug metabolite (paraoxon). |
| popPK | Eterović_2011 | irrelevant | 0 | 0 | The study investigates neuroprotection in acute hippocampal slices using pharmacodynamic measures (EC50) and AChE activity, without reporting pharmacokinetic disposition parameters. |
| PGx | Ferré_2002 | not_relevant | 2 | 8 | The paper investigates paraxonase activity as a diagnostic marker for liver disease and tests for genetic associations, but explicitly concludes that the observed activity levels are related to hepatic dysfunction, not genotypic differences. |
| PGx | Foxenberg_2007 | not_relevant | 5 | 9 | The paper reports metabolic kinetic parameters for wild-type CYP enzymes but does not analyze the impact of specific genetic variants (polymorphisms) on the PK/PD of paraoxon. |
| PGx | Furlong_2006 | not_relevant | 3 | 2 | The paper discusses general organophosphate sensitivity and variability in hydrolysis rates for chlorpyrifos and diazoxon, but does not report specific quantitative PK/PD parameter changes for paraoxon itself. |
| PGx | Furlong_2016 | not_relevant | 1 | 1 | The paper reviews the biological functions of the Paraoxonase enzymes (PONs) rather than reporting a pharmacogenomic effect of a specific genotype on the PK/PD of a drug. |
| PGx | Gallagher_2016 | not_relevant | 0 | 0 | The paper investigates the in vitro transport properties of pralidoxime across cell monolayers and its effect on acetylcholinesterase reactivation, but it does not report any pharmacogenomic effects (gene variants affecting PK/PD) for paraoxon or any other drug. |
| PGx | Gałczyński_2018 | not_relevant | 2 | 5 | The paper studies paraoxon as a substrate for the endogenous enzyme paraoxonase 1 in cancer patients, not as a drug for which the paper reports pharmacokinetic or pharmacodynamic parameters affected by a genotype. |
| PGx | Gentry_2002 | not_relevant | 0 | 0 | The paper focuses on risk assessment methodologies using warfarin and parathion as examples, but does not report pharmacogenomic effects on PK/PD parameters for paraoxon. |
| popPK | Guilhermino_1996 | irrelevant | 0 | 0 | The paper is an ecotoxicology study measuring acetylcholinesterase inhibition in Daphnia magna, not a pharmacokinetic study of paraoxon disposition parameters. |
| PGx | Hein_1986 | not_relevant | 1 | 0 | The paper uses paraoxon as an enzyme inhibitor to distinguish isozymes but does not report pharmacokinetic or pharmacodynamic parameters of paraoxon itself. |
| PGx | Hein_1993 | not_relevant | 0 | 0 | The paper focuses on the metabolic activation and deactivation of arylamine carcinogens by NAT1 and NAT2, not the pharmacokinetics or pharmacodynamics of paraoxon. |
| PGx | Hoffler_2003 | not_relevant | 0 | 0 | The paper reports on the pharmacokinetics of urethane in CYP2E1-null mice, where paraoxon is used only as a negative control inhibitor, not the subject of a pharmacogenomic effect analysis. |
| popPK | Houzé_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and toxicodynamics of the antidote pralidoxime in the context of paraoxon-induced toxicity, rather than the disposition parameters of paraoxon itself. |
| popPK | Hrvat_2020 | irrelevant | 0 | 0 | The paper is a review on the treatment of nerve agent poisoning and only mentions paraoxon as a context for animal testing or enzyme inhibition, without providing any pharmacokinetic parameters for paraoxon. |
| PGx | Jan_2016 | not_relevant | 2 | 0 | The paper reports the effect of a chemical inhibitor (menadione) on parathion metabolism, but does not report a pharmacogenomic effect (gene variant/genotype) on a PK/PD parameter for paraoxon. |
| PGx | Jansen_2009 | not_relevant | 2 | 5 | The paper reports on toxicity potentiation (PD) of malaoxon due to carboxylesterase inhibition, and explicitly states that PON1 is not a significant metabolizer of paraoxon; it does not measure PK parameters of paraoxon itself. |
| popPK | Küster_2006 | irrelevant | 0 | 0 | The study is an in vivo toxicity/bioassay in zebrafish measuring enzyme inhibition and visible effects, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka, etc.) for paraoxon. |
| PGx | La_1984 | not_relevant | 7 | 5 | Reports qualitative phenotypic classification and allele frequencies for paraoxonase, but lacks quantitative fitted effect sizes on specific PK/PD parameters (e.g., AUC, clearance) and explicitly states the impact on sensitivity is still to be determined. |
| PGx | Lakshmi_1995 | not_relevant | 3 | 10 | The study investigates how NAT2 genotype affects the metabolism (PD) of benzidine, using paraoxon only as an inhibitor; it does not report pharmacogenomic effects on the PK/PD of paraoxon. |
| PGx | Laplaud_1998 | not_relevant | 4 | 0 | The paper discusses the role of the PON1 enzyme and its polymorphisms in hydrolyzing paraoxon (as a substrate) in the context of cardiovascular disease risk, not the pharmacogenomics of paraoxon as a drug treatment. |
| popPK | Lenz_1984 | irrelevant | 0 | 0 | The study is an in-vitro enzymology investigation of acetylcholinesterase kinetics, not a pharmacokinetic study of paraoxon's disposition in an organism. |
| PGx | Li_1993 | not_relevant | 4 | 2 | Parafoxon is an intermediate metabolite (oxon) rather than a therapeutic drug, and the paper describes general species differences and protein polymorphisms affecting toxicity/turnover without reporting a fitted pharmacogenomic effect size on PK/PD parameters for a clinical indication. |
| PGx | Liederer_2005 | not_relevant | 0 | 0 | The paper discusses paraoxon only as an esterase inhibitor used to characterize metabolic pathways in vitro; it does not report pharmacogenomic effects of gene variants on the pharmacokinetics of paraoxon itself. |
| popPK | Lovins_2024 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of cholinesterase reactivators and does not report pharmacokinetic disposition parameters for paraoxon. |
| PGx | Moreira_2019 | not_relevant | 0 | 0 | The paper discusses the enzyme paraoxonase 1 (PON1) and its activity on the substrate paraoxon in the context of psychiatric disorders, but does not report the PK/PD of paraoxon as a drug modulated by genetic variants. |
| popPK | Mota_2010 | irrelevant | 1 | 0 | The study focuses on the metabolic conversion of parathion to paraoxon in an in-vitro microsomal system and in-vivo toxicity, without reporting quantitative pharmacokinetic parameters (CL, V, etc.) for paraoxon itself. |
| popPK | Mumtaz_2012 | irrelevant | 1 | 0 | The paper is a review of PBPK applications that mentions paraoxon only as a metabolite of parathion in the context of mixture modeling, without reporting specific quantitative disposition parameters for paraoxon itself. |
| PGx | Mutch_1999 | not_relevant | 3 | 5 | The paper analyzes the metabolism of parathion to paraoxon in human liver microsomes but does not report the effect of a specific human gene variant or genotype on the pharmacokinetic or pharmacodynamic parameters of paraoxon itself. |
| PGx | Mutch_2003 | not_relevant | 2 | 5 | The paper reports correlations between CYP expression/activity and paraoxon formation but does not report specific genetic variants or genotypes causing a pharmacokinetic/pharmacodynamic effect. |
| PGx | Mutch_2006 | not_relevant | 4 | 3 | The paper investigates the role of CYP450 isoenzymes in the *de novo* metabolic activation of parathion to paraoxon, not how genetic variation affects the PK/PD of paraoxon itself. |
| PGx | Nevin_1996 | not_relevant | 2 | 5 | The paper reports that Paraoxonase genotype predicts the enzyme's own hydrolytic activity, but explicitly states there is no significant effect on lipoprotein levels or lipase activities, and does not report PK/PD parameters for a drug. |
| PGx | Rea_2004 | not_relevant | 0 | 0 | The paper examines the association between PON1 polymorphisms and longevity, not the effect of these variants on the pharmacokinetic or pharmacodynamic parameters of paraoxon. |
| PGx | Rojas-García_2009 | not_relevant | 3 | 8 | The paper reports a genotypic association with a genotoxic endpoint (micronucleus frequency), which is a toxicodynamic outcome rather than a direct pharmacokinetic or pharmacodynamic parameter of the drug itself. |
| PGx | Schrenk_1994 | not_relevant | 0 | 0 | The paper studies P-glycoprotein induction by 2-AAF in rat cells and uses paraoxon only as an inhibitor to modulate a chemical reaction, not as a pharmacogenomic subject for PK/PD analysis. |
| PGx | Talesa_2001 | not_relevant | 0 | 0 | The paper characterizes acetylcholinesterase enzymes in mussels and mentions paraoxon as an inhibitor, but it does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of paraoxon itself. |
| PGx | Temeyer_2007 | not_relevant | 4 | 8 | The paper describes a mutation in the target (acetylcholinesterase) that confers insensitivity to paraoxon in an in vitro recombinant system (PD), but it does not report changes in pharmacokinetic parameters (absorption, distribution, metabolism, excretion) or quantitative in vivo pharmacodynamic metrics (like IC50 values fitted with a specific effect size) for the organism. |
| PGx | Wallace_2005 | not_relevant | 3 | 0 | The text mentions that polymorphisms alter paraoxon metabolism but is a general review that does not provide specific quantitative data or fitted effect sizes for pharmacokinetic or pharmacodynamic parameters. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | The study reports a PBPK model for enrofloxacin and ciprofloxacin in rainbow trout, not paraoxon. |
| PGx | Yerokun_1990 | not_relevant | 0 | 0 | The paper studies the effect of acetylator genotype on the mutagenic activation of 2-aminofluorene; paraoxon is only mentioned as an inhibitor that did not affect N-acetyltransferase activity, and no PK/PD parameters of paraoxon are reported. |
| popPK | Zhao_2021 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and toxicity of diazinon and its metabolite diazoxon, not paraoxon. |
| popPK | Zoh_2005 | irrelevant | 0 | 0 | This is an environmental chemistry study on photocatalytic degradation of parathion in water, not a pharmacokinetic study reporting disposition parameters for paraoxon. |
| popPK | Zoh_2006 | irrelevant | 0 | 0 | The paper investigates the solar photocatalytic degradation of parathion, mentioning methyl paraoxon only as a degradation byproduct, and contains no pharmacokinetic data for paraoxon. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:17 UTC</sub>
