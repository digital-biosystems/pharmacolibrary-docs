<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01X&quot;,&quot;href&quot;:&quot;atc/S01X.md&quot;},{&quot;label&quot;:&quot;cenegermin&quot;}]"></div>

# cenegermin

- **generic name:** cenegermin
- **ATC codes:** `S01XA24`
- **DrugBank:** [DB13926](https://go.drugbank.com/drugs/DB13926) · **PubChem:** none
- **groups:** approved, investigational

## About

Cenegermin is a recombinant nerve growth factor prescribed to treat severe keratitis. It is administered as ophthalmic drops applied directly to the affected eye. The medication is authorised in the European Union for use in humans.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q30315101](https://www.wikidata.org/wiki/Q30315101), [Wikipedia](https://en.wikipedia.org/wiki/Cenegermin?oldid=1345276926) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Mattioli_2025_reference](drugs/drug_cenegermin/Cenegermin_Mattioli2025_reference.md) | — | 1-compartment (no model) | 0 | Mattioli SL et al., Human nerve growth factor delivery to t…, PNAS nexus (2025) | [10.1093/pnasnexus/pgaf250](https://doi.org/10.1093/pnasnexus/pgaf250) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:12 | 2:19 | 0/1/0 | 0/0/0 | 0/0/0 | 3,181/176 | einfracz / qwen3.8-27b | 4 | 0/1 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 33 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altar_1991 | irrelevant | 0 | 0 | The paper studies nerve growth factor (NGF) binding in rat brain, not the pharmacokinetics of the drug cenegermin. |
| PGx | Altar_1991 | not_relevant | 0 | 0 | The paper characterizes NGF binding sites in the rat brain and does not involve cenegermin or any pharmacogenomic effects. |
| popPK | Barnett_1991 | irrelevant | 0 | 0 | The paper discusses the physicochemical characterization of nerve growth factor (NGF), not cenegermin. |
| PGx | Barnett_1991 | not_relevant | 0 | 0 | The paper describes the physicochemical characterization of recombinant NGF, not the pharmacogenomics of cenegermin. |
| popPK | Cenciarelli_2006 | irrelevant | 0 | 0 | The paper describes in vitro gene expression and cell biology of neural stem cells and is completely unrelated to the pharmacokinetics of cenegermin. |
| PGx | Cenciarelli_2006 | not_relevant | 0 | 0 | The paper discusses in vitro gene therapy for neurodegenerative diseases and has no connection to cenegermin or its pharmacogenomics. |
| popPK | Coco_2023 | irrelevant | 0 | 0 | The paper is a clinical review of the efficacy of cenegermin in dry eye disease and does not report any pharmacokinetic parameters. |
| PGx | Coco_2023 | not_relevant | 0 | 0 | The paper is a review on the clinical efficacy of cenegermin for dry eye disease and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Colangelo_2005 | irrelevant | 0 | 0 | The study is about the production and activity of recombinant human nerve growth factor (rhNGF), not cenegermin, and does not contain any pharmacokinetic data for cenegermin. |
| PGx | Colangelo_2005 | not_relevant | 0 | 0 | The paper reports the laboratory production and in vitro/animal efficacy of recombinant human nerve growth factor (rhNGF), which is a different drug from cenegermin and does not involve pharmacogenomic analysis. |
| popPK | Dicou_1992 | irrelevant | 0 | 0 | The paper describes the production of recombinant nerve growth factor in E. coli and contains no pharmacokinetic data for cenegermin. |
| PGx | Dicou_1992 | not_relevant | 0 | 0 | The paper reports on the production of recombinant NGF and does not mention cenegermin or pharmacogenomics. |
| popPK | Emmett_1995 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of NGF and bFGF in a rat model and does not involve cenegermin or pharmacokinetic parameters. |
| PGx | Emmett_1995 | not_relevant | 0 | 0 | The paper evaluates the efficacy of NGF and FGF in Alzheimer's models and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of cenegermin. |
| popPK | Garrett_1997 | irrelevant | 0 | 0 | The study focuses on neurotrophic effects of alpha-lipoic acid in diabetic rats and does not involve the drug cenegermin or its pharmacokinetics. |
| PGx | Garrett_1997 | not_relevant | 0 | 0 | The study focuses on alpha-lipoic acid and NGF in diabetic rats, not the pharmacogenomics of cenegermin. |
| popPK | Gazzano-Santoro_1999 | irrelevant | 0 | 0 | The paper describes a cell survival assay for recombinant human nerve growth factor (rhNGF) in rat PC12 cells and contains no data regarding cenegermin. |
| PGx | Gazzano-Santoro_1999 | not_relevant | 0 | 0 | The paper describes a bioassay for nerve growth factor potency, not pharmacogenomics or PK/PD of cenegermin. |
| popPK | Gu_2009 | irrelevant | 0 | 0 | The study concerns nerve growth factor (NGF) and Alzheimer's disease in rats, not the drug cenegermin. |
| PGx | Gu_2009 | not_relevant | 0 | 0 | The paper studies the efficacy of NGF-loaded microspheres in a rat model of Alzheimer's disease and does not mention cenegermin or any pharmacogenomic effects. |
| popPK | Iwane_1990 | irrelevant | 0 | 0 | The paper describes the production of recombinant nerve growth factor (NGF) and contains no data on cenegermin. |
| PGx | Iwane_1990 | not_relevant | 0 | 0 | The paper focuses on the production of recombinant human nerve growth factor (NGF), not cenegermin, and contains no pharmacogenomic data. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The paper concerns the expression of nerve growth factor in tobacco cells and does not involve the drug cenegermin or any pharmacokinetic parameters. |
| PGx | Jia_2026 | not_relevant | 0 | 0 | The paper discusses the expression of nerve growth factor in tobacco cells and has no mention of cenegermin or pharmacogenomic effects. |
| popPK | Kakihana_1993 | irrelevant | 0 | 0 | The paper investigates the biological activity of nerve growth factor (NGF) and contains no data regarding cenegermin. |
| PGx | Kakihana_1993 | not_relevant | 0 | 0 | The paper describes the biological activity of recombinant nerve growth factor and does not discuss the drug cenegermin or pharmacogenomic effects. |
| popPK | Koliatsos_1991 | irrelevant | 0 | 0 | The paper investigates the neuroprotective effects of recombinant human nerve growth factor (rhNGF) in rats, not the pharmacokinetics of cenegermin. |
| PGx | Koliatsos_1991 | not_relevant | 0 | 0 | The paper discusses recombinant human nerve growth factor (rhNGF) in rats and does not mention cenegermin or any pharmacogenomic effects on PK/PD parameters. |
| popPK | Lam_2001 | irrelevant | 0 | 0 | The paper describes the formulation and in vitro release of nerve growth factor (rhNGF), not the pharmacokinetics of cenegermin. |
| PGx | Lam_2001 | not_relevant | 0 | 0 | The paper focuses on the formulation of nerve growth factor (rhNGF) and does not mention cenegermin or pharmacogenomic effects. |
| popPK | Lapchak_1992 | irrelevant | 0 | 0 | The study investigates the effects of recombinant human nerve growth factor on cholinergic function in rats and does not involve cenegermin. |
| PGx | Lapchak_1992 | not_relevant | 0 | 0 | The paper does not discuss cenegermin or any pharmacogenomic interactions. |
| popPK | Nguyen_2000 | irrelevant | 0 | 0 | The study focuses on recombinant human nerve growth factor (rhNGF) and not the drug cenegermin. |
| PGx | Nguyen_2000 | not_relevant | 0 | 0 | The paper investigates the stability and plasma protein binding of recombinant human nerve growth factor (rhNGF), not the pharmacogenomics of cenegermin. |
| popPK | Pagani_2008 | irrelevant | 0 | 0 | The paper concerns nerve growth factor (NGF) and neural stem cells, not the pharmacokinetics of cenegermin. |
| PGx | Pagani_2008 | not_relevant | 0 | 0 | The paper is about cell therapy using rhNGF in rats, not a pharmacogenomic study of cenegermin. |
| popPK | Shen_2023 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of recombinant human nerve growth factor (rhNGF), not cenegermin. |
| PGx | Shen_2023 | not_relevant | 0 | 0 | The paper studies recombinant human nerve growth factor (rhNGF), not cenegermin, and does not report pharmacogenomic effects. |
| popPK | Wan_2021 | irrelevant | 0 | 0 | The study concerns rhNGF (recombinant human nerve growth factor), not cenegermin (rhEGF), and does not report population pharmacokinetic parameters. |
| PGx | Wan_2021 | not_relevant | 0 | 0 | The paper evaluates a pharmacodynamic model in rabbits and reports no gene variant/genotype data or pharmacogenomic analysis. |
| popPK | Wen_2011 | irrelevant | 0 | 0 | This is a review on intranasal delivery to the brain and does not report specific pharmacokinetic parameters for cenegermin. |
| PGx | Wen_2011 | not_relevant | 0 | 0 | The paper is a review on intranasal drug delivery to the brain and does not mention cenegermin or any pharmacogenomic effects. |
| popPK | Xia_2018 | irrelevant | 0 | 0 | The paper studies the release of VEGF and NGF for nerve regeneration and does not involve the drug cenegermin. |
| PGx | Xia_2018 | not_relevant | 0 | 0 | The paper discusses VEGF and NGF delivery for nerve regeneration and does not mention cenegermin or any pharmacogenomic effects. |
| popPK | Xiao_2008 | irrelevant | 0 | 0 | The paper studies the production of nerve growth factor beta in rabbit milk and contains no pharmacokinetic data or mention of cenegermin. |
| PGx | Xiao_2008 | not_relevant | 0 | 0 | The paper describes the production of recombinant human nerve growth factor beta (hNGF-beta) in rabbit milk, not the pharmacogenomics of cenegermin. |
| popPK | Xiao_2009 | irrelevant | 0 | 0 | The paper describes the production of recombinant human nerve growth factor beta (hNGF-beta) in goat milk and is not a pharmacokinetic study of cenegermin. |
| PGx | Xiao_2009 | not_relevant | 0 | 0 | The paper describes the recombinant production of human nerve growth factor beta (hNGF-beta) in goat milk using adenovirus, which is unrelated to the pharmacogenomics, PK, or PD of cenegermin. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper focuses on nerve regeneration scaffolds in rats and does not involve the drug cenegermin or pharmacokinetic modeling. |
| PGx | Zhang_2023 | not_relevant | 0 | 0 | The paper focuses on nerve regeneration using nanofibrous scaffolds and stem cells, with no mention of cenegermin or pharmacogenomics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcenegermin%5D&body=Drug%3A%20cenegermin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cenegermin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 17:15 UTC</sub>
