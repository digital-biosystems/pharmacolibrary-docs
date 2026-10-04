<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;oxyquinoline&quot;}]"></div>

# oxyquinoline

- **generic name:** oxyquinoline
- **ATC codes:** `A01AB07`, `D08AH03`, `G01AC30`, `R02AA14`
- **DrugBank:** [DB11145](https://go.drugbank.com/drugs/DB11145) · **PubChem:** [CID 1923](https://pubchem.ncbi.nlm.nih.gov/compound/1923)
- **molar mass:** 145.158 g/mol (C9H7NO) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

**Description.** Oxyquinoline is a heterocyclic phenol and derivative of quinoline with antiseptic, disinfectant, and pesticide properties. It is used as a stabilizer for hydrogen peroxide, where it is sometimes added in cosmetic products.

**Indication.** Oxyquinoline is used as a biocidal component of several over the counter products. These products are marketed for the purposes of inhibiting abnormal biological growth in the vagina and restoring natural pH.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 02:48 | 10:33 | 0/0/0 | 0/0/0 | 0/0/1 | 454,146/6,964 | ollama / qwen3.8:27b-mtp-q8_0 | 32 | 11/25 | 31/1 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">fish</span> | **NQO1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Chhetri_2022](drugs/drug_oxyquinoline/pgx_Chhetri_2022_NQO1_Q100.md) | Chhetri J et al., NQO1 protects against clioquinol toxici…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1000278](https://doi.org/10.3389/fphar.2022.1000278) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxyquinoline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | bile duct | <sub>“…In the bile, 9% of the total dose is found as glucuronide conjugates…”</sub> | prose |
| metabolism | kidney | <sub>“…In the urine, 60% of the dose is excreted as glucuronide conjugates…”</sub> | prose |
| metabolism | liver | `NQO1` target | paper PGx gene |
| excretion | bile duct | <sub>“…some in the bile…”</sub> | prose |
| excretion | kidney | <sub>“…primarily in the urine…”</sub> | prose |

<sub>Actors without a tissue in the table: METAP2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 292 matched, 125 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dayton_1992.pdf` | Dayton BD et al., Effects of angiotensinase inhibitors on…, Clinical chemistry (1992) | pd | 4 | not captured | [1330373](https://www.ncbi.nlm.nih.gov/pubmed/1330373) | metadata signals extractable PD data (IC50) |
| `Pandey_2018.pdf` | Pandey P et al., Interactions of endocannabinoid virodha…, Biochemical pharmacology (2018) | pd | 4 | [10.1016/j.bcp.2018.06.024](https://doi.org/10.1016/j.bcp.2018.06.024) | [29958841](https://www.ncbi.nlm.nih.gov/pubmed/29958841) | metadata signals extractable PD data (IC50) |
| `Kiiski_2021.pdf` | Kiiski I et al., Drug glucuronidation assays on human li…, European journal of pharmac… (2021) | pgx | 7 | [10.1016/j.ejps.2020.105677](https://doi.org/10.1016/j.ejps.2020.105677) | [33309889](https://www.ncbi.nlm.nih.gov/pubmed/33309889) | metadata signals extractable PGX data (UGT2B7, PK/PD-context) |
| `Poloznikov_2019.pdf` | Poloznikov AA et al., "Branched Tail" Oxyquinoline Inhibitors…, Drug metabolism letters (2019) | pgx | 5 | [10.2174/1872312813666181129100950](https://doi.org/10.2174/1872312813666181129100950) | [30488807](https://www.ncbi.nlm.nih.gov/pubmed/30488807) | metadata signals extractable PGX data (CYP2B6) |

<sub>queue written 2026-10-04T02:42:10.362476+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abou-Zied_2013 | irrelevant | 0 | 0 | The study focuses on in vitro binding of hydroxyquinoline probes to human serum albumin using spectroscopy and molecular dynamics, not on the pharmacokinetic disposition parameters (CL, V, etc.) of oxyquinoline. |
| popPK | Ahrari_2026 | irrelevant | 0 | 0 | The study focuses on the biodistribution of radiolabeled liposomes in mice, using oxyquinoline (oxine) only as a chelating agent for Indium-111, not as the subject drug for pharmacokinetic analysis. |
| PD | Al-Farhan_2021 | not_relevant | 3 | 3 | The paper reports IC50 values for cytotoxicity and MIC/MBC for antimicrobial activity, which are single-point potency metrics, but it does not provide full dose-response curves, Emax, or any PK/PD modeling parameters (e.g., EC50 with slope, E0) required for an extractable pharmacodynamic relationship. |
| PD | Albadari_2021 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and qualitative in vivo efficacy, but lacks a formal PK/PD model, exposure-response analysis, or dose-response curve with derivable PD parameters (e.g., Emax, EC50 in vivo). |
| popPK | Alter_2023 | irrelevant | 0 | 0 | The paper describes the preparation of extracellular vesicles and their biodistribution in zebrafish, with no mention of oxyquinoline or its pharmacokinetics. |
| PD | Alter_2023 | not_relevant | 0 | 0 | The paper describes the preparation and characterization of extracellular vesicles (nPMVs) and does not involve the drug oxyquinoline or report any pharmacodynamic or exposure-response relationships. |
| popPK | Alugoju_2023 | irrelevant | 0 | 0 | The paper is an in silico study on agarwood compounds for Alzheimer's disease and does not involve oxyquinoline or pharmacokinetic parameters. |
| PD | Alugoju_2023 | not_relevant | 0 | 0 | The paper is an in silico study on agarwood compounds for Alzheimer's disease and does not involve oxyquinoline or report any pharmacodynamic or exposure-response data. |
| PD | Apaza_2024 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for compounds isolated from Rubus urticifolius, not for oxyquinoline, and does not contain PK/PD modeling or exposure-response analysis for the target drug. |
| popPK | Bai_2026 | irrelevant | 0 | 0 | The paper describes a covalent organic framework functionalized with 8-hydroxyquinoline for Alzheimer's disease treatment, not a pharmacokinetic study of oxyquinoline. |
| popPK | Baldas_1992 | irrelevant | 0 | 0 | The study focuses on the preparation and biodistribution of Technetium-99m radiopharmaceuticals using quinoline ligands, not the pharmacokinetics of oxyquinoline itself. |
| PGx | Baririan_2006 | not_relevant | 0 | 0 | The paper studies the metabolism of 7-benzyloxyquinoline (a probe substrate) in animal microsomes, not the pharmacokinetics or pharmacodynamics of the drug oxyquinoline in humans or the effect of genetic variants on oxyquinoline. |
| popPK | Berko_2023 | irrelevant | 0 | 0 | The paper investigates lorlatinib resistance in neuroblastoma via ctDNA and does not report pharmacokinetic parameters for oxyquinoline. |
| popPK | Bertini_2010 | irrelevant | 0 | 0 | The paper describes the synthesis and pharmacological activity (antitumor/vasorelaxing) of resveratrol analogs, not the pharmacokinetics of oxyquinoline. |
| popPK | Bethencourt-Estrella_2025 | irrelevant | 0 | 0 | The study focuses on the in vitro antiparasitic activity of nitroxoline (a different drug) and explicitly states that pharmacokinetic studies are future work. |
| popPK | Bowroju_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on 8-hydroxyquinoline-indole derivatives for Alzheimer's disease, containing no pharmacokinetic data for oxyquinoline. |
| PGx | Calleri_2004 | not_relevant | 0 | 0 | The paper describes an analytical method for dextromethorphan and uses 8-hydroxyquinoline only as a substrate for enzyme activity evaluation, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Cesano_1999 | irrelevant | 0 | 0 | The study investigates the biodistribution of T cells in dogs and uses 111In-oxine only as a radiolabel, not as the subject drug for pharmacokinetic analysis. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and antifungal activity of quinoline derivatives, not the pharmacokinetics of oxyquinoline. |
| popPK | Cheng_1988 | irrelevant | 0 | 0 | The study investigates lymphocyte migration using Indium III oxine as a radiolabel, not the pharmacokinetics of the drug oxyquinoline. |
| PD | Dayton_1992 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for renin inhibitors under different assay conditions, but does not provide a pharmacodynamic model, exposure-response curve, or numeric PD parameters (like Emax or EC50) for oxyquinoline itself as a therapeutic agent. |
| PD | Du_2023 | not_relevant | 3 | 2 | The paper reports IC50 values for cytotoxicity, which is a dose-response metric, but it lacks the pharmacokinetic (exposure) data required to establish a pharmacodynamic (exposure-response) relationship or fit a PD model. |
| PGx | Dömötör_2025 | not_relevant | 0 | 0 | The paper studies the pharmacokinetic properties (HSA binding, OATP inhibition) of 8-hydroxyquinoline derivatives but does not report any pharmacogenomic effects (gene variants) on these parameters. |
| popPK | Ekpenyong_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CLBQ14 (7-bromo-5-chloroquinolin-8-ol), not oxyquinoline (5-chloro-8-hydroxyquinoline), which is used only as an internal standard. |
| popPK | Ekpenyong_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CLBQ14, a novel methionine aminopeptidase inhibitor, not oxyquinoline. |
| popPK | El_2024 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in-vitro iron chelation properties of hydroxyquinoline derivatives, not the pharmacokinetics of oxyquinoline. |
| PD | El_2024 | not_relevant | 0 | 0 | The paper reports in vitro iron chelation constants (ITC) and antioxidant activity (DPPH), but does not report any pharmacodynamic (exposure-response or dose-response) relationship for oxyquinoline or its derivatives in a biological system. |
| PGx | Filkins_2015 | not_relevant | 0 | 0 | The paper studies bacterial interactions in cystic fibrosis and does not report pharmacogenomic effects on the PK or PD of oxyquinoline. |
| popPK | Fletcher_2007 | irrelevant | 0 | 0 | The paper describes a biosensor for bacterial quorum-sensing molecules (PQS/HHQ) and does not involve oxyquinoline pharmacokinetics. |
| PD | Fletcher_2007 | not_relevant | 0 | 0 | The paper describes a biosensor for quinolone signal molecules and reports EC50 values for the biosensor's activation, not a pharmacodynamic exposure-response relationship for a drug in a biological system. |
| popPK | Friberger_2023 | irrelevant | 0 | 0 | The study investigates the biodistribution of radiolabeled cells using [89Zr]Zr-(oxinate)4, not the pharmacokinetics of the drug oxyquinoline. |
| popPK | Frojuello_2026 | irrelevant | 0 | 0 | The paper describes the discovery of new MABA compounds and reports pharmacodynamic/affinity data, not the pharmacokinetic parameters of oxyquinoline. |
| popPK | Gawne_2018 | irrelevant | 0 | 0 | The study focuses on 8-hydroxyquinoline (oxine) as a radiolabeling ionophore for Manganese-52, not on the pharmacokinetics of the drug oxyquinoline. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper discusses the concept of iodine allergy in nuclear medicine and does not contain any pharmacodynamic or exposure-response data for oxyquinoline. |
| popPK | Hakala_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of UGT enzyme kinetics using hydroxyquinoline as a substrate, not a pharmacokinetic study of oxyquinoline disposition in a biological system. |
| PGx | Hegedűs_2025 | not_relevant | 0 | 0 | The paper reports the synthesis and biological evaluation of new hydroxyquinoline hybrids, not the pharmacogenomics of oxyquinoline. |
| PD | Huang_2024 | not_relevant | 0 | 0 | The paper reports IC50 values for rhodium complexes, not oxyquinoline, and does not provide a pharmacodynamic model or exposure-response relationship for the specified drug. |
| popPK | Irons-Brown_2004 | irrelevant | 0 | 0 | The study investigates the effects of glutamate receptor antagonists (including kynurenic acid, a quinoline derivative) on auditory potentials in chickens, not the pharmacokinetics of oxyquinoline. |
| PD | Ito_1994 | not_relevant | 0 | 0 | The provided text is metadata for a software tool (GROBID) and does not contain any pharmacological data, PD models, or information regarding oxyquinoline. |
| popPK | Joaquim_2019 | irrelevant | 0 | 0 | The study focuses on the antimicrobial pharmacodynamics (MIC, time-kill) of 8-hydroxyquinoline derivatives, not the pharmacokinetics of oxyquinoline. |
| popPK | Kiiski_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay of drug glucuronidation using 8-hydroxyquinoline as a model substrate, not a pharmacokinetic study reporting disposition parameters for oxyquinoline. |
| PGx | Kiiski_2021 | not_relevant | 0 | 0 | The paper describes an in vitro microfluidic assay method for UGT activity using 8-hydroxyquinoline as a model substrate, but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters in humans. |
| PD | Kilhoffer_1983 | not_relevant | 0 | 0 | The paper studies calmodulin-activated adenylate cyclase and mentions 8-hydroxyquinoline only as a metal chelator, not as a drug with a pharmacodynamic exposure-response relationship. |
| popPK | Kolaj-Robin_2011 | irrelevant | 0 | 0 | The paper describes the biochemical characterization of an enzyme from Thermus thermophilus and does not involve oxyquinoline pharmacokinetics. |
| PD | Kolaj-Robin_2011 | not_relevant | 0 | 0 | The paper describes the biochemical and biophysical characterization of an enzyme (succinate:quinone reductase) and its kinetics, but does not report a pharmacodynamic or exposure-response relationship for the drug oxyquinoline. |
| popPK | Krajewski_2024 | irrelevant | 0 | 0 | The paper is a review of nitroxoline, which is a different drug from oxyquinoline, and does not report original quantitative PK parameters for oxyquinoline. |
| popPK | Le_2011 | irrelevant | 0 | 0 | The paper discusses sugar metabolism and virulence in enterobacteria and does not involve oxyquinoline or pharmacokinetics. |
| PD | Le_2011 | not_relevant | 0 | 0 | The paper discusses bacterial sugar metabolism and virulence in enterobacteria and does not mention oxyquinoline or any pharmacodynamic parameters. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study focuses on a novel 8-hydroxyquinoline derivative (L14) and uses clioquinol (oxyquinoline) only as a comparator, without reporting quantitative PK parameters for oxyquinoline itself. |
| popPK | Lin_2009 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of vinorelbine-encapsulated liposomes in mice, not oxyquinoline. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The study focuses on a nanoscale coordination polymer containing 5-carboxy-8-hydroxyquinoline (CQ), not oxyquinoline, and does not report specific quantitative PK parameters for oxyquinoline. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The study investigates the biodistribution of mesenchymal stem cells in mice and does not report pharmacokinetic parameters for oxyquinoline. |
| popPK | Louissaint_2012 | irrelevant | 0 | 0 | The study investigates the distribution of HIV surrogates in the colon and does not involve oxyquinoline or its pharmacokinetics. |
| popPK | Melder_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of adoptively transferred lymphocytes in mice, not the drug oxyquinoline. |
| popPK | Mondal_2023 | irrelevant | 0 | 0 | The paper describes a supramolecular probe (INHQ) containing hydroxyquinoline for Alzheimer's disease treatment, not a pharmacokinetic study of oxyquinoline. |
| popPK | Monson_1991 | irrelevant | 0 | 0 | The study investigates 8-hydroxyquinoline (8-OHQ), which is a different chemical entity from oxyquinoline (5-hydroxyquinoline), and focuses on tumor targeting kinetics rather than standard PK parameters for oxyquinoline. |
| popPK | Morsy_2024 | irrelevant | 0 | 0 | The study focuses on the antiviral activity of hydroxyquinoline-pyrazole derivatives, not the pharmacokinetics of oxyquinoline itself. |
| popPK | Mulvihill_1990 | irrelevant | 0 | 0 | The paper describes surface passivation of plasmapheresis circuits and platelet accumulation, with no mention of oxyquinoline or its pharmacokinetics. |
| PD | Pandey_2018 | not_relevant | 0 | 0 | The paper studies virodhamine and analogs, not oxyquinoline, and reports in vitro enzyme inhibition (IC50/Ki) rather than a pharmacodynamic exposure-response relationship for the specified drug. |
| popPK | Petersen_2011 | irrelevant | 0 | 0 | The paper focuses on 64Cu-labeled liposomes using 2-hydroxyquinoline as an ionophore, not the pharmacokinetics of the drug oxyquinoline. |
| PD | Pivarcsik_2024 | not_relevant | 2 | 2 | The paper reports IC50 values for cytotoxicity, which are single-point potency metrics, but does not provide dose-response curves, concentration-effect data, or any pharmacokinetic/pharmacodynamic modeling parameters (e.g., Emax, EC50, slope) required to define a PD relationship. |
| popPK | Poloznikov_2017 | irrelevant | 0 | 0 | The study focuses on structure-activity relationships and in vitro potency (EC50) of oxyquinoline derivatives as HIF activators, not on pharmacokinetic disposition parameters. |
| popPK | Poloznikov_2019 | irrelevant | 0 | 0 | no_text gate: only 132 chars of text extracted (&lt; 400) |
| PD | Poloznikov_2019 | not_relevant | 0 | 0 | The paper focuses on toxicity and metabolism in a liver-on-a-chip model and does not report a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters for oxyquinoline. |
| PGx | Poloznikov_2019 | not_relevant | 0 | 0 | The paper evaluates toxicity and metabolism of oxyquinoline inhibitors using a liver-on-a-chip model but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Radlinski_2017 | not_relevant | 0 | 0 | The paper studies interspecies interactions between P. aeruginosa and S. aureus affecting antibiotic susceptibility, not human pharmacogenomics or PK/PD parameters of oxyquinoline. |
| PGx | Renwick_2001 | not_relevant | 0 | 0 | The paper evaluates 7-benzyloxyquinoline as a fluorescent probe substrate for CYP enzymes in rats, not the pharmacogenomics of oxyquinoline. |
| PGx | Renwick_2001_2 | not_relevant | 0 | 0 | The paper studies the metabolism of BFBFC and 7-benzyloxyquinoline (a probe substrate), not the drug oxyquinoline, and does not report pharmacogenomic effects on its PK/PD. |
| popPK | Reynolds_1984 | irrelevant | 0 | 0 | The study investigates the distribution of lymphocytes in rats using 111In-oxine as a radiolabel, not the pharmacokinetics of oxyquinoline. |
| PD | Ribeiro_2022_2 | not_relevant | 2 | 2 | The paper reports IC50 values for anticancer activity, which are single-point dose-response metrics, but does not provide a full concentration-effect curve, Emax, or a formal PK/PD model fit required for extractable pharmacodynamic parameters. |
| PD | Rivas_2021 | not_relevant | 3 | 2 | The paper reports static IC50 values and QSAR correlations for new compounds, but does not provide a time-dependent exposure-response or dose-response curve with derivable PD parameters (e.g., Emax, slope) for oxyquinoline or its derivatives. |
| popPK | Scalese_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro anti-parasitic activity of vanadium complexes, not the pharmacokinetics of oxyquinoline. |
| popPK | Schiller_2014 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro enzymatic/cellular activity of IOX1 (5-carboxy-8-hydroxyquinoline) and its esters, not the pharmacokinetics of oxyquinoline (8-hydroxyquinoline). |
| popPK | Serrao_2013 | irrelevant | 0 | 0 | The paper describes the discovery of 8-hydroxyquinoline derivatives as HIV-1 integrase inhibitors and reports in vitro potency (IC50/EC50), not the pharmacokinetic disposition parameters of oxyquinoline. |
| PGx | Shaik_2017 | not_relevant | 0 | 0 | The paper investigates MAO inhibition by 1-ABT and Ketoconazole, not the pharmacogenomics of oxyquinoline. |
| popPK | Thierbach_2017 | irrelevant | 0 | 0 | The paper studies the bacterial metabolism of a Pseudomonas toxin (HQNO), not the pharmacokinetics of the drug oxyquinoline. |
| PD | Toan_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for novel quinoline-pyrimidine hybrid compounds, not for oxyquinoline, and does not provide a concentration-effect curve or PK/PD model for the target drug. |
| popPK | Torabfam_2025 | irrelevant | 0 | 0 | The paper studies quercetin derivatives for coronavirus inhibition and does not report pharmacokinetic parameters for oxyquinoline. |
| popPK | Vu_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on fluoroquinolone derivatives using 8-hydroxyquinoline as a structural moiety, not a pharmacokinetic study of oxyquinoline. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The paper investigates a gallium chelating ligand (H2hox) for radiopharmaceuticals, not the pharmacokinetics of the drug oxyquinoline. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro fungicidal activity of quinolone analogs, not the pharmacokinetics of oxyquinoline. |
| popPK | Wright_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 4-hydroxycyclophosphamide, using a hydroxyquinoline derivative only as a chemical intermediate for detection, not as the subject drug. |
| popPK | Wu_2014 | irrelevant | 0 | 0 | The study focuses on macrophage imaging in mice and does not involve oxyquinoline pharmacokinetics. |
| popPK | Yao_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of WXFL-152, a novel angiokinase inhibitor, not oxyquinoline. |
| popPK | Yin_2019 | irrelevant | 0 | 0 | The paper describes the synthesis and antifungal activity of 8-hydroxyquinoline derivatives, not the pharmacokinetics of oxyquinoline. |
| popPK | Yin_2020 | irrelevant | 0 | 0 | The paper focuses on the synthesis and antifungal activity of 8-hydroxyquinoline metal complexes, not the pharmacokinetics of oxyquinoline. |
| popPK | Zeng_2010 | irrelevant | 0 | 0 | The paper reports in-vitro anti-HIV-1 activity (EC50, TI) of synthesized 8-hydroxyquinoline derivatives, not pharmacokinetic parameters for oxyquinoline. |
| popPK | Zhang_2012 | irrelevant | 0 | 0 | The paper describes the supramolecular chemistry and photophysics of zinc-hydroxyquinoline complexes, not the pharmacokinetics of the drug oxyquinoline. |
| PD | Zhang_2012 | not_relevant | 0 | 0 | The paper describes the supramolecular chemistry and photophysics of a zinc-hydroxyquinoline complex, not the pharmacodynamics of a drug. |
| popPK | de_2023 | irrelevant | 0 | 0 | The study is an in vitro antifungal efficacy evaluation of 8-hydroxyquinoline derivatives, not a pharmacokinetic study. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 7 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is a conference header (EANM'17) and contains no information regarding oxyquinoline, pharmacodynamics, or exposure-response relationships. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no information about oxyquinoline, pharmacodynamics, or exposure-response relationships. |
| popPK | unknown_2021_2 | irrelevant | 0 | 0 | no_text gate: only 68 chars of text extracted (&lt; 400) |
| PD | unknown_2021_2 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of oxyquinoline pharmacodynamics. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 37 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no information regarding oxyquinoline, pharmacodynamics, or exposure-response relationships. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
