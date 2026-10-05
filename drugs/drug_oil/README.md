<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;oil&quot;}]"></div>

# oil

- **generic name:** oil
- **ATC codes:** `A06AG06`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Oil is used as an enema to treat constipation. It is classified under drugs for constipation given as enemas, and remains in use for this purpose.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 17:37 | 23:46 | 0/0/0 | 0/0/0 | 0/0/1 | 1,036,069/16,766 | ollama / qwen3.8:27b-mtp-q8_0 | 92 | 15/73 | 90/2 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | **LTC4S** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kazani_2014](drugs/drug_oil/pgx_Kazani_2014_LTC4S_Q100.md) | Kazani S et al., LTC4 synthase polymorphism modifies eff…, SpringerPlus (2014) | [10.1186/2193-1801-3-661](https://doi.org/10.1186/2193-1801-3-661) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: LTC4S (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7085 matched, 241 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_18 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aguila_2024.pdf` | Aguila FA et al., Population Pharmacokinetic of the Diter…, Planta medica (2024) | popPK | 10 | [10.1055/a-2328-2644](https://doi.org/10.1055/a-2328-2644) | [38749480](https://pubmed.ncbi.nlm.nih.gov/38749480) | The paper reports a population pharmacokinetic model for the major diterpenes in Copaifera duckei oil resin in rats, with all numeric parameter values (ka, V, CL, t1/2) explicitly provided in the text. |
| `Ming_2026.pdf` | Ming C et al., Development of a SMEDDS for oral delive…, Journal of pharmaceutical s… (2026) | pd | 5 | [10.1016/j.xphs.2026.104356](https://doi.org/10.1016/j.xphs.2026.104356) | [42250802](https://www.ncbi.nlm.nih.gov/pubmed/42250802) | metadata signals extractable PD data (PK/PD) |
| `Selles_2024.pdf` | Selles SMA et al., Chemical compounds, antioxidant and sco…, Experimental parasitology (2024) | pd | 5 | [10.1016/j.exppara.2024.108699](https://doi.org/10.1016/j.exppara.2024.108699) | [38199324](https://www.ncbi.nlm.nih.gov/pubmed/38199324) | metadata signals extractable PD data (IC50) |
| `Wince_1982.pdf` | Wince LC et al., Developmental changes in the accumulati…, The Journal of pharmacology… (1982) | pd | 5 | not captured | [7057395](https://www.ncbi.nlm.nih.gov/pubmed/7057395) | metadata signals extractable PD data (EC50) |
| `Brosnan_2007.pdf` | Brosnan RJ et al., Ammonia has anesthetic properties, Anesthesia and analgesia (2007) | pd | 4 | [10.1213/01.ane.0000264072.97705.0f](https://doi.org/10.1213/01.ane.0000264072.97705.0f) | [17513636](https://www.ncbi.nlm.nih.gov/pubmed/17513636) | metadata signals extractable PD data (EC50) |
| `Fujimoto_1988.pdf` | Fujimoto S et al., Altered vascular beta adrenoceptor-medi…, The Journal of pharmacology… (1988) | pd | 4 | not captured | [2831351](https://www.ncbi.nlm.nih.gov/pubmed/2831351) | metadata signals extractable PD data (EC50) |
| `Galo_1975.pdf` | Galo MG et al., Kinetic changes of the erythrocyte (Mg2…, The Journal of biological c… (1975) | pd | 4 | not captured | [125751](https://www.ncbi.nlm.nih.gov/pubmed/125751) | metadata signals extractable PD data (sigmoid) |
| `García_1995.pdf` | García E et al., Resistance to atracurium in rats with e…, Acta anaesthesiologica Scan… (1995) | pd | 4 | [10.1111/j.1399-6576.1995.tb04221.x](https://doi.org/10.1111/j.1399-6576.1995.tb04221.x) | [8607301](https://www.ncbi.nlm.nih.gov/pubmed/8607301) | metadata signals extractable PD data (sigmoid) |
| `He_2020.pdf` | He C et al., Chemical compositions and antioxidant a…, Journal of food science (2020) | pd | 4 | [10.1111/1750-3841.14982](https://doi.org/10.1111/1750-3841.14982) | [31872874](https://www.ncbi.nlm.nih.gov/pubmed/31872874) | metadata signals extractable PD data (IC50) |
| `He_2022.pdf` | He M et al., Influence of extraction technology on r…, Food & function (2022) | pd | 4 | [10.1039/d1fo01507a](https://doi.org/10.1039/d1fo01507a) | [34888592](https://www.ncbi.nlm.nih.gov/pubmed/34888592) | metadata signals extractable PD data (EC50) |
| `Houghton_1995.pdf` | Houghton PJ et al., Fixed oil of Nigella sativa and derived…, Planta medica (1995) | pd | 4 | [10.1055/s-2006-957994](https://doi.org/10.1055/s-2006-957994) | [7700988](https://www.ncbi.nlm.nih.gov/pubmed/7700988) | metadata signals extractable PD data (IC50) |
| `Mills_2004.pdf` | Mills C et al., Inhibition of acetylcholinesterase by T…, The Journal of pharmacy and… (2004) | pd | 4 | [10.1211/0022357022773](https://doi.org/10.1211/0022357022773) | [15025863](https://www.ncbi.nlm.nih.gov/pubmed/15025863) | metadata signals extractable PD data (IC50) |
| `Nguyen_2022.pdf` | Nguyen ATL et al., Valorization of seed and kernel marcs a…, Food chemistry (2022) | pd | 4 | [10.1016/j.foodchem.2022.133168](https://doi.org/10.1016/j.foodchem.2022.133168) | [35569394](https://www.ncbi.nlm.nih.gov/pubmed/35569394) | metadata signals extractable PD data (EC50) |
| `Pedersen_1993.pdf` | Pedersen CM et al., Smooth muscle relaxant effects of propo…, European journal of pharmac… (1993) | pd | 4 | [10.1016/0014-2999(93)90507-e](https://doi.org/10.1016/0014-2999(93)90507-e) | [8405085](https://www.ncbi.nlm.nih.gov/pubmed/8405085) | metadata signals extractable PD data (EC50) |
| `Sherry_1984.pdf` | Sherry JP, The impact of oil and oil-dispersant mi…, The Science of the total en… (1984) | pd | 4 | [10.1016/0048-9697(84)90060-3](https://doi.org/10.1016/0048-9697(84)90060-3) | [6719105](https://www.ncbi.nlm.nih.gov/pubmed/6719105) | metadata signals extractable PD data (EC50) |
| `do_2021.pdf` | do Vale JPC et al., Evaluation of Antimicrobial and Antioxi…, Current microbiology (2021) | pd | 4 | [10.1007/s00284-021-02449-1](https://doi.org/10.1007/s00284-021-02449-1) | [33782740](https://www.ncbi.nlm.nih.gov/pubmed/33782740) | metadata signals extractable PD data (EC50) |
| `Alharbi_2017.pdf` | Alharbi HA et al., Toxicokinetics and toxicodynamics of ch…, Journal of applied toxicolo… (2017) | pgx | 7 | [10.1002/jat.3397](https://doi.org/10.1002/jat.3397) | [27774651](https://www.ncbi.nlm.nih.gov/pubmed/27774651) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Yeo_2025.pdf` | Yeo M et al., Deep phenotyping of patients with citri…, Molecular genetics and meta… (2025) | pgx | 5 | [10.1016/j.ymgme.2025.109215](https://doi.org/10.1016/j.ymgme.2025.109215) | [40780027](https://www.ncbi.nlm.nih.gov/pubmed/40780027) | metadata signals extractable PGX data (SLC25A13) |

<sub>queue written 2026-10-04T17:22:24.781860+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abu_2015 | not_relevant | 0 | 0 | The paper describes microbial biodegradation of hydrocarbons in an environmental context, not human pharmacogenomics or drug PK/PD. |
| popPK | Abutaima_2024 | irrelevant | 0 | 0 | The study investigates the effect of black seed oil on the pharmacokinetics of prednisolone, not the pharmacokinetic parameters of oil itself. |
| popPK | Adefegha_2017 | irrelevant | 0 | 0 | The study investigates the in-vitro antioxidant and enzyme inhibitory properties of essential oils, not their pharmacokinetic disposition parameters. |
| popPK | Adiwidjaja_2021 | irrelevant | 0 | 0 | The study investigates the effect of Nigella sativa oil on the pharmacokinetics of gliclazide, not the pharmacokinetic parameters of the oil itself. |
| PGx | Agarwal_2024 | not_relevant | 0 | 0 | The study investigates formulation effects (phospholipid complex and piperine) on pharmacokinetics, not the impact of a specific gene variant or genotype. |
| PGx | Al-Saeed_2024 | not_relevant | 0 | 0 | The study investigates the protective effects of essential oils on malathion toxicity in rats and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Alharbi_2017 | not_relevant | 0 | 0 | The study investigates the effect of environmental contaminants (oil sands process-affected water) on the pharmacokinetics of a pesticide in fish, not the effect of a gene variant/genotype on a drug's PK/PD. |
| PGx | Aljumaili_2020 | not_relevant | 0 | 0 | The paper evaluates the efficacy of a Newcastle disease virus vaccine in chickens and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Ambrož_2017 | not_relevant | 0 | 0 | The paper investigates the effect of sesquiterpenes on doxorubicin efficacy in cancer cell lines, not the effect of human gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Amini_2016 | irrelevant | 0 | 0 | The paper investigates the antifungal activity of plant essential oils against Phytophthora species, not the pharmacokinetics of a drug named oil. |
| popPK | An_2026 | irrelevant | 0 | 0 | The paper is a genomic and therapeutic study on hepatocellular carcinoma and does not report pharmacokinetic parameters for the drug oil. |
| PD | An_2026 | not_relevant | 0 | 0 | The paper focuses on genomic characterization of RB1 loss and drug screening for synthetic lethality, but does not report pharmacokinetic or pharmacodynamic modeling (e.g., Emax, EC50) or exposure-response relationships for any specific drug. |
| popPK | Anderson_2025 | irrelevant | 0 | 0 | The paper is a review of propofol, not a study on the drug oil, and contains no quantitative PK parameters for oil. |
| PD | Anderson_2025 | not_relevant | 2 | 0 | The paper is a narrative review/perspective that discusses the history and concepts of propofol PK/PD modeling but does not present original data, specific numeric PD parameters (like Emax or EC50), or extractable concentration-effect curves. |
| popPK | Arambewela_2010 | irrelevant | 0 | 0 | The paper investigates the antioxidant and antifungal activities of essential oil in vitro, not its pharmacokinetic parameters. |
| PGx | Arrington_2025 | not_relevant | 0 | 0 | The paper focuses on microbial ecology and hydrocarbon metabolism in the ocean, not pharmacogenomics or drug PK/PD. |
| PGx | Asgarshamsi_2023 | not_relevant | 0 | 0 | The paper is a theoretical study of oleocanthal metabolism using DFT and docking, with no human pharmacogenomic data or PK/PD parameter analysis. |
| popPK | Bai_2023 | irrelevant | 0 | 0 | The paper investigates the allelopathic and herbicidal effects of garlic essential oil on plants, not the pharmacokinetics of a drug. |
| popPK | Bayoumi_2017 | irrelevant | 0 | 0 | The paper describes a synthetic biology system using oil as a structural component for encapsulating droplets, not a pharmacokinetic study of oil as a drug. |
| popPK | Brix_1993 | irrelevant | 0 | 0 | The study is an MRI imaging technique validation using vegetable oil as a phantom component, not a pharmacokinetic study of a drug. |
| popPK | Brosnan_2007 | irrelevant | 0 | 0 | no_text gate: only 33 chars of text extracted (&lt; 400) |
| PD | Brosnan_2007 | not_relevant | 0 | 0 | The provided text is a single sentence stating a qualitative property of ammonia and contains no data, analysis, or numeric parameters for a pharmacodynamic or exposure-response relationship. |
| popPK | Brstilo_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cannabidiol (CBD), not for the drug "oil". |
| popPK | Camargo_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for linalool, a specific monoterpene, not for the drug "oil" itself. |
| PD | Camargo_2025 | not_relevant | 4 | 3 | The paper reports PK parameters and qualitative/semi-quantitative dose-response effects (BP reduction at a single dose, vascular reactivity curves), but does not provide a formal PK/PD model or numeric PD parameters (e.g., EC50, Emax) linking exposure to effect. |
| popPK | Chebbac_2022 | irrelevant | 0 | 0 | The paper investigates the chemical composition and in-vitro antioxidant/antimicrobial activities of essential oil, not its pharmacokinetics. |
| popPK | Chebbac_2023 | irrelevant | 0 | 0 | The study investigates the antimicrobial and antioxidant properties of Artemisia annua essential oil in vitro, not its pharmacokinetics. |
| popPK | Chin_1994 | irrelevant | 0 | 0 | The study examines the vascular reactivity of isolated arteries and veins in response to agonists, not the pharmacokinetic disposition parameters (CL, V, etc.) of the oil. |
| PGx | Claassen_1995 | not_relevant | 0 | 0 | The study investigates the effect of dietary fatty acid supplementation on bone status in rats and does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Cobelo-Gómez_2025 | not_relevant | 0 | 0 | The paper investigates the pathophysiology of metabolic-associated steatotic liver disease in mouse models, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Cortes-Torres_2023 | irrelevant | 0 | 0 | The study focuses on chemical composition, antioxidant activity, and in silico molecular docking, with no pharmacokinetic parameters reported. |
| PD | Cortes-Torres_2023 | not_relevant | 3 | 3 | The paper reports an in vitro antioxidant EC50 (48.5 µL/mL) and in silico docking energies, but lacks in vivo PK/PD modeling, exposure-response analysis, or pharmacodynamic parameters (Emax, slope) for a drug effect. |
| PGx | Crosby_2019 | not_relevant | 0 | 0 | The paper studies the effect of a chemical (3-methylcholanthrene) on enzyme expression in a mouse model, not the effect of a human gene variant on the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Dagnelie_1994 | not_relevant | 0 | 0 | The study investigates the effect of fish oil on cancer cachexia in rats but does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Davidson_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ropivacaine, not oil. |
| popPK | De_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for paclitaxel, not oil. |
| popPK | Della_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cannabidiol (CBD), not the drug "oil" (which is the solvent/vehicle in this context). |
| popPK | Ding_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of artemether, lumefantrine, and amodiaquine, not the drug 'oil'. |
| PD | Ding_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis and drug-drug interaction assessment, but it does not model or report any pharmacodynamic (PD) or exposure-response relationships (e.g., Emax, EC50, or effect curves). |
| PD | Du_1992 | not_relevant | 3 | 2 | The study describes a cumulative dose-response trial but reports only qualitative trends and significant/non-significant changes without providing numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve. |
| popPK | Dua_1993 | irrelevant | 0 | 0 | The study investigates chloroquine susceptibility in Plasmodium falciparum, not the pharmacokinetics of the drug oil. |
| PGx | Duszka_2017 | not_relevant | 0 | 0 | The paper studies the physiological role of the PPARγ gene in lipid metabolism using knockout mice, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Dutta_2021 | irrelevant | 0 | 0 | The paper is an in vitro bioassay and in silico docking study of mustard essential oil as a pesticide, not a pharmacokinetic study. |
| popPK | EFSA_2026 | irrelevant | 0 | 0 | The paper is a safety assessment of cannabidiol (CBD), not a pharmacokinetic study of the drug oil, and contains no quantitative PK parameters for oil. |
| PD | EFSA_2026 | not_relevant | 2 | 1 | The paper is a regulatory safety assessment (EFSA statement) that summarizes toxicological data and performs Benchmark Dose (BMD) modeling for safety limits, but it does not report a pharmacodynamic (exposure-response) model with parameters like Emax or EC50 for a therapeutic effect. |
| popPK | Ekstrand_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cannabidiol (CBD) and cannabidiolic acid (CBDA), not the drug "oil". |
| PD | Ekstrand_2026 | not_relevant | 0 | 0 | The study is purely pharmacokinetic, reporting plasma and urine concentrations of CBD and CBDA without measuring any pharmacodynamic effects or modeling exposure-response relationships. |
| PGx | Eppard_1993 | not_relevant | 0 | 0 | The study examines the pharmacokinetics of different recombinant protein variants in cows, not the effect of a host gene variant on drug PK/PD. |
| PGx | Fawzy_2020 | not_relevant | 0 | 0 | The paper evaluates the efficacy of a Newcastle disease virus vaccine in chickens and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Filser_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of styrene, not oil; oil is only mentioned as a vehicle for oral dosing or for in-vitro partition coefficient measurements. |
| popPK | Fortier_2023 | irrelevant | 0 | 0 | The study is an MRI physics/phantom study measuring R1 relaxation rates in safflower oil, not a pharmacokinetic study of a drug named oil. |
| popPK | Fujimoto_1988 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Fujimoto_1988 | not_relevant | 0 | 0 | The paper studies vascular beta-adrenoceptor relaxation in hypertensive rats, not the pharmacodynamics of oil. |
| popPK | Gallo_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of carbon tetrachloride (CCl4), using corn oil only as a vehicle/comparator, not as the subject drug. |
| popPK | Galo_1975 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Galo_1975 | not_relevant | 0 | 0 | The paper investigates the effect of dietary fat on enzyme kinetics, not the pharmacodynamic response to a specific drug dose or concentration. |
| PGx | Gan_2022 | not_relevant | 0 | 0 | The paper focuses on plant metabolic engineering and fatty acid biosynthesis, not human pharmacogenomics or drug PK/PD parameters. |
| popPK | García_1995 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | García_1995 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of atracurium (protein binding) in rats, not on the pharmacodynamics of oil or any other drug. |
| popPK | García_1995_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of membrane binding interactions, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Geng_2016 | irrelevant | 0 | 0 | The paper describes the extraction, chemical composition, and antifungal activity of bitter almond essential oil, containing no pharmacokinetic data. |
| popPK | Goulart_2020 | irrelevant | 0 | 0 | The study investigates ruminal kinetics and feed intake in beef cattle, not the pharmacokinetics of the drug oil. |
| popPK | Green_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lipoproteins (chylomicrons/VLDL) in rats, not the drug oil. |
| popPK | Green_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of beta-carotene and retinol, not the drug oil, which is only mentioned as the vehicle for administration. |
| PGx | Gurjar_2018 | not_relevant | 0 | 0 | The study investigates the effect of pharmaceutical excipients on P-glycoprotein activity, not the effect of a gene variant/genotype on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Hashad_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study on the extraction and antibacterial activity of essential oil, containing no pharmacokinetic data. |
| popPK | He_2020 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | He_2020 | not_relevant | 0 | 0 | The paper analyzes chemical composition and antioxidant activity of adlay seed oil, not a pharmacodynamic or exposure-response relationship for a drug. |
| PD | He_2022 | not_relevant | 0 | 0 | The paper focuses on food chemistry and extraction technology for rapeseed oil polyphenols, not pharmacodynamics or drug exposure-response relationships. |
| popPK | He_2022_2 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for paclitaxel, not oil. |
| PD | He_2022_2 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for oral paclitaxel, including covariate analysis and exposure simulations, but it does not contain a pharmacodynamic (PD) model, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Heintz_2020 | not_relevant | 0 | 0 | The paper investigates the role of Cyp2b in diet-induced fatty liver disease and does not report pharmacokinetic or pharmacodynamic parameters for a specific drug. |
| PGx | Hilscher_1969 | not_relevant | 0 | 0 | The paper investigates the toxicity and mutagenicity of fusel oil components on E. coli, which is a microbiological/toxicological study, not a pharmacogenomic study of human PK/PD parameters. |
| popPK | Hira_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vancomycin in the presence of silicone oil, not the pharmacokinetics of oil itself. |
| PGx | Hooker_2023 | not_relevant | 0 | 0 | The paper studies soybean genetics and environmental effects on seed protein/oil content, not human pharmacogenomics or drug PK/PD. |
| popPK | Hu_2017 | irrelevant | 2 | 2 | The paper is a review of patchouli alcohol (a constituent of patchouli oil), not the oil itself, and while it cites PK parameters for the alcohol in rats, it does not report quantitative disposition parameters for the oil as the subject drug. |
| popPK | Hwang_2026 | irrelevant | 0 | 0 | The paper is a review of intravaginal formulations for vaginal disorders and does not report pharmacokinetic parameters for the drug oil. |
| popPK | Jelínek_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cannabidiol (CBD) using oil as a formulation vehicle or comparator, not oil as the subject drug. |
| popPK | Jenkins_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for piperonyl butoxide (PBO), not oil; oil is only the vehicle used for administration. |
| popPK | Jeong_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of methotrexate, not oil; oil is only a component of the nanoemulsion formulation. |
| PGx | Jia_2024 | not_relevant | 0 | 0 | The paper investigates the genetic regulation of cotton seed size and development, not the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Kajii_2022 | irrelevant | 0 | 0 | The paper investigates the effects of sugars on giant unilamellar vesicle (GUV) preparation and biochemical reactions, not the pharmacokinetics of the drug oil. |
| popPK | Kamal_2022 | irrelevant | 0 | 0 | The study investigates the chemical composition, antioxidant, and antiproliferative activities of Taraxacum officinale essential oil, but does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| PGx | Kanbar_2023 | not_relevant | 0 | 0 | The paper studies the biosynthesis of fatty acids in amaranth plants, not the pharmacokinetics or pharmacodynamics of a drug in humans. |
| PGx | Karimi_2017 | not_relevant | 0 | 0 | The study investigates the effect of omega-3 supplementation on DNA methylation and explicitly states the results were not related to APOE-4 allele frequency, so it does not report a pharmacogenomic effect. |
| PGx | Kassimi_2026 | not_relevant | 0 | 0 | The paper investigates the chemical composition of fig seed oil based on plant genotype and environment, not the pharmacokinetics or pharmacodynamics of a drug in humans. |
| popPK | Koyama_2026 | irrelevant | 0 | 0 | The paper is a review of plant-derived natural products for dementia and does not report quantitative pharmacokinetic parameters for the drug oil. |
| PD | Koyama_2026 | not_relevant | 1 | 0 | The paper is a narrative review of plant-derived natural products for dementia and does not report any specific pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for any drug or oil. |
| PGx | Krause_1985 | not_relevant | 0 | 0 | The paper studies the pharmacodynamic effects of gemfibrozil on lipids in rats but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Kuentzel_2026 | not_relevant | 0 | 0 | The paper investigates the effect of omega-3 fatty acid supplementation on mitochondrial function in a genetic disease model (Barth syndrome), not the pharmacokinetic or pharmacodynamic effect of a specific drug on a PK/PD parameter. |
| popPK | Kulkarni_2026 | irrelevant | 0 | 0 | The paper is a systematic review of Ayurvedic interventions for insomnia and does not report pharmacokinetic parameters for the drug oil. |
| PGx | Kumar_2019 | not_relevant | 0 | 0 | The paper studies stem cell differentiation and cryopreservation, not pharmacogenomics or drug PK/PD. |
| popPK | Lad_2026 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro bioactivity study of Eucalyptus globulus essential oil, reporting no pharmacokinetic parameters. |
| PGx | Lai_2022 | not_relevant | 0 | 0 | The paper investigates the synergistic anticancer effects of selenium yeast and fish oil on lung cancer cells, not the pharmacogenomic impact of gene variants on the pharmacokinetics or pharmacodynamics of oil. |
| popPK | Lamberti_2026 | irrelevant | 0 | 0 | The paper studies mRNA translation dynamics and ribosome occupancy, not the pharmacokinetics of the drug oil. |
| PD | Lamberti_2026 | not_relevant | 0 | 0 | The paper focuses on single-mRNA translation kinetics and ribosome dynamics using TASEP modeling, not on pharmacodynamic exposure-response relationships for a drug. |
| popPK | Lani_2026 | irrelevant | 0 | 0 | The paper is a review of date palm nutraceuticals and does not report pharmacokinetic parameters for the drug oil. |
| PD | Lani_2026 | not_relevant | 1 | 0 | The paper is a narrative review of nutraceuticals from date palms that explicitly identifies the lack of dose-response data as a gap, without reporting any specific PD models or numeric parameters. |
| popPK | Lee_2018 | irrelevant | 0 | 0 | The study focuses on the physical stabilization and encapsulation of fish oil in an oleogel system, not on pharmacokinetic parameters. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The study is a survey on natural health product usage and coding feasibility, not a pharmacokinetic study, and contains no PK parameters for oil. |
| PD | Lee_2026 | not_relevant | 0 | 0 | The paper is a descriptive epidemiological study analyzing the prevalence of natural health product use and coding feasibility; it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of exenatide (a GLP-1 agonist) in rats, not the drug "oil". |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study investigates the antiviral activity and chemical composition of Myrtus communis essential oil in vitro, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Liju_2014 | not_relevant | 0 | 0 | The paper evaluates the antimutagenic and anticarcinogenic effects of turmeric essential oil and its inhibition of CYP450 enzymes, but does not report any pharmacogenomic effects (gene variant/genotype) on PK or PD parameters. |
| popPK | Lim_2017 | irrelevant | 0 | 0 | The study investigates the association between PM2.5 air pollution constituents and cardiovascular autonomic function, not the pharmacokinetics of the drug oil. |
| popPK | Lim_2022 | irrelevant | 0 | 0 | The paper describes the chemical composition and in-vitro biological activities (antioxidant, antibacterial) of essential oil, not its pharmacokinetic disposition parameters. |
| popPK | Liu_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiotracer 18F-FDG, not the drug oil (which is only used as an irritant to induce inflammation). |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper investigates the chemical composition and biological activities (algicidal, antimicrobial, antioxidant) of plant essential oil, not the pharmacokinetics of a drug named oil. |
| PGx | Liu_2024 | not_relevant | 0 | 0 | The paper studies rapeseed photosynthesis and yield in response to environmental factors (CO2, light), not pharmacogenomics or drug PK/PD. |
| PGx | Long_2022 | not_relevant | 0 | 0 | The paper studies plant metabolomics and grafting in Camellia oleifera, not pharmacogenomics or drug PK/PD. |
| PGx | Mai_2022 | not_relevant | 0 | 0 | The study investigates sex-specific effects of excipients on drug bioavailability in rats, not the effect of a gene variant/genotype on a PK/PD parameter. |
| PGx | Manzke_2018 | not_relevant | 0 | 0 | The paper investigates the efficacy of oil supplementation on growth performance in pigs and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Martišienė_2023 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle relaxation and receptor affinity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Matsuda_2009 | not_relevant | 0 | 0 | The paper studies the effect of a high-fat diet on CYP1A2 expression and tumor development, not the effect of a gene variant on the PK/PD of a drug. |
| popPK | Mbula_2023 | irrelevant | 0 | 0 | The study investigates the nematicidal and antifeedant activity of essential oil, not its pharmacokinetic disposition parameters. |
| popPK | McDonald_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study on cannabis use patterns and does not report pharmacokinetic parameters for oil. |
| popPK | Meyer_2008 | irrelevant | 0 | 0 | The study investigates the nematicidal activity of clove oil on nematodes, not the pharmacokinetics of oil as a drug. |
| popPK | Miah_2026 | irrelevant | 0 | 0 | The paper is a scoping review on dietary interactions with antihypertensive drugs and does not report pharmacokinetic parameters for oil. |
| PD | Miah_2026 | not_relevant | 1 | 0 | The paper is a scoping review of dietary modifications on antihypertensive drug effects, reporting mean blood pressure differences and confidence intervals, but it does not provide pharmacokinetic data or fit a pharmacodynamic model (e.g., Emax, EC50) to derive numeric PD parameters. |
| PGx | Miettinen_1994 | not_relevant | 0 | 0 | The study investigates the effect of dietary plant sterols on cholesterol metabolism in different apolipoprotein E phenotypes, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Milenković_2021 | irrelevant | 0 | 0 | The paper studies the chemical composition and antioxidant activity of essential oils from plants, not the pharmacokinetics of a drug named oil. |
| PD | Milenković_2021 | not_relevant | 2 | 2 | The paper reports EC50 values for antioxidant activity (DPPH assay) of essential oils, which is a chemical potency metric, not a pharmacodynamic exposure-response relationship for a drug in a biological system. |
| popPK | Milenković_2024 | irrelevant | 0 | 0 | The study analyzes the chemical composition and bioactivity of dill seed essential oil, not the pharmacokinetics of a drug named oil. |
| PD | Milenković_2024 | not_relevant | 0 | 0 | The paper reports the chemical composition and bioactivity (antioxidant/antimicrobial) of dill essential oil under different growing conditions, but it does not contain any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or dose-response curves for a drug. |
| PD | Mills_2004 | not_relevant | 0 | 0 | The paper title refers to Tea Tree oil, not the drug 'oil' (likely a placeholder or specific chemical not matching the query context of a general drug named 'oil', or simply a mismatch in the specific entity requested), and typically such in vitro enzyme inhibition studies without PK data are not considered PD in the pharmacokinetic/pharmacodynamic modeling sense unless specific dose-response curves with numeric parameters are explicitly requested for the named entity, but here the entity mismatch or lack of PK context makes it irrelevant to the specific 'oil' PD query. |
| popPK | Ming_2026 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Ming_2026 | not_relevant | 0 | 0 | The paper focuses on the formulation and characterization of a SMEDDS for difelikefalin, and while it mentions PK/PD evaluation, the provided text does not contain any numeric PD parameters, exposure-response data, or dose-response curves. |
| popPK | Mitropoulou_2020 | irrelevant | 0 | 0 | The study investigates the antimicrobial, antioxidant, and antiproliferative properties of essential oil in vitro, not its pharmacokinetic disposition parameters. |
| PGx | Mohan_1991 | not_relevant | 0 | 0 | The paper studies the metabolic effects of dietary oils (coconut, safflower, menhaden) in rats, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Mondal_2023 | not_relevant | 0 | 0 | The study evaluates in vitro metabolism and CYP inhibition of lavender oil but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Mosley_2023 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of a THC/CBD oil for Tourette syndrome, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for the oil itself. |
| PGx | Nachnani_2024 | not_relevant | 0 | 0 | The paper reports drug-drug interactions between cannabinoids and other medications, not pharmacogenomic effects (gene variants) on the PK/PD of oil. |
| PD | Narotsky_1994 | not_relevant | 3 | 1 | The paper describes developmental toxicity and structure-activity relationships but does not report specific numeric dose-response parameters (e.g., ED50, slope) or concentration-effect curves in the provided text. |
| PGx | Nayarisseri_2023 | not_relevant | 0 | 0 | The paper describes the genome of a bacterium used for bioremediation, not a pharmacogenomic effect on a drug's PK/PD. |
| popPK | Ngo_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rivaroxaban and carbamazepine, not the drug 'oil'. |
| PD | Ngo_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model-based prediction of drug-drug interaction (changes in AUC and Cmax) but does not report any pharmacodynamic (PD) or exposure-response relationship for the drug's effect. |
| popPK | Nguyen_2022 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | Nguyen_2022 | not_relevant | 0 | 0 | The paper focuses on the antioxidant potential of seed and kernel marcs, not on the pharmacodynamic or exposure-response relationship of a specific drug. |
| popPK | Nielsen_2023 | irrelevant | 0 | 0 | The paper is a review of ecotoxicology and risk assessment for offshore produced water discharges, not a pharmacokinetic study of a drug named "oil". |
| PD | Nielsen_2023 | not_relevant | 1 | 0 | The paper is a critical review of environmental risk assessment for produced water discharges, reporting EC50/LC50 values for ecotoxicity but lacking any pharmacokinetic or pharmacodynamic modeling of a drug in a biological system. |
| PGx | Nik_2021 | not_relevant | 0 | 0 | The paper investigates the anti-proliferative effects of essential oil on cancer cells in vitro and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Niture_2024 | not_relevant | 0 | 0 | The paper investigates the toxicological effects of ethyltoluenes on liver cells and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Nunes_2021 | irrelevant | 0 | 0 | The study evaluates the antileishmanial activity and mechanism of action of curzerene (a component of essential oil) in vitro, not its pharmacokinetic parameters. |
| PGx | Oi_1994 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a chemotherapy procedure and contains no data on gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Pan_2025 | irrelevant | 2 | 0 | The study reports a two-compartment kinetic model for crude oil accumulation in a bivalve, but no specific numeric parameter values (CL, V, ka, etc.) are provided in the evidence. |
| popPK | Paul_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of propofol, not oil; oil is only mentioned as an excipient in the comparator formulation. |
| popPK | Pedersen_1993 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PGx | Perrone_2025 | not_relevant | 0 | 0 | The paper is a review on the Mediterranean diet and gut microbiota, not a pharmacogenomic study on a drug's PK/PD. |
| popPK | Quarfordt_1973 | irrelevant | 0 | 0 | The study investigates cholesterol and bile acid turnover, using corn oil only as a dietary intervention/comparator rather than as the subject drug for PK parameter estimation. |
| PGx | Radadiya_2021 | not_relevant | 0 | 0 | The paper analyzes transcriptome changes in sesame plants infected with a pathogen, not human pharmacogenomics or drug PK/PD. |
| popPK | Ravuri_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ketoprofen, not oil; oil (eucalyptus) is only a formulation excipient. |
| PGx | Ren_2025 | not_relevant | 0 | 0 | The study investigates the neurobiological mechanisms of lavender's sleep-promoting effects in wild-type mice and does not report any pharmacogenomic effects (gene variant/genotype) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Reyes-Pérez_2024 | not_relevant | 0 | 0 | The study investigates the effect of a genetic variant on the metabolic response to a dietary supplement (omega-3 fatty acids), not a pharmacokinetic or pharmacodynamic parameter of a specific drug. |
| popPK | Rodallec_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for paclitaxel (Ptx) and its polymer prodrug, not for the drug "oil". |
| PGx | Rodolfi_2019 | not_relevant | 0 | 0 | The paper analyzes the chemical composition of hop cones based on growing region, not the pharmacokinetics or pharmacodynamics of a drug in humans. |
| PGx | Rohatagi_1997 | not_relevant | 0 | 0 | The paper compares pharmacokinetics of different formulations (tablet vs. corn-oil suspension) but does not report any pharmacogenomic effects or gene variant analyses. |
| PGx | Roslinsky_2021 | not_relevant | 0 | 0 | The paper reports on plant breeding and fatty acid composition in Brassica carinata, not pharmacogenomics or drug PK/PD parameters. |
| popPK | Ryan_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of PCDFs and PCBs (contaminants) in rice oil, not the pharmacokinetics of oil itself as the subject drug. |
| popPK | Sabahi_2020 | irrelevant | 0 | 0 | The study focuses on the chemical fractionation and in-vitro biological activity (antioxidant, cytotoxicity) of rose oil distillation waste water, not on the pharmacokinetics of the drug oil. |
| PD | Sabahi_2020 | not_relevant | 0 | 0 | The paper reports in vitro bioassay results (IC50/EC50) for a polyphenol-enriched fraction of waste water, not a pharmacodynamic or exposure-response relationship for a specific drug in a biological system. |
| popPK | Sakaeda_1994 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding the drug oil or its pharmacokinetics. |
| popPK | Sampson_1977 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of dopamine effects on carotid bodies, where mineral oil is used only as a recording medium, not as the subject drug for pharmacokinetic analysis. |
| PGx | Saravanakumar_2025 | not_relevant | 0 | 0 | The paper investigates the impact of hepatic steatosis (a disease state) on drug-metabolizing enzymes, not the effect of a specific gene variant/genotype on the pharmacokinetics or pharmacodynamics of oil. |
| popPK | Saxena_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of benzyl chloride, with corn oil serving only as the vehicle for administration. |
| PGx | Sayed_2025 | not_relevant | 0 | 0 | The paper investigates the antifungal efficacy of essential oil combinations against dermatophytes and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Selles_2024 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Selles_2024 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant and scolicidal potencies (likely IC50 or MIC) for an essential oil, which are pharmacological potency metrics, not pharmacodynamic (exposure-response) relationships for a drug in a biological system with PK/PD modeling. |
| popPK | Serri_2025 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of gallstone dissolution efficacy, not a pharmacokinetic study reporting disposition parameters for oil. |
| PD | Serri_2025 | not_relevant | 2 | 1 | The study is an in vitro comparative analysis of dissolution rates at fixed time points and does not report a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-response curve with numeric PD parameters (e.g., Emax, EC50). |
| PGx | Seyed_2023 | not_relevant | 0 | 0 | The paper investigates the effect of biostimulants on plant physiology under salinity stress, not pharmacogenomics or drug PK/PD. |
| PD | Sharkawi_1994 | not_relevant | 3 | 2 | The paper reports qualitative dose-response observations (e.g., equipotency at 5 mmol/kg, MnBK twice as effective as MiBK) but does not provide numeric PD parameters (Emax, EC50) or a fitted concentration-effect curve. |
| popPK | Sharma_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 17α-hydroxyprogesterone caproate (17-OHPC), not for oil (castor oil is only the vehicle). |
| popPK | Sherry_1984 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| PD | Sherry_1984 | not_relevant | 0 | 0 | The paper studies the ecological impact of oil on fungi, not the pharmacodynamic or exposure-response relationship of a drug in a biological system. |
| popPK | Shinto_2024 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of omega-3 fatty acids on brain lesions, not a pharmacokinetic study reporting disposition parameters for oil. |
| popPK | Sikorski_2023 | irrelevant | 0 | 0 | The paper is a systematic review of dietary consumption trends and does not report pharmacokinetic parameters for the drug oil. |
| popPK | Sjölund_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of benzylpenicillin (an antibiotic) in pigs, not the drug "oil". |
| popPK | Softcheck_2021 | irrelevant | 0 | 0 | The study is an ecotoxicology assessment of algal sensitivity to oil, not a pharmacokinetic study of oil as a drug. |
| popPK | Spréa_2024 | irrelevant | 0 | 0 | The study evaluates the chemical composition and in vitro bioactivity (antioxidant, antimicrobial, cytotoxic) of essential oils, but does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Srishti_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro release of tacrolimus, not the pharmacokinetics of oil. |
| PD | Srishti_2026 | not_relevant | 0 | 0 | The paper focuses on the formulation development and in vitro release kinetics of a tacrolimus-loaded hydrogel, with no in vivo pharmacokinetic or pharmacodynamic data or exposure-response analysis. |
| popPK | Staats_1991 | irrelevant | 0 | 0 | The study models the pharmacokinetics of solvents (e.g., trichloroethylene) where corn oil is used only as a vehicle/comparator, not as the subject drug. |
| popPK | Stephan_1995 | irrelevant | 0 | 0 | The study investigates the nephrotoxicity of cyclosporine A using olive oil only as a vehicle, and does not report pharmacokinetic parameters for oil. |
| popPK | Storgaard_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Δ9-tetrahydrocannabinol (THC), not the drug "oil". |
| PD | Storgaard_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for THC and its metabolite, but it does not include any pharmacodynamic (PD) data, exposure-response analysis, or dose-effect relationship. |
| popPK | Sánchez_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cannabidiol (CBD), not oil, which is used only as a vehicle/formulation. |
| popPK | Talath_2026 | irrelevant | 0 | 0 | The paper is a review of natural supplements in breast cancer therapy and does not report pharmacokinetic parameters for the drug oil. |
| PD | Talath_2026 | not_relevant | 1 | 0 | The paper is a narrative review of natural supplements in breast cancer and does not report any specific pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50) for any drug. |
| popPK | Tanner_1982 | irrelevant | 0 | 0 | The study models the pharmacokinetics of inhalation anesthetics, using oil only as a solvent for solubility data, not as the subject drug. |
| PGx | Tao_2024 | not_relevant | 0 | 0 | The paper studies a plant gene (SDP1) in rapeseed, not a human pharmacogenomic effect on a drug's PK/PD. |
| popPK | Tariku_2010 | irrelevant | 0 | 0 | The study reports in vitro antileishmanial activity and toxicity (MIC, EC50, CC50) of a volatile oil, not pharmacokinetic parameters. |
| popPK | Tayebi_2026 | irrelevant | 0 | 0 | The study investigates the lipid-lowering and hepatoprotective effects of basil-enriched soybean oil in mice, reporting metabolic outcomes (cholesterol, triglycerides) rather than pharmacokinetic parameters (CL, V, ka) for the oil itself. |
| PD | Tayebi_2026 | not_relevant | 2 | 0 | The study is a comparative animal trial (4 groups) reporting endpoint biochemical changes (e.g., -75% TC) but lacks any exposure-response modeling, concentration-effect curves, or numeric PD parameters (Emax, EC50). |
| popPK | Teixeira_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meloxicam, not oil. |
| PD | Teixeira_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for meloxicam but does not include any pharmacodynamic (PD) data, exposure-response analysis, or numeric PD parameters. |
| PGx | Torres_2019 | not_relevant | 0 | 0 | The paper investigates bacterial resistance mechanisms to tea tree oil, not human pharmacogenomics or PK/PD parameters. |
| PGx | Trebbi_2019 | not_relevant | 0 | 0 | The paper reports genetic markers for seed toxicity in Jatropha curcas, not pharmacogenomic effects on PK/PD parameters of a drug. |
| popPK | Turner_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone undecanoate, not oil, which is only mentioned as the vehicle. |
| popPK | Uddin_2026 | irrelevant | 0 | 0 | The study investigates the pharmacological activity of a plant extract (Clerodendrum infortunatum) and uses castor oil only as an irritant to induce diarrhea, not as the subject drug for PK analysis. |
| popPK | Urasaki_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of signaling pathways in cell lines and does not report pharmacokinetic parameters (CL, V, ka, etc.) for the oil. |
| PGx | Venâncio_2011 | not_relevant | 0 | 0 | The study evaluates the chemical composition and antinociceptive activity of basil essential oil in mice, but does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Villapiano_2026 | irrelevant | 0 | 0 | The paper is a review of pharmaceutical nanoemulsion formulation and does not report pharmacokinetic parameters for oil as a drug. |
| PD | Villapiano_2026 | not_relevant | 0 | 0 | The paper is a review on the formulation and physicochemical stability of green nanoemulsions and does not report any pharmacodynamic or exposure-response data. |
| popPK | Wan_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a traditional Chinese medicine formula (Mahuang Decoction) in rats, where "Cinnamomum cassia essential oil" is just one of several components, not the sole subject drug "oil". |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper investigates the chemical composition and antimicrobial activity of Litsea cubeba essential oil, not its pharmacokinetics. |
| PGx | Wang_2022_2 | not_relevant | 0 | 0 | The paper investigates a herb-drug interaction (thymoquinone inhibiting CYP2C9) affecting phenytoin PK, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Wang_2022_3 | not_relevant | 0 | 0 | The paper investigates a food-drug interaction (thymoquinone inhibiting CYP2C9) rather than a pharmacogenomic effect (gene variant/genotype) on PK/PD parameters. |
| PGx | Wang_2022_4 | not_relevant | 0 | 0 | The paper reports a genome assembly of the sesame plant, not a pharmacogenomic study of a drug. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study reports toxicological LC50 values and enzyme inhibition data for an essential oil in insects, not pharmacokinetic parameters (CL, V, ka) for a drug. |
| PGx | Weekes_1986 | not_relevant | 0 | 0 | The study investigates the metabolic effects of dietary oils in rats and does not report pharmacogenomic effects on the PK/PD of a specific drug. |
| PGx | Wei_2015 | not_relevant | 0 | 0 | The paper investigates the genetic basis of oil production in sesame plants (crop science), not the pharmacogenomics of a drug's PK/PD parameters in humans. |
| popPK | Wince_1982 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| popPK | Winkler_2025 | irrelevant | 0 | 0 | The study is a clinical trial assessing psychological outcomes (stress/distress) and does not report any pharmacokinetic parameters for the oil. |
| PD | Winkler_2025 | not_relevant | 0 | 0 | The paper is a clinical trial comparing fixed-dose CBD oil to placebo and no-treatment controls; it reports group-level changes in psychological distress scores but does not measure drug concentrations or fit any pharmacodynamic (exposure-response or dose-response) model. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The study investigates the fungicidal efficacy and residue behavior of prothioconazole and its synergist (essential oil) in wheat, not the pharmacokinetics of a drug named "oil". |
| PGx | Xiao_2022 | not_relevant | 0 | 0 | The paper describes an in vitro model of hepatic steatosis and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Xu_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of toltrazuril (an anticoccidial drug) in oil-based formulations, not the pharmacokinetics of oil itself as the subject drug. |
| popPK | Yaima-Yate_2026 | irrelevant | 0 | 0 | The paper is a systematic review of antileishmanial activity (IC50/EC50) of plant extracts, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for oil. |
| PD | Yaima-Yate_2026 | not_relevant | 3 | 5 | The paper is a systematic review that reports IC50/EC50 values for plant extracts, but it does not present a formal pharmacodynamic model (e.g., Emax, slope) or a simultaneous PK/PD fit for a specific drug. |
| PGx | Yang_2018 | not_relevant | 0 | 0 | The paper investigates the mechanism of hepatotoxicity and CYP1A2 inhibition by safrole but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Yang_2022 | not_relevant | 0 | 0 | The text is metadata from the GROBID software and does not contain any scientific content regarding pharmacogenomics or pharmacokinetics. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a review of PBPK modeling trends in China and does not report specific pharmacokinetic parameters for the drug oil. |
| PD | Yang_2025 | not_relevant | 0 | 0 | The paper is a bibliometric review of PBPK modeling in China and does not report any specific pharmacodynamic or exposure-response data for a drug. |
| PGx | Yeo_2025 | not_relevant | 0 | 0 | The paper reports on the clinical management and outcomes of citrin deficiency, noting the use of MCT oil as a standard treatment, but it does not investigate how genetic variants affect the pharmacokinetics or pharmacodynamics of the oil. |
| PGx | York_1984 | not_relevant | 2 | 5 | The study reports a pharmacogenomic effect on toxicity (mortality/survival) rather than a specific pharmacokinetic or pharmacodynamic parameter of the drug itself. |
| PGx | Yoshioka_2018 | not_relevant | 0 | 0 | The study investigates the hepatoprotective mechanisms of kamebakaurin and its derivative against acetaminophen toxicity in mice, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of oil. |
| PGx | Yu_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacological mechanism of luteolin in a mouse model and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Yuan_2020 | irrelevant | 0 | 0 | The study investigates the environmental desorption kinetics of oil from marine sediment, not the pharmacokinetics of oil as a drug in a biological subject. |
| PGx | Yuba_1995 | not_relevant | 0 | 0 | The paper analyzes the genetic basis of essential oil biosynthesis in plants, not the pharmacogenomics of drug metabolism or response in humans. |
| popPK | Zhakipbekov_2026 | irrelevant | 0 | 0 | The paper is a review of the plant Cirsium arvense and does not report pharmacokinetic parameters for the drug oil. |
| PD | Zhakipbekov_2026 | not_relevant | 1 | 0 | The paper is a narrative review of the phytochemistry and traditional uses of Cirsium arvense and explicitly identifies the lack of pharmacokinetic and clinical validation data as a research gap, containing no numeric PD parameters. |
| PGx | Zhao_2022 | not_relevant | 0 | 0 | The paper focuses on the genome-wide identification of oil-body-membrane proteins in rapeseed for agricultural breeding, not on pharmacogenomics or drug pharmacokinetics/pharmacodynamics. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The study evaluates the anthelmintic efficacy and toxicity of essential oils against fish parasites, not the pharmacokinetic disposition parameters (CL, V, etc.) of the oils. |
| popPK | Zhu_2023 | irrelevant | 0 | 0 | The paper studies fungicide resistance in fungi on tea-oil trees, not the pharmacokinetics of a drug named oil. |
| popPK | da_2018 | irrelevant | 0 | 0 | The study investigates the vasorelaxant pharmacodynamic effects of Lippia alba essential oil on isolated rat aorta, not its pharmacokinetic disposition parameters. |
| PGx | de_2021 | not_relevant | 0 | 0 | The paper investigates the biosynthesis of phorbol esters in Jatropha curcas using proteomics, not the pharmacokinetics or pharmacodynamics of a drug in humans. |
| popPK | do_2021 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | do_2021 | not_relevant | 0 | 0 | The paper evaluates antimicrobial and antioxidant potential (likely MICs or IC50s for biological assays) but does not report a pharmacokinetic/pharmacodynamic (PK/PD) model or exposure-response relationship for a drug in a physiological context. |
| PD | van_1993 | not_relevant | 1 | 0 | The text is a qualitative review of the pharmacokinetics of anabolic steroids and mentions that absorption rate is relevant to the pharmacodynamic pattern, but it provides no numeric PD parameters, dose-response data, or concentration-effect curves. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
