<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;methylthioninium chloride&quot;}]"></div>

# methylthioninium chloride

- **generic name:** methylthioninium chloride
- **ATC codes:** `V03AB17`, `V04CG05`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Methylthioninium chloride is a chemical compound classified as an antidote and diagnostic agent, primarily used to treat methemoglobinemia. It is typically administered via intravenous injection. It is a widely recognized essential medicine listed by the World Health Organization.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q422134](https://www.wikidata.org/wiki/Q422134), [Wikipedia](https://en.wikipedia.org/wiki/Methylene_blue?oldid=1384816917) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:55 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 4,058/196 | einfracz / qwen3.8-27b | 4 | 1/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 187 matched, 25 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `van_2026.pdf` | van Maanen E et al., Atypical population pharmacokinetics of…, British journal of clinical… (2026) | popPK | 5 | [10.1002/bcp.70539](https://doi.org/10.1002/bcp.70539) | [41917677](https://pubmed.ncbi.nlm.nih.gov/41917677) | The study describes the pharmacokinetics of hydromethylthionine (HMT) as the active moiety derived from methylthioninium chloride (MTC) and HMTM, but specific numeric parameter values (CL, V, ka, etc.) are not present in the provided text. |

<sub>queue written 2026-11-24 03:55 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baddeley_2015 | irrelevant | 2 | 0 | The paper discusses MTC pharmacokinetics in the context of clinical efficacy and dose-response, but the provided evidence contains no quantitative disposition parameters (CL, V, ka, etc.), appearing to focus on mechanistic hypotheses and a model without listing specific numeric values. |
| PGx | Baddeley_2015 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of methylthioninium but does not report any pharmacogenomic effects (gene variants) on its parameters. |
| popPK | Bateman_2016 | irrelevant | 0 | 0 | This is a conference abstract listing; the only methylene blue mention (P050) is a clinical effectiveness abstract with no PK parameters or numeric values. |
| popPK | Burrows_1984 | relevant | 10 | 3 | The paper studies methylene blue (methylthioninium chloride) in sheep and reports the elimination rate constant (beta), but does not explicitly provide clearance (CL) or volume (V) values in the provided text. |
| PGx | Burrows_1984 | not_relevant | 0 | 0 | The paper studies methylene blue pharmacokinetics in sheep using sodium nitrite as a challenge, not gene variants or genotypes. |
| popPK | Cairns_1989 | irrelevant | 0 | 0 | The study investigates the renal hemodynamic effects of endothelin in rabbit isolated perfused kidneys and does not report pharmacokinetic parameters for methylthioninium chloride. |
| PGx | Cairns_1989 | not_relevant | 0 | 0 | The paper does not study methylthioninium_chloride or any pharmacogenomic interaction for it; it focuses on endothelin. |
| popPK | Carter_1981 | irrelevant | 0 | 0 | The study investigates the effect of vasoactive intestinal polypeptide (VIP) on myometrial blood flow in goats, and methylene blue (methylthioninium chloride) is used only as a tracer to visualize tissue staining, not as the subject of pharmacokinetic analysis. |
| PGx | Carter_1981 | not_relevant | 0 | 0 | The study investigates the hemodynamic effects of vasoactive intestinal polypeptide (VIP) on goat uterine blood flow and does not involve the pharmacokinetics or pharmacodynamics of methylthioninium chloride. |
| popPK | Choi_2015 | irrelevant | 0 | 0 | The paper is a review of photodynamic therapy for psoriasis and does not report pharmacokinetic parameters for methylthioninium chloride. |
| PGx | Choi_2015 | not_relevant | 0 | 0 | The paper discusses photodynamic therapy for psoriasis and mentions methylene blue (a related compound) only in the context of general efficacy and tolerability, without reporting any pharmacogenomic effects or PK/PD parameters for methylthioninium chloride. |
| popPK | Deiana_2009 | irrelevant | 0 | 0 | The study is a behavioral pharmacology assessment of cognitive efficacy in mice and does not report any pharmacokinetic disposition parameters (e.g., clearance, volume of distribution) for methylthioninium chloride. |
| PGx | Deiana_2009 | not_relevant | 0 | 0 | The study evaluates the efficacy of methylthioninium chloride in mice but does not investigate the impact of any gene variant or genotype on its pharmacokinetics or pharmacodynamics. |
| popPK | Guerrero-Muñoz_2014 | irrelevant | 0 | 0 | The paper is a review on structural features of toxic oligomers in amyloid diseases and contains no pharmacokinetic data or quantitative parameters for methylthioninium chloride. |
| PGx | Guerrero-Muñoz_2014 | not_relevant | 0 | 0 | The paper is a review on structural targets of amyloid oligomers and does not discuss methylthioninium chloride or pharmacogenomics. |
| popPK | Kotani_2025 | irrelevant | 0 | 0 | This is a narrative review of septic shock haemodynamic management; methylene blue is only mentioned as a vasoactive agent with no PK parameters reported. |
| popPK | Kozaki_1981 | irrelevant | 0 | 0 | The evidence consists only of GROBID metadata and a hash, containing no pharmacokinetic data for methylthioninium chloride. |
| PGx | Kozaki_1981 | not_relevant | 0 | 0 | The text contains only metadata for the GROBID software and lacks any pharmacogenomic data regarding methylthioninium chloride. |
| popPK | Kubes_1993 | irrelevant | 0 | 0 | The study focuses on microvascular permeability and cGMP regulation in felines, with no mention of methylthioninium chloride (thiamine) or its pharmacokinetic parameters. |
| PGx | Kubes_1993 | not_relevant | 0 | 0 | The paper studies cGMP and nitric oxide effects on microvascular permeability in feline intestine and does not mention methylthioninium chloride or any pharmacogenomic variants. |
| popPK | Ledowski_2006 | irrelevant | 0 | 0 | The study uses methylene blue (not methylthioninium chloride) as a dye to measure bronchial mucus transport velocity and contains no pharmacokinetic parameters. |
| PGx | Ledowski_2006 | not_relevant | 0 | 0 | The paper compares anesthetic techniques on ciliary transport and does not report pharmacogenomic effects on the PK/PD of methylthioninium chloride. |
| popPK | Milani_1992 | irrelevant | 2 | 3 | Methylene blue (chemical equivalent of methylthioninium chloride) is used as a diagnostic tracer to measure ascites volume and peritoneal clearance, rather than as a subject drug for which population PK parameters are being characterized. |
| PGx | Milani_1992 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of methylene blue as a diagnostic tracer in cirrhotic ascites, but it does not report any effect of a gene variant or genotype on these parameters. |
| popPK | Milani_1994 | irrelevant | 0 | 0 | The study uses methylene blue (methylthioninium chloride) as a diagnostic probe to measure ascites clearance, but does not report pharmacokinetic parameters (CL, V, ka, etc.) for the dye itself. |
| PGx | Milani_1994 | not_relevant | 0 | 0 | The paper investigates intraabdominal pressure in cirrhosis using methylene blue as a tracer and furosemide for treatment; it does not study methylthioninium chloride or any pharmacogenomic effects. |
| popPK | Milani_1995 | irrelevant | 0 | 0 | The study uses methylene blue (not methylthioninium chloride) as a tracer to measure free-water clearance in cirrhosis patients and does not report pharmacokinetic parameters for methylthioninium chloride. |
| PGx | Milani_1995 | not_relevant | 0 | 0 | The paper studies frusemide in cirrhosis and uses methylene blue as a tracer for fluid dynamics, providing no data on the pharmacokinetics or pharmacodynamics of methylthioninium chloride or any genetic variants. |
| popPK | Neef_1975 | irrelevant | 0 | 0 | The study uses methylene blue as a diagnostic dye to mark infarction borders and does not report any pharmacokinetic parameters. |
| PGx | Neef_1975 | not_relevant | 0 | 0 | The paper uses methylene blue (methylthioninium chloride) as a staining agent in a surgical/physiological study, not as a therapeutic drug in a pharmacogenomic context. |
| popPK | Souslova_2013 | irrelevant | 0 | 0 | The paper is a review of personalized medicine in Alzheimer's disease and depression, with no mention of methylthioninium chloride or its pharmacokinetics. |
| PGx | Souslova_2013 | not_relevant | 0 | 0 | The paper is a general review of personalized medicine in Alzheimer's and depression, discussing SSRIs and biomarkers, but does not mention methylthioninium chloride or specific pharmacogenomic effects on its PK/PD parameters. |
| popPK | Veerman_2023 | irrelevant | 0 | 0 | Methylene blue is only used as an antidote; the reported PK parameters (Vd 1.5 L/kg, half-life 10–50 h) belong to dapsone, not methylthioninium chloride. |
| popPK | Workum_2019 | irrelevant | 0 | 0 | The paper is a case report on sodium nitrite overdose where methylthioninium chloride is used as a therapeutic agent, with no quantitative pharmacokinetic parameters reported. |
| PGx | Workum_2019 | not_relevant | 0 | 0 | The paper mentions G6PD deficiency as a contraindication for methylthioninium chloride but does not report any observed pharmacokinetic or pharmacodynamic changes in the treated patients. |
| popPK | Xia_2020 | irrelevant | 0 | 0 | The paper focuses on myricetin adsorption onto starch nanoparticles and in vitro release, with no data or mention of methylthioninium chloride pharmacokinetics. |
| PGx | Xia_2020 | not_relevant | 0 | 0 | The paper discusses myricetin and starch nanoparticles, containing no information regarding methylthioninium_chloride or pharmacogenomics. |
| popPK | el-Yazigi_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mitoxantrone in rabbits, using methylthioninium chloride (Methylene Blue) only as an internal standard. |
| PGx | el-Yazigi_1989 | not_relevant | 0 | 0 | The paper describes a chromatographic method for mitoxantrone analysis and PK in rabbits; it does not involve methylthioninium chloride or pharmacogenomics. |
| popPK | van_2026 | relevant | 5 | 0 | The study describes the pharmacokinetics of hydromethylthionine (HMT) as the active moiety derived from methylthioninium chloride (MTC) and HMTM, but specific numeric parameter values (CL, V, ka, etc.) are not present in the provided text. |
| PGx | van_2026 | not_relevant | 0 | 0 | The paper describes population pharmacokinetics and time-varying clearance covariates (e.g., disease status, time) but does not report effects of genetic variants on methylthioninium chloride PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethylthioninium_chloride%5D&body=Drug%3A%20methylthioninium_chloride%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methylthioninium_chloride/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
