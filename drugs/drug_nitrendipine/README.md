<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;nitrendipine&quot;}]"></div>

# nitrendipine

- **generic name:** nitrendipine
- **ATC codes:** `C08CA08`, `C09BB06`
- **DrugBank:** [DB01054](https://go.drugbank.com/drugs/DB01054) · **PubChem:** [CID 4507](https://pubchem.ncbi.nlm.nih.gov/compound/4507)
- **molar mass:** 360.3612 g/mol (C18H20N2O6) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Nitrendipine is a dihydropyridine calcium channel blocker used to treat high blood pressure. It remains an approved medicine, used mainly for hypertension, and is also available in combination products with ACE inhibitors.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416584](https://www.wikidata.org/wiki/Q416584) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Baydoun_1990_Ca2_efflux](drugs/drug_nitrendipine/pd_Baydoun_1990_Ca2_efflux.md) | Ca2+ efflux ← nitrendipine · direct Emax (saturable) effect | — | Baydoun AR et al., Bay K 8644, modifier of calcium transpo…, British journal of pharmaco… (1990) | [10.1111/j.1476-5381.1990.tb12081.x](https://doi.org/10.1111/j.1476-5381.1990.tb12081.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Baydoun_1990_State_4_respiration](drugs/drug_nitrendipine/pd_Baydoun_1990_State_4_respiration.md) | State 4 respiration ← nitrendipine · stimulation effect | — | Baydoun AR et al., Bay K 8644, modifier of calcium transpo…, British journal of pharmaco… (1990) | [10.1111/j.1476-5381.1990.tb12081.x](https://doi.org/10.1111/j.1476-5381.1990.tb12081.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Soons_1993_HR](drugs/drug_nitrendipine/pd_Soons_1993_HR.md) | heart rate ← nitrendipine · direct sigmoid Emax (Hill) effect | — | Soons PA et al., Comparative effects of felodipine, nitr…, European journal of clinica… (1993) | [10.1007/BF00315467](https://doi.org/10.1007/BF00315467) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **KCNH2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [He_2013](drugs/drug_nitrendipine/pgx_He_2013_KCNH2_Q100.md) | He F et al., The KCNH2 genetic polymorphism (1956, C…, PloS one (2013) | [10.1371/journal.pone.0061317](https://doi.org/10.1371/journal.pone.0061317) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nitrendipine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor, `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1H (inhibitor), CACNA1S (inhibitor), CACNA2D1 (inhibitor), CACNA2D2 (inhibitor), CACNB2 (inhibitor), KCNH2 (target), KCNMA1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:57 | 4:33 | 0/0/0 | 0/2/0 | 0/0/1 | 129,847/6,249 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 7/5 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 483 matched, 130 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_31 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhu_1990.pdf` | Zhu ZY et al., [Studies on the bioavailability of nitr…, Yao xue xue bao = Acta phar… (1990) | popPK | 8 |  | [2092581](https://pubmed.ncbi.nlm.nih.gov/2092581) | The study reports in vivo pharmacokinetic parameters for nitrendipine in humans, but the specific numeric values for CL, V, or ka are not present in the provided evidence, only bioavailability percentages. |
| `Grover_1994.pdf` | Grover AK et al., Angiotensin II contractions in coronary…, Molecular and cellular bioc… (1994) | pd | 5 | [10.1007/BF00925957](https://doi.org/10.1007/BF00925957) | [7816052](https://www.ncbi.nlm.nih.gov/pubmed/7816052) | metadata signals extractable PD data (EC50) |
| `Nielsen-Kudsk_1987.pdf` | Nielsen-Kudsk F et al., A comparative study of the pharmacodyna…, Pharmacology & toxicology (1987) | pd | 5 | [10.1111/j.1600-0773.1987.tb01732.x](https://doi.org/10.1111/j.1600-0773.1987.tb01732.x) | [3588513](https://www.ncbi.nlm.nih.gov/pubmed/3588513) | metadata signals extractable PD data (Emax) |
| `Soons_1993.pdf` | Soons PA et al., Comparative effects of felodipine, nitr…, European journal of clinica… (1993) | pd | 5 | [10.1007/BF00315467](https://doi.org/10.1007/BF00315467) | [8453956](https://www.ncbi.nlm.nih.gov/pubmed/8453956) | metadata signals extractable PD data (concentration-effect) |
| `Zernig_1992.pdf` | Zernig G et al., Ion dependence of the partially purifie…, Molecular pharmacology (1992) | pd | 5 |  | [1310145](https://www.ncbi.nlm.nih.gov/pubmed/1310145) | metadata signals extractable PD data (EC50) |
| `Andrejauskas_1986.pdf` | Andrejauskas E et al., 3,4,5-Triiodobenzoic acid affects [3H]v…, Biochemical and biophysical… (1986) | pd | 4 | [10.1016/s0006-291x(86)80420-x](https://doi.org/10.1016/s0006-291x(86)80420-x) | [3753496](https://www.ncbi.nlm.nih.gov/pubmed/3753496) | metadata signals extractable PD data (EC50) |
| `Boarder_1991.pdf` | Boarder MR et al., Endothelin-1 stimulation of noradrenali…, Biochemical pharmacology (1991) | pd | 4 | [10.1016/0006-2952(91)90623-d](https://doi.org/10.1016/0006-2952(91)90623-d) | [1705122](https://www.ncbi.nlm.nih.gov/pubmed/1705122) | metadata signals extractable PD data (EC50) |
| `Borges_1993.pdf` | Borges R, Ionic mechanisms involved in the secret…, European journal of pharmac… (1993) | pd | 4 | [10.1016/0014-2999(93)90202-s](https://doi.org/10.1016/0014-2999(93)90202-s) | [7694862](https://www.ncbi.nlm.nih.gov/pubmed/7694862) | metadata signals extractable PD data (EC50) |
| `Castillo_1989.pdf` | Castillo CJ et al., (+)-PN200-110 and ouabain binding sites…, Journal of neurochemistry (1989) | pd | 4 | [10.1111/j.1471-4159.1989.tb08536.x](https://doi.org/10.1111/j.1471-4159.1989.tb08536.x) | [2529351](https://www.ncbi.nlm.nih.gov/pubmed/2529351) | metadata signals extractable PD data (IC50) |
| `Challiss_1991.pdf` | Challiss RA et al., Depolarization and agonist-stimulated c…, Journal of neurochemistry (1991) | pd | 4 | [10.1111/j.1471-4159.1991.tb08255.x](https://doi.org/10.1111/j.1471-4159.1991.tb08255.x) | [1861143](https://www.ncbi.nlm.nih.gov/pubmed/1861143) | metadata signals extractable PD data (EC50) |
| `Chouabe_1998.pdf` | Chouabe C et al., HERG and KvLQT1/IsK, the cardiac K+ cha…, Molecular pharmacology (1998) | pd | 4 |  | [9765513](https://www.ncbi.nlm.nih.gov/pubmed/9765513) | metadata signals extractable PD data (EC50) |
| `Chouabe_2000.pdf` | Chouabe C et al., Effects of calcium channel blockers on…, Therapie (2000) | pd | 4 |  | [10860024](https://www.ncbi.nlm.nih.gov/pubmed/10860024) | metadata signals extractable PD data (EC50) |
| `Elmoselhi_1997.pdf` | Elmoselhi AB et al., Endothelin contraction in pig coronary…, Molecular and cellular bioc… (1997) | pd | 4 |  | [9406141](https://www.ncbi.nlm.nih.gov/pubmed/9406141) | metadata signals extractable PD data (EC50) |
| `Flockerzi_1986.pdf` | Flockerzi V et al., Purification of a functional receptor f…, European journal of biochem… (1986) | pd | 4 | [10.1111/j.1432-1033.1986.tb10145.x](https://doi.org/10.1111/j.1432-1033.1986.tb10145.x) | [3023084](https://www.ncbi.nlm.nih.gov/pubmed/3023084) | metadata signals extractable PD data (EC50) |
| `Litzinger_1986.pdf` | Litzinger MJ et al., [3H]-tetrodotoxin binding in neuronal a…, Biochemical and biophysical… (1986) | pd | 4 | [10.1016/s0006-291x(86)80417-x](https://doi.org/10.1016/s0006-291x(86)80417-x) | [2428363](https://www.ncbi.nlm.nih.gov/pubmed/2428363) | metadata signals extractable PD data (IC50) |
| `Mazeaud_1994.pdf` | Mazeaud MM et al., Platelet aggregation and in vivo shear…, Thrombosis and haemostasis (1994) | pd | 4 |  | [8165643](https://www.ncbi.nlm.nih.gov/pubmed/8165643) | metadata signals extractable PD data (EC50) |
| `Pliego_2006.pdf` | Pliego RG et al., Vasodilator effects of bis-dihydropyrid…, Medicinal chemistry (Shariq… (2006) | pd | 4 | [10.2174/157340606778250243](https://doi.org/10.2174/157340606778250243) | [17017993](https://www.ncbi.nlm.nih.gov/pubmed/17017993) | metadata signals extractable PD data (concentration-effect) |
| `Pong_1985.pdf` | Pong SF et al., Effect of dantrolene sodium on [3H]nitr…, The Journal of pharmacy and… (1985) | pd | 4 | [10.1111/j.2042-7158.1985.tb04981.x](https://doi.org/10.1111/j.2042-7158.1985.tb04981.x) | [2867170](https://www.ncbi.nlm.nih.gov/pubmed/2867170) | metadata signals extractable PD data (IC50) |
| `Schaberg_1991.pdf` | Schaberg T et al., Evidence for a platelet-activating fact…, Biochemical and biophysical… (1991) | pd | 4 | [10.1016/0006-291x(91)91845-4](https://doi.org/10.1016/0006-291x(91)91845-4) | [1646607](https://www.ncbi.nlm.nih.gov/pubmed/1646607) | metadata signals extractable PD data (EC50) |
| `St-Louis_1995.pdf` | St-Louis J et al., Decreased response to vasopressin in th…, Journal of the Society for… (1995) | pd | 4 | [10.1016/1071-5576(94)00059-a](https://doi.org/10.1016/1071-5576(94)00059-a) | [9420852](https://www.ncbi.nlm.nih.gov/pubmed/9420852) | metadata signals extractable PD data (EC50) |
| `Steinsland_1985.pdf` | Steinsland OS et al., Comparative effects of nitrendipine and…, Journal of cardiovascular p… (1985) | pd | 4 | [10.1097/00005344-198509000-00028](https://doi.org/10.1097/00005344-198509000-00028) | [2413313](https://www.ncbi.nlm.nih.gov/pubmed/2413313) | metadata signals extractable PD data (EC50) |
| `Sze_1994.pdf` | Sze PY et al., Glucocorticoid action on depolarization…, Neuroendocrinology (1994) | pd | 4 | [10.1159/000126692](https://doi.org/10.1159/000126692) | [8022521](https://www.ncbi.nlm.nih.gov/pubmed/8022521) | metadata signals extractable PD data (EC50) |
| `Wei_1996.pdf` | Wei L et al., CHEB, a convulsant barbiturate, evokes…, Neuropharmacology (1996) | pd | 4 | [10.1016/0028-3908(96)84641-7](https://doi.org/10.1016/0028-3908(96)84641-7) | [8887978](https://www.ncbi.nlm.nih.gov/pubmed/8887978) | metadata signals extractable PD data (EC50) |
| `Wong_1993.pdf` | Wong PC et al., Pharmacology of 2-amino-1,4-dihydro-4-(…, The Journal of pharmacology… (1993) | pd | 4 |  | [8099616](https://www.ncbi.nlm.nih.gov/pubmed/8099616) | metadata signals extractable PD data (IC50) |
| `Ozdemir_2000.pdf` | Ozdemir V et al., Evaluation of the genetic component of…, Pharmacogenetics (2000) | pgx | 8 | [10.1097/00008571-200007000-00001](https://doi.org/10.1097/00008571-200007000-00001) | [10898107](https://www.ncbi.nlm.nih.gov/pubmed/10898107) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Bailey_2004.pdf` | Bailey DG et al., Interactions between grapefruit juice a…, American journal of cardiov… (2004) | pgx | 7 | [10.2165/00129784-200404050-00002](https://doi.org/10.2165/00129784-200404050-00002) | [15449971](https://www.ncbi.nlm.nih.gov/pubmed/15449971) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chen_2025.pdf` | Chen X et al., Inhibitory effects of nimodipine, nitre…, Biochemical pharmacology (2025) | pgx | 7 | [10.1016/j.bcp.2025.116854](https://doi.org/10.1016/j.bcp.2025.116854) | [40054784](https://www.ncbi.nlm.nih.gov/pubmed/40054784) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Klotz_2002.pdf` | Klotz U, Interaction potential of lercanidipine,…, Arzneimittel-Forschung (2002) | pgx | 7 | [10.1055/s-0031-1299873](https://doi.org/10.1055/s-0031-1299873) | [11963641](https://www.ncbi.nlm.nih.gov/pubmed/11963641) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ozdemir_1998.pdf` | Ozdemir M et al., Interaction between grapefruit juice an…, European journal of drug me… (1998) | pgx | 7 | [10.1007/BF03189827](https://doi.org/10.1007/BF03189827) | [9625273](https://www.ncbi.nlm.nih.gov/pubmed/9625273) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Voruganti_2012.pdf` | Voruganti S et al., Effect of pomegranate juice on intestin…, Phytotherapy research : PTR (2012) | pgx | 7 | [10.1002/ptr.3704](https://doi.org/10.1002/ptr.3704) | [22275232](https://www.ncbi.nlm.nih.gov/pubmed/22275232) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Wang_2007.pdf` | Wang XD et al., Rapid and simultaneous determination of…, Journal of chromatography.… (2007) | pgx | 7 | [10.1016/j.jchromb.2007.02.026](https://doi.org/10.1016/j.jchromb.2007.02.026) | [17339138](https://www.ncbi.nlm.nih.gov/pubmed/17339138) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07 04:54 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Alam_2022 | not_relevant | 0 | 0 | The paper investigates amlodipine, not nitrendipine, and only reports mean blood pressure changes without deriving specific concentration-effect or dose-response parameters for nitrendipine. |
| popPK | Andrejauskas_1986 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Andrejauskas_1986 | not_relevant | 0 | 0 | The paper studies the effect of 3,4,5-triiodobenzoic acid on verapamil binding and muscle contraction, and does not report any pharmacodynamic or exposure-response data for nitrendipine. |
| PD | Aouam_2003 | not_relevant | 1 | 0 | The text is a qualitative review of dihydropyridine generations and does not report any numeric pharmacodynamic parameters or exposure-response data for nitrendipine. |
| PD | Arispe_2010 | not_relevant | 0 | 0 | The paper focuses on the PD of a peptide inhibitor (NAHis04) on Abeta channels; nitrendipine is only mentioned as a negative control for voltage-gated channels, with no exposure-response or dose-response analysis performed for it. |
| PD | Atwal_1987 | not_relevant | 2 | 2 | The paper reports in vitro IC50 values for novel analogs and mentions [3H]nitrendipine only as a radioligand for binding studies, but does not provide a pharmacodynamic exposure-response or dose-response model for nitrendipine itself. |
| PGx | Bailey_2004 | not_relevant | 0 | 0 | The paper discusses drug-food interactions (grapefruit juice) and does not report any pharmacogenomic effects (gene variants) on nitrendipine PK/PD. |
| popPK | Barksmann_2004 | irrelevant | 0 | 0 | The study investigates the pharmacology of a red cell ion channel and uses nitrendipine only as a negative control/comparator, reporting no pharmacokinetic parameters. |
| PD | Barksmann_2004 | not_relevant | 0 | 0 | The paper explicitly states that nitrendipine had no effects on the channel, and no PD parameters are reported for it. |
| PGx | Bastianetto_2000 | not_relevant | 0 | 0 | The paper investigates the neuroprotective mechanisms of Ginkgo biloba extract and uses nitrendipine only as a tool compound to inhibit L-type calcium channels; it does not report any pharmacogenomic effects on the PK or PD of nitrendipine. |
| popPK | Baydoun_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial function in rat heart, not a pharmacokinetic study of nitrendipine. |
| PD | Belic_2005 | not_relevant | 4 | 2 | The paper describes using an artificial neural network to model the relationship, which is a non-parametric approach that does not yield standard numeric PD parameters like Emax or EC50, and the provided text does not contain the specific numeric output data or curve. |
| PD | Bernstein_1995 | not_relevant | 3 | 2 | The paper reports dose-response curves (ED50) for morphine and Bay K 8644, and binding parameters (Bmax/Kd) for nitrendipine, but does not report a pharmacodynamic exposure-response relationship (concentration-effect) for nitrendipine itself. |
| popPK | Bischoff_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sphingolipid-induced vasoconstriction where nitrendipine is used only as a pharmacological tool to block calcium channels, not as the subject of pharmacokinetic analysis. |
| PD | Bischoff_2000 | not_relevant | 0 | 0 | The paper reports PD parameters for sphingolipids (SPP/SPPC), not nitrendipine; nitrendipine is only used as a pharmacological tool to inhibit the sphingolipid effect. |
| popPK | Boarder_1991 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Boarder_1991 | not_relevant | 0 | 0 | The paper investigates the mechanism of catecholamine release from adrenal chromaffin cells stimulated by Endothelin-1 and does not mention nitrendipine or report any pharmacodynamic parameters for it. |
| popPK | Borges_1993 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Borges_1993 | not_relevant | 0 | 0 | The paper focuses on the ionic mechanisms of histamine in rat adrenal medulla and does not mention nitrendipine or report any pharmacodynamic parameters for it. |
| popPK | Bouthier_1985 | irrelevant | 0 | 0 | The study focuses on hemodynamic and echocardiographic parameters (cardiac hypertrophy, arterial distensibility) rather than pharmacokinetic disposition parameters for nitrendipine. |
| PD | Bouthier_1985 | not_relevant | 1 | 0 | The paper compares the effects of two drugs on arterial distensibility qualitatively but does not provide concentration-effect data, dose-response curves, or numeric PD parameters for nitrendipine. |
| PGx | Brogden_1995 | not_relevant | 0 | 0 | The text consists of a list of references regarding streptokinase and thrombolytic therapy, plus errata for other drugs, and contains no information about nitrendipine or pharmacogenomics. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report quantitative pharmacokinetic parameters for nitrendipine. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain specific data, models, or numeric parameters for nitrendipine. |
| popPK | Castillo_1989 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Castillo_1989 | not_relevant | 0 | 0 | The paper focuses on the binding properties of (+)-PN200-110 and ouabain in bovine membranes and does not contain any pharmacodynamic or exposure-response data for nitrendipine. |
| popPK | Cena_2001 | irrelevant | 0 | 0 | The study is a pharmacological characterization of new hybrid compounds using nitrendipine only as a radioligand for binding assays, with no pharmacokinetic parameters reported. |
| PD | Cena_2001 | not_relevant | 0 | 0 | The paper reports in vitro pharmacological data (EC50/IC50) for novel hybrid compounds, not a pharmacodynamic or exposure-response model for nitrendipine itself. |
| popPK | Challiss_1991 | irrelevant | 0 | 0 | no_text gate: only 157 chars of text extracted (&lt; 400) |
| PD | Challiss_1991 | not_relevant | 0 | 0 | The paper focuses on inositol phosphate accumulation in rat cerebral cortex and does not mention nitrendipine or report any pharmacodynamic or exposure-response relationships for it. |
| popPK | Chen_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular contraction in rat mesenteric microvessels, using nitrendipine only as a calcium channel blocker tool compound, not as the subject of a pharmacokinetic analysis. |
| PD | Chen_1996 | not_relevant | 0 | 0 | The paper studies the contractile effects of noradrenaline and NPY; nitrendipine is used only as a tool compound to characterize receptor mechanisms, and no exposure-response or dose-response relationship for nitrendipine itself is reported. |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper focuses on in vitro inhibition of tamoxifen metabolism by nitrendipine and molecular docking, not on pharmacodynamic exposure-response or dose-response relationships in vivo. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (inhibition of tamoxifen metabolism by nitrendipine) and does not report any pharmacogenomic effects (gene variants) on nitrendipine's PK or PD parameters. |
| popPK | Chouabe_1998 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Chouabe_1998 | not_relevant | 0 | 0 | The paper discusses the mechanism of action (HERG/KvLQT1 channel blockade) of calcium channel blockers but does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for nitrendipine. |
| popPK | Chouabe_2000 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PD | Chouabe_2000 | not_relevant | 0 | 0 | The paper focuses on the effects of calcium channel blockers on cloned cardiac K+ channels and does not report pharmacodynamic or exposure-response data for nitrendipine. |
| popPK | Craviso_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gene expression in bovine cells where nitrendipine is used only as a pharmacological tool to block calcium channels, not as the subject of a pharmacokinetic analysis. |
| PD | Craviso_1992 | not_relevant | 0 | 0 | The paper studies nicotinic cholinergic regulation of gene expression in cells; nitrendipine is used only as a qualitative blocker of transcription, with no exposure-response or dose-response analysis for nitrendipine. |
| popPK | Criscione_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular reactivity to endothelin-1, using nitrendipine only as a calcium channel blocker tool compound, and reports no pharmacokinetic parameters. |
| PD | Criscione_1990 | not_relevant | 2 | 1 | The paper reports EC50 values for the agonist (endothelin-1) but only provides qualitative descriptions of the inhibitory effects of nitrendipine (partial inhibition) without numeric PD parameters (e.g., IC50, Emax) for the drug itself. |
| popPK | Dedos_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of second messenger systems in insect prothoracic glands where nitrendipine is used solely as a calcium channel antagonist, not as the subject of pharmacokinetic analysis. |
| popPK | Elmoselhi_1997 | irrelevant | 0 | 0 | The study is a pharmacological investigation of endothelin receptors in pig coronary arteries where nitrendipine is used only as a tool compound (L-type Ca2+ channel blocker), not as the subject of pharmacokinetic analysis. |
| PD | Elmoselhi_1997 | not_relevant | 0 | 0 | The paper studies endothelin receptor pharmacology in pig coronary arteries; nitrendipine is used only as a qualitative L-type calcium channel blocker to assess calcium sources, not as the subject of a PD or exposure-response analysis. |
| popPK | Escubedo_1992 | irrelevant | 0 | 0 | The study characterizes benzodiazepine binding sites in rat vas deferens and uses nitrendipine only as a non-competitive inhibitor in a binding assay, not as a subject for pharmacokinetic analysis. |
| PD | Escubedo_1992 | not_relevant | 0 | 0 | The paper describes radioligand binding kinetics and inhibition by nitrendipine, but does not report a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters (e.g., Emax, EC50) for the drug's physiological effect. |
| popPK | Flockerzi_1986 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Flockerzi_1986 | not_relevant | 0 | 0 | The paper focuses on the purification and characterization of a calcium-channel blocker receptor from rabbit skeletal muscle microsomes, not on pharmacodynamic modeling or exposure-response relationships for nitrendipine in a physiological or clinical context. |
| PGx | Fuhr_1998 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions with grapefruit juice, not pharmacogenomic effects of gene variants on nitrendipine PK/PD. |
| popPK | Gao_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolate sodium, not nitrendipine. |
| PD | Gao_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the external validation of population pharmacokinetic (popPK) models for mycophenolate sodium and contains no pharmacodynamic (PD) or exposure-response analysis for nitrendipine. |
| PD | Gopalakrishnan_1985 | not_relevant | 0 | 0 | The paper reports PD parameters (ED50, IC50) for Bay K-8644, not nitrendipine; nitrendipine is only mentioned as a radioligand for binding displacement. |
| popPK | Grover_1994 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | Grover_1994 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of Angiotensin II receptors and calcium pools in coronary arteries and does not report any pharmacodynamic or exposure-response data for nitrendipine. |
| popPK | Grundeis_2023 | irrelevant | 0 | 0 | The paper is a systematic review of remdesivir for COVID-19 and contains no data for nitrendipine. |
| PD | Grundeis_2023 | not_relevant | 0 | 0 | The paper is a systematic review of clinical outcomes for remdesivir and contains no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for nitrendipine. |
| PD | Gubin_1993 | not_relevant | 1 | 1 | The paper reports an IC50 value for a new compound's inhibition of nitrendipine binding, which is a pharmacological potency assay, not a pharmacodynamic exposure-response or dose-response relationship for nitrendipine itself. |
| PD | Guse_1997 | not_relevant | 1 | 0 | The paper mentions nitrendipine only as a positive control that dose-dependently antagonized Ca2+ signaling, but provides no numeric PD parameters (IC50, Emax, etc.) or concentration-effect data for nitrendipine. |
| PGx | Ha_2026 | not_relevant | 2 | 0 | The paper reports clinical outcomes (blood pressure control) and general drug responsiveness percentages for a cohort, but does not report specific pharmacokinetic or pharmacodynamic parameter changes driven by specific gene variants for nitrendipine. |
| popPK | Jin_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of opioid effects on calcium channels where nitrendipine is used only as a pharmacological tool to block calcium influx, not as the subject of PK analysis. |
| PD | Jin_1992 | not_relevant | 0 | 0 | The paper studies opioid effects on calcium in cells; nitrendipine is used only as a qualitative blocker (1 µM) to identify channel type, with no dose-response or PD parameters reported for nitrendipine. |
| popPK | Kenny_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium channel antagonism in guinea-pig tissue and rat membranes, containing no pharmacokinetic parameters for nitrendipine. |
| PD | Kenny_1990 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of fluspirilene and its interaction with calcium channel activators; nitrendipine is used only as a reference antagonist, and no exposure-response or dose-response PD model/parameters for nitrendipine are reported. |
| popPK | Kim_1997 | irrelevant | 0 | 0 | Nitrendipine is used only as a pharmacological tool to block calcium entry in an in-vitro mechanistic study of agouti regulation, with no PK parameters reported. |
| PD | Kim_1997 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for agouti, not nitrendipine; nitrendipine is only mentioned as a qualitative blocker of calcium entry. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of evogliptin, not nitrendipine. |
| PD | Kim_2025 | not_relevant | 0 | 0 | The paper reports a PD model for evogliptin, not nitrendipine. |
| PD | Kirch_1988 | not_relevant | 2 | 1 | The study reports qualitative changes in heart rate and PK parameters but does not provide numeric concentration-effect data or fit a PD model to derive parameters like Emax or EC50. |
| PD | Klotz_2002 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacokinetic interaction potentials (CYP3A4/P-gp) and general pharmacodynamic cautions, containing no numeric PD parameters or exposure-response data for nitrendipine. |
| PGx | Klotz_2002 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP3A4/P-gp) for lercanidipine and other dihydropyridines, but does not report pharmacogenomic effects (gene variants) on nitrendipine PK/PD. |
| popPK | Lawson_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium channel mechanisms in rat aortic rings, not a pharmacokinetic study, and nitrendipine is used only as a tool compound. |
| PD | Lawson_1989 | not_relevant | 0 | 0 | The paper reports that nitrendipine failed to modify the calcium-induced contraction, indicating a lack of effect rather than a quantifiable exposure-response relationship with numeric PD parameters. |
| popPK | Liang_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of m-nifedipine, using nitrendipine only as an internal standard. |
| PD | Litzinger_1986 | not_relevant | 0 | 0 | The paper studies [3H]-tetrodotoxin binding and mentions nitrendipine only to state it did not displace the binding, providing no exposure-response or dose-response data for nitrendipine. |
| popPK | Lubic_1994 | irrelevant | 0 | 0 | The study investigates the pharmacological interaction of amiodarone with calcium channels using nitrendipine as a radioligand, not the pharmacokinetics of nitrendipine. |
| popPK | Malva_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotransmitter release in rat hippocampal synaptosomes, using nitrendipine only as a calcium channel blocker tool compound, and reports no pharmacokinetic parameters. |
| PD | Malva_1994 | not_relevant | 0 | 0 | The paper studies glutamate receptor pharmacology in hippocampal synaptosomes; nitrendipine is only mentioned as a negative control for Ca2+ channel blockade and no exposure-response or dose-response relationship for nitrendipine is reported. |
| PGx | Mansoor_2023 | not_relevant | 0 | 0 | The paper discusses the effect of pomegranate juice (a food/dietary supplement) on nitrendipine pharmacokinetics, not the effect of a gene variant/genotype/phenotype. |
| popPK | Mazeaud_1994 | irrelevant | 0 | 0 | no_text gate: only 45 chars of text extracted (&lt; 400) |
| PD | Mazeaud_1994 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding nitrendipine or any other drug. |
| popPK | Milligan_2002 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of sildenafil citrate, not nitrendipine. |
| PD | Milligan_2002 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of sildenafil, not nitrendipine, and reports no pharmacodynamic or exposure-response data. |
| PGx | Mitsui_2014 | not_relevant | 0 | 0 | The paper validates a transgenic mouse model for predicting human clearance and does not report pharmacogenomic effects of human gene variants on nitrendipine PK/PD. |
| popPK | Mutafova-Yambolieva_1993 | irrelevant | 0 | 0 | The study is a pharmacological investigation of adrenoceptor-mediated contractile responses in isolated rat vas deferens, not a pharmacokinetic study of nitrendipine. |
| PD | Mutafova-Yambolieva_1993 | not_relevant | 2 | 1 | The paper mentions nitrendipine only qualitatively (inhibitory effect increased), without providing numeric concentration-effect parameters or a PD model for nitrendipine. |
| popPK | Nielsen-Kudsk_1987 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| popPK | OFarrell_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channels in bovine cells where nitrendipine is used only as a pharmacological tool, not as the subject of PK analysis. |
| PD | OFarrell_1999 | not_relevant | 1 | 0 | The paper uses nitrendipine as a qualitative pharmacological tool to block calcium channels in a cellular assay, reporting no dose-response curve or numeric PD parameters for nitrendipine itself. |
| popPK | Odum_1987 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of nitrendipine's effect on angiotensin II-induced contractions in human chorionic plate arteries, reporting no pharmacokinetic parameters. |
| PGx | Ozdemir_1998 | not_relevant | 0 | 0 | The study investigates the effect of grapefruit juice on diazepam pharmacokinetics, not the effect of a gene variant on nitrendipine. |
| PGx | Ozdemir_2000 | not_relevant | 2 | 0 | The paper estimates the general genetic component of CYP3A4 variability using nitrendipine as a probe but does not report specific gene variants or their effects on nitrendipine PK parameters. |
| popPK | Payza_1991 | irrelevant | 0 | 0 | The study is a mechanistic investigation of hormone secretion in rat neurohypophysis where nitrendipine is used only as a calcium channel blocker, not as the subject drug for PK analysis. |
| PD | Payza_1991 | not_relevant | 1 | 0 | The paper mentions nitrendipine only as a qualitative inhibitor of calcium channels in a physiological secretion assay, without providing any numeric dose-response or concentration-effect parameters for the drug itself. |
| popPK | Pliego_2006 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| PD | Pliego_2006 | not_relevant | 0 | 0 | The paper focuses on bis-dihydropyridines structurally related to nifedipine and does not report pharmacodynamic or exposure-response data for nitrendipine. |
| PD | Pong_1985 | not_relevant | 3 | 2 | The paper reports in vitro binding inhibition data (IC50s) for nitrendipine and other drugs, but does not provide a pharmacodynamic exposure-response model or dose-effect curve for nitrendipine itself in a physiological context. |
| PGx | Qian_2009 | not_relevant | 0 | 0 | The paper studies the metabolism of ligustilide, using nitrendipine only as an internal standard, and does not report pharmacogenomic effects on nitrendipine PK/PD. |
| popPK | Ragazzi_1989 | irrelevant | 0 | 0 | The study investigates methylxanthine derivatives, and nitrendipine is used only as a radioligand for binding site identification, not as the subject of pharmacokinetic analysis. |
| PD | Ragazzi_1989 | not_relevant | 0 | 0 | The paper investigates methylxanthine derivatives and only mentions nitrendipine as a radioligand for binding site affinity studies, not as a drug for which a pharmacodynamic or exposure-response relationship is being characterized. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | The paper is a review/tutorial on pharmacodynamic modeling of slow reversible binding and does not report pharmacokinetic parameters for nitrendipine. |
| PD | Ren_2022 | not_relevant | 4 | 4 | The paper is a review/tutorial on slow reversible binding models and does not report a pharmacodynamic or exposure-response relationship for nitrendipine. |
| popPK | Roth_1986 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT2 receptors in rat aorta where nitrendipine is used only as a calcium channel blocker to facilitate contraction, not as the subject of pharmacokinetic analysis. |
| PD | Roth_1986 | not_relevant | 0 | 0 | The paper focuses on 5-HT2 receptor pharmacology and PI turnover; nitrendipine is only mentioned as a calcium channel blocker used to facilitate contraction measurement, with no PD or exposure-response analysis for nitrendipine itself. |
| PGx | Satoh_2003 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of 29 drugs on estradiol oxidation, not the pharmacokinetics or pharmacodynamics of nitrendipine. |
| PGx | Savaryn_2022 | not_relevant | 0 | 0 | The paper investigates CYP3A4 induction by nitrendipine in hepatocytes, not the effect of a gene variant on nitrendipine's PK/PD. |
| popPK | Schaberg_1991 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Schaberg_1991 | not_relevant | 0 | 0 | The paper focuses on the identification of a platelet-activating factor receptor on human alveolar macrophages and does not contain any pharmacokinetic or pharmacodynamic data for nitrendipine. |
| popPK | Scriabine_1988 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular smooth muscle response in rabbit ear arteries, not a pharmacokinetic study, and reports no disposition parameters for nitrendipine. |
| PD | Scriabine_1988 | not_relevant | 1 | 0 | The paper reports that nitrendipine had no significant effect on dopamine-induced inhibition, providing no numeric PD parameters or concentration-response curve for nitrendipine. |
| popPK | Secrest_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor mechanisms in rat stomach fundus, not a pharmacokinetic study of nitrendipine. |
| PD | Secrest_1989 | not_relevant | 3 | 2 | The paper reports qualitative attenuation of contractions by nitrendipine but does not provide numeric PD parameters (e.g., IC50) or a quantitative concentration-effect curve for nitrendipine itself. |
| popPK | Serrano_2023 | irrelevant | 0 | 0 | The paper describes an in vitro deep learning model for proarrhythmia risk and does not report pharmacokinetic parameters for nitrendipine. |
| PD | Serrano_2023 | not_relevant | 0 | 0 | The paper focuses on a deep learning platform for proarrhythmia risk using iPSCs and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for nitrendipine. |
| popPK | Shimada_1996 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding nitrendipine pharmacokinetics. |
| PGx | Shukla_2006 | not_relevant | 0 | 0 | The paper identifies nitrendipine as a substrate of the ABCG2 transporter in vitro but does not report any pharmacogenomic analysis (gene variant/genotype) affecting its PK or PD parameters. |
| popPK | Soons_1993 | irrelevant | 2 | 0 | The study focuses on concentration-effect relationships (pharmacodynamics) and reports relative potencies, but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) for nitrendipine. |
| popPK | St-Louis_1995 | irrelevant | 0 | 0 | The study is a mechanistic vascular physiology investigation using [3H]nitrendipine as a radioligand for binding assays, not a pharmacokinetic study of nitrendipine disposition. |
| PD | St-Louis_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacology of vasopressin and calcium channel modulators (nifedipine/Bay K 8644) in rat mesenteric arteries; nitrendipine is used only as a radioligand for binding studies, not as a drug for which a PD/exposure-response relationship is reported. |
| popPK | Steinsland_1985 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| popPK | Sze_1994 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Sze_1994 | not_relevant | 0 | 0 | The paper investigates glucocorticoid action on calcium influx in brain synaptosomes and does not mention nitrendipine or report any pharmacodynamic parameters for it. |
| PGx | Takara_2012 | not_relevant | 0 | 0 | The study investigates the in vitro interaction between calcium antagonists and the ABCG2 transporter in cell lines, not the effect of a gene variant on the PK/PD of nitrendipine. |
| PD | Viguier_2024 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study clustering adverse drug reaction signatures using disproportionality analysis (ROR) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for nitrendipine. |
| PGx | Voruganti_2012 | not_relevant | 0 | 0 | The study investigates the effect of pomegranate juice (a food supplement) on nitrendipine pharmacokinetics, not the effect of a gene variant or genotype. |
| popPK | Wang_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of bepridil, using nitrendipine only as a tool compound to block calcium currents, and reports no pharmacokinetic parameters for nitrendipine. |
| PD | Wang_1999 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, Hill coefficient) for bepridil, not nitrendipine; nitrendipine is only used as a tool compound to block calcium currents. |
| PD | Wang_2006 | not_relevant | 0 | 0 | The paper focuses on the physicochemical preparation of drug-cyclodextrin complexes and does not report any pharmacodynamic or exposure-response data. |
| PGx | Wang_2007 | not_relevant | 0 | 0 | The paper describes an analytical method for nifedipine and reports a herb-drug interaction (St. John's wort), but does not report any pharmacogenomic effects (gene variants) on nitrendipine or nifedipine PK/PD parameters. |
| popPK | Wang_2009 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of GABA receptor function in rat neurons where nitrendipine is used as a pharmacological tool to block L-type calcium channels, not as a subject of pharmacokinetic analysis. |
| PD | Wang_2009 | not_relevant | 1 | 0 | The paper uses nitrendipine as a qualitative pharmacological tool to demonstrate a mechanism (L-VGCC involvement) but does not report a dose-response curve, EC50, or any numeric PD parameters for the drug itself. |
| popPK | Wei_1986 | irrelevant | 0 | 0 | The study is a pharmacologic and radioligand binding analysis of calcium channel modulators, not a pharmacokinetic study, and nitrendipine is used only as a radioligand probe. |
| popPK | Wei_1996 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Wei_1996 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of CHEB (a barbiturate) on glutamate release and does not mention nitrendipine or report any pharmacodynamic parameters for it. |
| popPK | Wong_1993 | irrelevant | 0 | 0 | no_text gate: only 237 chars of text extracted (&lt; 400) |
| PD | Wong_1993 | not_relevant | 0 | 0 | The paper investigates the pharmacology of XB513, not nitrendipine, and does not report any exposure-response or dose-response relationship for nitrendipine. |
| PGx | Xia_2012 | not_relevant | 0 | 0 | The study investigates the inhibitory effects of dihydropyridines on CYP3A4 activity and QSAR relationships, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Yan_2010 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomic effect of SDF1 3A on captopril efficacy, not nitrendipine. |
| PGx | Yan_2012 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (nitrendipine inhibiting indapamide metabolism) and does not report any pharmacogenomic effects (gene variants) on nitrendipine's PK or PD parameters. |
| popPK | Yoo_2021 | irrelevant | 0 | 0 | The paper describes an in silico model for drug proarrhythmicity and does not report pharmacokinetic parameters for nitrendipine. |
| PD | Yoo_2021 | not_relevant | 0 | 0 | The paper focuses on in silico proarrhythmia prediction using ANN and does not report pharmacokinetic or pharmacodynamic exposure-response data for nitrendipine. |
| popPK | Zernig_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial receptor binding and ion dependence, not a pharmacokinetic study reporting disposition parameters. |
| PD | Zernig_1992 | not_relevant | 0 | 0 | The paper describes in vitro receptor binding kinetics and ion dependence, not pharmacodynamic exposure-response or dose-response relationships for the drug in a biological system. |
| PD | Zhirnov_2015 | not_relevant | 1 | 0 | The paper investigates the effect of radiation on erythrocyte membrane stability in the presence of nitrendipine, but does not report a pharmacodynamic exposure-response or dose-response relationship for nitrendipine itself, nor does it provide numeric PD parameters for the drug. |
| PGx | Zhou_2005 | not_relevant | 0 | 0 | The study investigates the effect of dihydropyridines on BCRP-mediated transport of other drugs (mitoxantrone/topotecan) and does not report pharmacogenomic effects on nitrendipine's PK/PD. |
| popPK | Zhu_1990 | relevant | 8 | 2 | The study reports in vivo pharmacokinetic parameters for nitrendipine in humans, but the specific numeric values for CL, V, or ka are not present in the provided evidence, only bioavailability percentages. |
| popPK | Zhu_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nifedipine, using nitrendipine only as an internal standard for the assay. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnitrendipine%5D&body=Drug%3A%20nitrendipine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nitrendipine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
