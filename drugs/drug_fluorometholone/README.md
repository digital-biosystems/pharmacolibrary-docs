<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;fluorometholone&quot;}]"></div>

# fluorometholone

- **generic name:** fluorometholone
- **ATC codes:** `C05AA06`, `D07AB06`, `D07CB03`, `D07XB04`, `D10AA01`, `S01BA07`, `S01BB03`, `S01CA07`, `S01CB05`
- **DrugBank:** [DB00324](https://go.drugbank.com/drugs/DB00324) · **PubChem:** [CID 9878](https://pubchem.ncbi.nlm.nih.gov/compound/9878)
- **molar mass:** 376.4617 g/mol (C22H29FO4) — DrugBank
- **groups:** approved, investigational

## About

Fluorometholone is a corticosteroid used to treat inflammation, including inflammatory eye conditions and skin disorders. It is an approved medicine, applied topically to the eye or skin, and is available in many combination products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q607349](https://www.wikidata.org/wiki/Q607349) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:49 | 0:56 | 0/0/0 | 0/0/0 | 0/0/0 | 29,621/974 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 3/3 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 3  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Deng_2016.pdf` | Deng F et al., General Pharmacokinetic Model for Topic…, Pharmaceutical research (2016) | popPK | 8 | [10.1007/s11095-016-1993-2](https://doi.org/10.1007/s11095-016-1993-2) | [27431864](https://pubmed.ncbi.nlm.nih.gov/27431864) | The paper describes a PK model for fluorometholone in rabbits, but the specific numeric parameter values are stated to be taken from published literature and are not present in the provided evidence. |

<sub>queue written 2026-10-06T22:49:24.683063+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alım_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (IC50/Ki) and does not report pharmacokinetic disposition parameters for fluorometholone. |
| popPK | Artola_2000 | irrelevant | 0 | 0 | The study evaluates blood-aqueous barrier integrity (flare) after surgery and uses fluorometholone only as a therapeutic agent, reporting no pharmacokinetic parameters. |
| PD | Artola_2000 | not_relevant | 0 | 0 | The study measures anterior chamber flare over time after PRK in patients receiving a fixed, decreasing dose of fluorometholone, but it does not measure drug concentrations or perform any PK/PD modeling to derive exposure-response or dose-response parameters. |
| popPK | Bellose_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fluoride (an ion) in saliva, not the drug fluorometholone. |
| popPK | Caldas_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fluoride from toothpaste, not the drug fluorometholone. |
| popPK | Deng_2016 | relevant | 8 | 0 | The paper describes a PK model for fluorometholone in rabbits, but the specific numeric parameter values are stated to be taken from published literature and are not present in the provided evidence. |
| PD | Deng_2016 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic (PK) model for ocular drug absorption and distribution, not a pharmacodynamic (PD) or exposure-response relationship. |
| popPK | Gonzalez-Pizarro_2019 | irrelevant | 2 | 0 | The paper describes a formulation study (in-situ gels) and qualitative efficacy/bioavailability improvements but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for fluorometholone. |
| PD | Gonzalez-Pizarro_2019 | not_relevant | 0 | 0 | The text describes formulation development and qualitative efficacy improvements but contains no numeric PD parameters, concentration-effect data, or dose-response analysis. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a nanomedicine study where fluorometholone is used only as a clinical comparator, and no pharmacokinetic parameters for fluorometholone are reported. |
| popPK | Ishimatsu_2003 | irrelevant | 0 | 0 | The study investigates the biopersistence of graphite whiskers in rat lungs and does not involve fluorometholone or its pharmacokinetics. |
| popPK | Kachi_2000 | irrelevant | 0 | 0 | The paper is a case report on corneal deposits caused by cyclosporine, where fluorometholone is only listed as a co-administered medication, and no pharmacokinetic parameters are reported. |
| popPK | Kadife_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sulfasalazine and sulfapyridine, not fluorometholone. |
| popPK | Lee_1992 | irrelevant | 0 | 0 | The paper is about airborne asbestos concentrations in buildings and has no relation to fluorometholone pharmacokinetics. |
| popPK | Lee_2023 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic interactions and intracellular concentrations in corneal cells, not on reporting quantitative systemic or compartmental pharmacokinetic parameters (CL, V, ka) for fluorometholone. |
| PD | Lee_2023 | not_relevant | 1 | 0 | The paper reports qualitative changes in intracellular concentrations and antibacterial effects (checkerboard assays) but does not provide numeric PD parameters (e.g., MIC, EC50, Emax) or quantitative concentration-effect curves for fluorometholone. |
| popPK | Lippmann_1994 | irrelevant | 0 | 0 | The paper is a review of inhalation toxicology studies on mineral fibres in rats and contains no pharmacokinetic data for fluorometholone. |
| popPK | Maeng_2019 | irrelevant | 0 | 0 | The study is a clinical analysis of intraocular pressure changes and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for fluorometholone. |
| popPK | Mapley_2021 | irrelevant | 0 | 0 | The paper is a biophysical study using NMR and Raman spectroscopy to characterize drug-lipid membrane interactions, not a pharmacokinetic study reporting disposition parameters. |
| PD | Mapley_2021 | not_relevant | 0 | 0 | The paper characterizes drug-lipid membrane interactions using NMR and Raman spectroscopy and does not report any pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Martínez-Mier_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fluoride in dental biofilm, not the drug fluorometholone. |
| popPK | Nakada_2021 | irrelevant | 0 | 0 | The study evaluates the physical stability (redispersability and particle size) of fluorometholone eye drops, not pharmacokinetic parameters. |
| PD | Nakada_2021 | not_relevant | 0 | 0 | The paper evaluates the physical stability (redispersability and particle size) of fluorometholone eye drops, not pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Ngoh_2016 | irrelevant | 0 | 0 | The study focuses on kidney function and body composition changes after bariatric surgery and does not involve fluorometholone or its pharmacokinetics. |
| popPK | Panda_2021 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing difluprednate and prednisolone, with fluorometholone mentioned only as a background comparator and no pharmacokinetic parameters reported. |
| PD | Panda_2021 | not_relevant | 0 | 0 | The paper is a clinical efficacy study comparing two drugs without any pharmacokinetic data, concentration measurements, or dose-response modeling. |
| popPK | Romanowski_2002 | irrelevant | 0 | 0 | The study investigates the effect of topical fluorometholone on adenovirus replication in rabbits, not the pharmacokinetic disposition parameters of the drug itself. |
| popPK | Sieg_1975 | irrelevant | 2 | 0 | The study focuses on corneal penetration and bioavailability in rabbits without reporting quantitative compartmental PK parameters (CL, V, ka) for fluorometholone. |
| PD | Sieg_1975 | not_relevant | 2 | 1 | The paper reports PK parameters (aqueous humor concentration-time profiles) for different formulations but does not report a pharmacodynamic (effect) response or exposure-response relationship. |
| popPK | Wang_2022 | irrelevant | 1 | 0 | The paper describes a formulation study for dry eye treatment and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for fluorometholone. |
| PD | Wang_2022 | not_relevant | 1 | 0 | The paper reports a qualitative comparison of efficacy (alleviation of dry eye signs) between a new formulation and a commercial drop, but does not provide numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50, etc.). |
| popPK | Young_2025 | irrelevant | 0 | 0 | The paper is a surgical case report on lipoma excision and contains no pharmacokinetic data for fluorometholone. |
| popPK | Zhang_2013 | irrelevant | 0 | 0 | The paper is a clinical case report on LASIK complications where fluorometholone is used as a therapeutic agent, not a pharmacokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
