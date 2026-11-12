<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Uroporphyrin III&quot;}]"></div>

# Uroporphyrin III

- **generic name:** Uroporphyrin III
- **T3DB:** [T3D4322](http://www.t3db.ca/toxins/T3D4322) · **DrugBank:** [DB04461](https://go.drugbank.com/drugs/DB04461) · **PubChem:** none
- **groups:** experimental

## About

Uroporphyrin is the porphyrin produced by oxidation of the methylene bridges in uroporphyrinogen. They have four acetic acid and four propionic acid side chains attached to the pyrrole rings. Uroporphyrinogen I and III are formed from polypyrryl methane in the presence of uroporphyrinogen III cosynthetase and uroporphyrin I synthetase, respectively. …

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.
- **Health effects:** Chronically high levels of porophyrins are associated with porphyrias such as Porphyria variegate, Acute Intermittent Porphyria and Hereditary Coproporphyria (HCP).

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4322">T3DB T3D4322</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 18273-06-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:15436">ChEBI 15436</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=uroporphyrin_iii).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: UROD (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 04:56 | 14:24 | 0/0/0 | 0/0/0 | 0/0/0 | 165,317/5,692 | einfracz / qwen3.8-27b | 11 | 2/8 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 42 matched, 46 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Niu_2019.pdf` | Niu C et al., Organic Anion-Transporting Polypeptide…, Drug metabolism and disposi… (2019) | pgx | 7 | [10.1124/dmd.119.088922](https://doi.org/10.1124/dmd.119.088922) | [31582395](https://www.ncbi.nlm.nih.gov/pubmed/31582395) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `van_1996.pdf` | van Birgelen AP et al., Relative potencies of polychlorinated d…, Toxicology and applied phar… (1996) | pgx | 7 | [10.1006/taap.1996.0103](https://doi.org/10.1006/taap.1996.0103) | [8658519](https://www.ncbi.nlm.nih.gov/pubmed/8658519) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |

<sub>queue written 2026-11-11 04:55 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bartholomew_1987 | irrelevant | 0 | 0 | The paper studies carbon tetrachloride toxicity in cattle and does not report kinetic parameters for uroporphyrin_iii. |
| popPK | Bechtold_2024 | irrelevant | 0 | 0 | The study focuses on coproporphyrin-I and coproporphyrin-III, not uroporphyrin-III, which is a distinct porphyrin. |
| PGx | Bechtold_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetic interactions with porphyrins (coproporphyrin) and statins, not uroporphyrin_iii. |
| popPK | Dewan_2024 | irrelevant | 0 | 0 | The paper is a case-control study on pre-hepatic jaundice analyzing trace elements and antioxidants, with no mention or kinetic data for uroporphyrin_iii. |
| popPK | Ehsan_2021 | irrelevant | 0 | 0 | The paper investigates the nephrotoxicity of cisplatin and the protective effects of casticin in rats, with no mention or data regarding uroporphyrin III. |
| popPK | Futatsugi_2021 | irrelevant | 1 | 1 | The study focuses on hexadecanedioate, octadecanedioate, tetradecanedioate, and coproporphyrin-III in rats, and does not report quantitative toxicokinetic parameters for the subject substance, uroporphyrin_iii. |
| popPK | Hamza_2025 | irrelevant | 0 | 0 | The paper studies the mitigative effects of didymin against cadmium-induced renal injury and does not report any kinetic parameters for uroporphyrin_iii. |
| popPK | Heinig_2022 | irrelevant | 0 | 0 | The paper investigates finerenone's inhibitory effects on transporters using coproporphyrin I and III as substrates, not as the subject substance for which toxicokinetic parameters are reported. |
| popPK | Ijaz_2021 | irrelevant | 0 | 0 | The paper focuses on thimerosal nephrotoxicity in rats and does not report toxicokinetic parameters for uroporphyrin_iii. |
| popPK | Izat_2024 | irrelevant | 0 | 0 | The paper measures coproporphyrin III (not uroporphyrin III) as an endogenous biomarker for transporter activity, not as the subject toxicokinetic substance. |
| popPK | Khan_2010 | irrelevant | 0 | 0 | The study investigates CCl4-induced nephrotoxicity and does not report any toxicokinetic parameters for uroporphyrin_iii. |
| popPK | Khan_2010_2 | irrelevant | 0 | 0 | The study evaluates the nephroprotective effects of Launaea procumbens fractions on CCl4 toxicity in rats and does not report any kinetic parameters for uroporphyrin_iii. |
| popPK | Khan_2012 | irrelevant | 0 | 0 | The paper is a study on nephrotoxicity caused by carbon tetrachloride (CCl4) in rats and reports markers such as urobilinogen and creatinine, but it does not contain any data or kinetic parameters for uroporphyrin III. |
| popPK | Khan_2012_2 | irrelevant | 0 | 0 | The paper studies the protective effects of rutin against potassium bromate-induced nephrotoxicity in rats and does not report any kinetic parameters for uroporphyrin III. |
| popPK | Khan_2013 | irrelevant | 0 | 0 | The paper studies CCl4 nephrotoxicity in rats, and uroporphyrin III is not the subject of investigation nor are any kinetic parameters reported for it. |
| popPK | Khatoon_2025 | irrelevant | 0 | 0 | The paper describes a clinical case of hepatic insufficiency and correlates Unani medicine signs with modern pathology, but it does not report any quantitative toxicokinetic parameters for uroporphyrin_iii. |
| popPK | Kipp_2025 | irrelevant | 0 | 0 | The paper is a review focused on bilirubin metabolism and transport; uroporphyrin_iii is not the subject substance and no kinetic parameters for it are reported. |
| popPK | Krishnamohan_2007 | irrelevant | 1 | 1 | The study measures urinary concentrations of coproporphyrins (I and III) and uroporphyrin levels in mice, but these are biomarkers of effect/exposure, not quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for the substance uroporphyrin III itself. |
| popPK | Levy_1968 | irrelevant | 0 | 0 | The paper reports quantitative kinetic parameters (clearance, protein binding) for urobilinogen, not uroporphyrin_iii. |
| popPK | Liem_1976 | irrelevant | 0 | 0 | The paper reports kinetic parameters for hemopexin, not uroporphyrin III, which is only used as a test ligand to assess hemopexin function. |
| PGx | Matsumoto_2015 | not_relevant | 0 | 0 | The paper focuses on ABCB6 transporter expression and porphyrin metabolism in gastric cancer cells, not the pharmacokinetics or pharmacodynamics of uroporphyrin III as a drug in a pharmacogenomic context. |
| popPK | Mello_2010 | irrelevant | 0 | 0 | The study investigates the kinetics of Bothrops alternatus snake venom, not uroporphyrin_iii. |
| popPK | Milne_1965 | irrelevant | 1 | 0 | The paper discusses the general principle of pH-dependent excretion for porphyrins and notes that research is still needed to determine if uroporphyrin III exhibits this property, providing no quantitative kinetic parameters. |
| popPK | Nair_2014 | irrelevant | 0 | 0 | The paper reports the pharmacokinetics of an HIV integrase inhibitor, not uroporphyrin_iii. |
| PGx | Nakano_2018 | not_relevant | 0 | 0 | The paper studies the effect of the HCV core protein on porphyrin metabolism, which is a viral/host interaction and not a pharmacogenomic effect on the PK/PD of the drug uroporphyrin_iii. |
| popPK | Niu_2019 | irrelevant | 0 | 0 | no_text gate: only 162 chars of text extracted (&lt; 400) |
| PGx | Niu_2019 | not_relevant | 0 | 0 | The paper studies OATP gene induction by Rifampin, not the PK/PD of uroporphyrin_iii. |
| popPK | Shah_2017 | irrelevant | 0 | 0 | The paper focuses on the nephroprotective effects of Sida cordata against CCl4 toxicity and does not report toxicokinetic parameters for uroporphyrin_iii. |
| popPK | Wu_2004 | irrelevant | 0 | 0 | The paper reports exposure/dose-response relationships for coproporphyrin III and arsenic species, but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for uroporphyrin III. |
| popPK | Younis_2018 | irrelevant | 0 | 0 | The paper focuses on the nephroprotective effects of Fraxinus xanthoxyloides against CCl4 toxicity and does not report any toxicokinetic parameters for uroporphyrin_iii. |
| popPK | Zafar_2026 | irrelevant | 0 | 0 | The paper investigates the effects of rufigallol on cisplatin-induced nephrotoxicity and contains no data on uroporphyrin III. |
| PGx | van_1996 | not_relevant | 0 | 0 | The study focuses on toxicological effects of dioxins/furans on porphyrin accumulation and does not report pharmacogenomic effects on the PK/PD of uroporphyrin_iii. |
| PGx | van_1996_2 | not_relevant | 0 | 0 | The paper studies the toxicological effects of environmental chemicals (PCBs/TCDD) on porphyrin levels in rats, not the impact of human genetic variants on the pharmacokinetics or pharmacodynamics of uroporphyrin_iii as a drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Buroporphyrin_iii%5D&body=Drug%3A%20uroporphyrin_iii%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_uroporphyrin_iii/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
