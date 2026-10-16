<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;clofibrate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clofibrate_wierczek2022_reference&quot;,&quot;label&quot;:&quot;\u015awierczek_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clofibrate/Clofibrate_wierczek2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# clofibrate

- **generic name:** clofibrate
- **ATC codes:** `C10AB01`
- **DrugBank:** [DB00636](https://go.drugbank.com/drugs/DB00636) · **PubChem:** [CID 2796](https://pubchem.ncbi.nlm.nih.gov/compound/2796)
- **molar mass:** 242.699 g/mol (C12H15ClO3) — DrugBank
- **groups:** approved, withdrawn

## About

Clofibrate is a fibrate lipid-lowering drug that was used to treat high blood lipid levels such as hypertriglyceridemia and familial hyperlipidemia, as well as related conditions like arteriosclerosis and coronary artery disease. It has been withdrawn from the market, largely because of concerns about lack of benefit and safety issues including cancer-causing potential.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2701912](https://www.wikidata.org/wiki/Q2701912) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clofibric acid | metabolite | 214.645 | C10H11ClO3 | PubChem | [2797](https://pubchem.ncbi.nlm.nih.gov/compound/2797) | Lücker_1980 |
| etofylline | metabolite | 224.22 | C9H12N4O3 | PubChem | [1892](https://pubchem.ncbi.nlm.nih.gov/compound/1892) | Lücker_1980 |
| etofylline clofibrate | metabolite | 420.85 | C19H21ClN4O5 | PubChem | [41109](https://pubchem.ncbi.nlm.nih.gov/compound/41109) | Lücker_1980 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 01:15 | 2:25 | 1/1/0 | 2/0/0 | 0/0/0 | 231,660/6,121 | einfracz / qwen3.8-27b | 8 | 0/7 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Świerczek_2022_reference](drugs/drug_clofibrate/Clofibrate_wierczek2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Świerczek A et al., Pharmacokinetic/Pharmacodynamic Evaluat…, Pharmaceutics (2022) | [10.3390/pharmaceutics14051090](https://doi.org/10.3390/pharmaceutics14051090) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lücker_1980_reference](drugs/drug_clofibrate/Clofibrate_Lcker1980_reference.md) | — | general linear (no model) | 0 | Lücker PW et al., [Metabolism and pharmacokinetics of eto…, Arzneimittel-Forschung (1980) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.60).">human + animal</span> | [Bajwa_2007_I_sc](drugs/drug_clofibrate/pd_Bajwa_2007_I_sc.md) | cAMP-stimulated I(sc) ← clofibrate · inhibition effect | — | Bajwa PJ et al., Fenofibrate inhibits intestinal Cl- sec…, American journal of physiol… (2007) | [10.1152/ajpgi.00234.2007](https://doi.org/10.1152/ajpgi.00234.2007) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Laville_2004_EROD](drugs/drug_clofibrate/pd_Laville_2004_EROD.md) | EROD activity ← clofibrate · inhibition effect | — | Laville N et al., Effects of human pharmaceuticals on cyt…, Toxicology (2004) | [10.1016/j.tox.2003.11.002](https://doi.org/10.1016/j.tox.2003.11.002) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Laville_2004_MTT](drugs/drug_clofibrate/pd_Laville_2004_MTT.md) | Cell viability ← clofibrate · inhibition effect | — | Laville N et al., Effects of human pharmaceuticals on cyt…, Toxicology (2004) | [10.1016/j.tox.2003.11.002](https://doi.org/10.1016/j.tox.2003.11.002) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Laville_2004_ROS](drugs/drug_clofibrate/pd_Laville_2004_ROS.md) | ROS production ← clofibrate · stimulation effect | — | Laville N et al., Effects of human pharmaceuticals on cyt…, Toxicology (2004) | [10.1016/j.tox.2003.11.002](https://doi.org/10.1016/j.tox.2003.11.002) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=clofibrate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2E1` inducer, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer, `CYP3A4` inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CYP4A11 (inducer), CYP4A11 (substrate), GSTA2 (inhibitor), LPL (activator), PPARA (target), SERPINA7 (inducer).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 99 matched, 87 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nunes_2005.pdf` | Nunes B et al., Acute toxicity of widely used pharmaceu…, Ecotoxicology and environme… (2005) | pd | 4 | [10.1016/j.ecoenv.2004.08.010](https://doi.org/10.1016/j.ecoenv.2004.08.010) | [15922808](https://www.ncbi.nlm.nih.gov/pubmed/15922808) | metadata signals extractable PD data (IC50) |
| `Coulet_2000.pdf` | Coulet M et al., Evidence for cytochrome P4501A2-mediate…, Chemico-biological interact… (2000) | pgx | 7 | [10.1016/s0009-2797(00)00167-8](https://doi.org/10.1016/s0009-2797(00)00167-8) | [10936227](https://www.ncbi.nlm.nih.gov/pubmed/10936227) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |
| `Hoque_2015.pdf` | Hoque MT et al., In vivo and ex vivo regulation of breas…, Journal of neurochemistry (2015) | pgx | 7 | [10.1111/jnc.13389](https://doi.org/10.1111/jnc.13389) | [26465636](https://www.ncbi.nlm.nih.gov/pubmed/26465636) | metadata signals extractable PGX data (Abcg2, PK/PD-context) |
| `Jemnitz_2000.pdf` | Jemnitz K et al., Glucuronidation of thyroxine in primary…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10611137](https://www.ncbi.nlm.nih.gov/pubmed/10611137) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `More_2017.pdf` | More VR et al., PPAR-α, a lipid-sensing transcription f…, Journal of cerebral blood f… (2017) | pgx | 7 | [10.1177/0271678X16650216](https://doi.org/10.1177/0271678X16650216) | [27193034](https://www.ncbi.nlm.nih.gov/pubmed/27193034) | metadata signals extractable PGX data (Abcb1, PK/PD-context) |
| `Osabe_2008.pdf` | Osabe M et al., Expression of hepatic UDP-glucuronosylt…, Drug metabolism and disposi… (2008) | pgx | 7 | [10.1124/dmd.107.017731](https://doi.org/10.1124/dmd.107.017731) | [17967931](https://www.ncbi.nlm.nih.gov/pubmed/17967931) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Takanohashi_2007.pdf` | Takanohashi T et al., Prediction of the metabolic interaction…, Drug metabolism and pharmac… (2007) | pgx | 7 | [10.2133/dmpk.22.409](https://doi.org/10.2133/dmpk.22.409) | [18159128](https://www.ncbi.nlm.nih.gov/pubmed/18159128) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-10-15T01:13:14.826871+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aromataris_1999 | irrelevant | 0 | 0 | The study examines the mechanism of action of clofibrate on chloride channels in vitro, not its pharmacokinetic disposition parameters. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper is an in-vitro machine learning study on drug synergy in cancer cell lines and does not contain pharmacokinetic data for clofibrate. |
| PGx | Buckley_2009 | not_relevant | 0 | 0 | The paper studies the induction of UGT mRNA expression by various chemical inducers, including clofibrate, but does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD of clofibrate itself. |
| popPK | Chen_2019 | irrelevant | 0 | 0 | The paper describes a chemical radiolabeling method for PET tracers and does not report any pharmacokinetic parameters for clofibrate. |
| PGx | Coulet_1998 | not_relevant | 0 | 0 | The paper focuses on thiabendazole metabolism by CYP1A2; clofibrate is only mentioned as an inducer agent in the experimental setup, and no pharmacogenomic data on clofibrate are reported. |
| PGx | Coulet_2000 | not_relevant | 0 | 0 | The paper discusses clofibrate only as a tool to induce CYP4A to study thiabendazole metabolism; it does not report pharmacogenomic effects on clofibrate's own PK/PD parameters. |
| PGx | Davila_1999 | not_relevant | 0 | 0 | The paper studies enzyme induction by clofibrate in rat hepatocytes, not the effect of a gene variant on clofibrate's pharmacokinetics or pharmacodynamics. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper assesses the health risks of perfluoroalkyl substances (PFASs) and does not contain any data regarding clofibrate or its pharmacokinetics. |
| popPK | EFSA_2023 | irrelevant | 0 | 0 | The paper is a risk assessment regarding N-nitrosamines in food and does not contain any pharmacokinetic data or parameters for clofibrate. |
| PGx | Eghbalian_2022 | not_relevant | 0 | 0 | The paper is a systematic review on the efficacy of clofibrate for neonatal jaundice and does not report any pharmacogenomic variations or genetic effects on PK/PD parameters. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | The paper is a review of drugs causing acute kidney injury and lists clofibrate only as a potential nephrotoxin with limited agreement, containing no pharmacokinetic parameters. |
| PGx | Gerhold_2001 | not_relevant | 0 | 0 | The paper reports gene expression responses to clofibrate in rat livers, not a pharmacogenomic effect of a genetic variant on clofibrate's pharmacokinetics or pharmacodynamics. |
| popPK | Giral_2007 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring cell death (LDH activity) and does not report any pharmacokinetic disposition parameters for clofibrate. |
| popPK | Grundy_1972 | irrelevant | 1 | 0 | The study focuses on cholesterol metabolism mechanisms (pool sizes, turnover rates, excretion) rather than the pharmacokinetic disposition parameters (CL, V, ka) of clofibrate itself. |
| PGx | Hoque_2012 | not_relevant | 0 | 0 | The study investigates the mechanism of PPAR-alpha activation by clofibrate on BCRP expression in an in vitro model and does not report any pharmacogenomic associations (gene variants) affecting clofibrate's PK or PD. |
| PGx | Hoque_2015 | not_relevant | 3 | 5 | The paper reports on the mechanism of Pparα-mediated induction of Bcrp by clofibrate in mice, but does not report a pharmacogenomic effect of a specific human gene variant on the PK or PD of clofibrate itself. |
| PGx | Ikushiro_1995 | not_relevant | 0 | 0 | The study examines UGT1 isozyme expression and clofibrate's induction of enzyme activity, not a pharmacogenomic effect of a genetic variant on clofibrate's PK/PD. |
| PGx | Irizar_1995 | not_relevant | 0 | 0 | The paper uses clofibrate as an inducing agent to study CYP4A expression in a rat model, not to analyze how a genetic variant affects clofibrate's PK/PD. |
| PGx | Jemnitz_2000 | not_relevant | 0 | 0 | The paper investigates the in vitro induction of UGT enzymes by clofibrate but does not report any pharmacogenomic variants or genotypes affecting the pharmacokinetics or pharmacodynamics of clofibrate itself. |
| PGx | Jemnitz_2002 | not_relevant | 0 | 0 | The paper studies in vitro enzyme induction in rat hepatocytes, not the effect of a human gene variant on the PK/PD of clofibrate. |
| popPK | Kadyrov_2025 | irrelevant | 0 | 0 | The study is a clinical chemistry atlas of xenobiotic toxicity in rats and does not report pharmacokinetic parameters for clofibrate. |
| popPK | Laville_2004 | irrelevant | 0 | 0 | The study is an in vitro toxicity assessment measuring cytotoxicity and enzyme activity, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Lee_1998 | not_relevant | 0 | 0 | The paper studies the metabolism of nonylphenol, using clofibrate only as an enzyme inducer, and does not report pharmacogenomic effects on clofibrate's own PK/PD parameters. |
| popPK | Li_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological analysis of LY-171883, and clofibrate is only used as a negative control comparator with no PK parameters reported. |
| PGx | Léonard_2006 | not_relevant | 0 | 0 | The study investigates the proteomic effects of clofibrate on rat liver protein expression and is not a pharmacogenomic study of PK/PD parameters. |
| popPK | Lötsch_2001 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ibuprofen, not clofibrate. |
| popPK | Lücker_1980 | irrelevant | 2 | 1 | The study reports PK parameters for the metabolites (clofibric acid and etofylline) of the prodrug etofylline clofibrate, not the parent drug clofibrate itself. |
| popPK | Mayer_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of beclobrate and its metabolite beclobric acid, not the drug clofibrate itself. |
| PGx | Miller_1998 | not_relevant | 0 | 0 | The paper provides a general review of fibrate pharmacokinetics and metabolism (CYP3A4) but does not report any specific gene variants or pharmacogenomic effects on clofibrate parameters. |
| PGx | More_2017 | not_relevant | 3 | 2 | The paper studies the pharmacological effect of clofibrate on blood-brain barrier transporters (PD effect of clofibrate itself), rather than how a patient's genotype determines clofibrate's PK or PD. |
| PGx | Osabe_2008 | not_relevant | 0 | 0 | The study reports the effect of clofibrate on gene expression (pharmacology) but does not report how a genetic variant changes clofibrate's pharmacokinetics or pharmacodynamics (pharmacogenomics). |
| popPK | Perlstein_2012 | irrelevant | 0 | 0 | The paper investigates warfarin pharmacogenetics and PK/PD modeling, not clofibrate pharmacokinetics. |
| PGx | Pyrig_1984 | not_relevant | 0 | 0 | The paper discusses lipid correction using clofibrate but does not report any pharmacogenomic analysis or genotype-based differences in PK/PD parameters. |
| PGx | Rey-Grobellet_1996 | not_relevant | 0 | 0 | The paper focuses on the metabolism of thiabendazole in rabbits and does not report pharmacogenomic effects on the PK/PD parameters of clofibrate. |
| popPK | Salman_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pentoxifylline, not clofibrate. |
| PGx | Skene_2001 | not_relevant | 0 | 0 | The study focuses on the metabolism of melatonin; clofibrate is only mentioned as a non-effecting inducer and is not the subject of the pharmacogenomic analysis. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper focuses on statins for COVID-19 repurposing and contains no data or mention of clofibrate. |
| PGx | Surry_2000 | not_relevant | 0 | 0 | The paper describes a method for measuring CYP induction in rat hepatocytes and reports clofibrate's potency (Ind50) as a CYP4A1 inducer, but does not report any pharmacogenomic effects on clofibrate's PK or PD parameters. |
| PGx | Takanohashi_2007 | not_relevant | 0 | 0 | The paper studies in vitro drug-drug interactions involving nateglinide and clofibrate as an inhibitor, containing no pharmacogenomic data on clofibrate's PK/PD parameters. |
| popPK | Thomson_1989 | irrelevant | 0 | 0 | The paper describes the population pharmacokinetics of lisinopril, not clofibrate. |
| PGx | Uckun_2002 | not_relevant | 0 | 0 | The paper studies the metabolism of the JAK inhibitor JANEX-1; clofibrate is mentioned only as a negative control for enzyme induction and is not the subject of a pharmacogenomic study. |
| PGx | Wen_2026 | not_relevant | 0 | 0 | The paper mentions clofibrate only as a candidate drug identified via in-silico drug repurposing and molecular docking against CYP2C19/SCD; it does not report a specific gene variant/genotype altering clofibrate's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yamazaki_2005 | not_relevant | 0 | 0 | The study investigates the effect of clofibrate on transporter proteins (OATP1B1, MRP2, P-gp) in vitro, but does not report how genetic variants affect the PK/PD of clofibrate itself. |
| popPK | Świerczek_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a new PDE4/7 inhibitor (compound 34), not clofibrate. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 01:13 UTC</sub>
