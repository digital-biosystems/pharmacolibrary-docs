<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;vemurafenib&quot;}]"></div>

# vemurafenib

- **generic name:** vemurafenib
- **ATC codes:** `L01EC01`
- **DrugBank:** [DB08881](https://go.drugbank.com/drugs/DB08881) · **PubChem:** [CID 42611257](https://pubchem.ncbi.nlm.nih.gov/compound/42611257)
- **molar mass:** 489.922 g/mol (C23H18ClF2N3O3S) — DrugBank
- **groups:** approved, investigational

## About

Vemurafenib is a B-Raf enzyme inhibitor used to treat late-stage melanoma, skin cancer, hairy cell leukemia, and Erdheim-Chester disease. It is given by mouth as a tablet and is well absorbed. The medication is authorised in the European Union for the treatment of melanoma.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q423111](https://www.wikidata.org/wiki/Q423111), [Wikipedia](https://en.wikipedia.org/wiki/Vemurafenib?oldid=1354417004) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hu_2022_CC50](drugs/drug_vemurafenib/pd_Hu_2022_CC50.md) | cytotoxicity ← vemurafenib · stimulation effect | — | Hu B et al., Vemurafenib Inhibits Enterovirus A71 Ge…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15091067](https://doi.org/10.3390/ph15091067) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hu_2022_CPE](drugs/drug_vemurafenib/pd_Hu_2022_CPE.md) | cytopathic effect (CPE) inhibition ← vemurafenib · inhibition effect | — | Hu B et al., Vemurafenib Inhibits Enterovirus A71 Ge…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15091067](https://doi.org/10.3390/ph15091067) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fallahi-Sichani_2015_apoptosis](drugs/drug_vemurafenib/pd_Fallahi_Sichani_2015_apoptosis.md) | apoptosis ← vemurafenib · direct Emax (saturable) effect | — | Fallahi-Sichani M et al., Systematic analysis of BRAF(V600E) mela…, Molecular systems biology (2015) | [10.15252/msb.20145877](https://doi.org/10.15252/msb.20145877) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fallahi-Sichani_2015_viability](drugs/drug_vemurafenib/pd_Fallahi_Sichani_2015_viability.md) | viability ← vemurafenib · direct Emax (saturable) effect | — | Fallahi-Sichani M et al., Systematic analysis of BRAF(V600E) mela…, Molecular systems biology (2015) | [10.15252/msb.20145877](https://doi.org/10.15252/msb.20145877) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 08:24 | 0:04 | 0/0/0 | 2/2/0 | 0/0/0 | 3,538/183 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2017.pdf` | Zhang W et al., Clinical Pharmacokinetics of Vemurafenib, Clinical pharmacokinetics (2017) | popPK | 9 | [10.1007/s40262-017-0523-7](https://doi.org/10.1007/s40262-017-0523-7) | [28255850](https://pubmed.ncbi.nlm.nih.gov/28255850) | The paper describes a population PK analysis of vemurafenib in humans but only provides a half-life; key quantitative parameters like clearance and volume are not explicitly listed in the evidence provided. |

<sub>queue written 2026-11-24 08:24 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Basu_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug resistance mechanisms (ABC transporter expression) in melanoma cell lines and does not report population pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Basu_2017 | not_relevant | 0 | 0 | The paper investigates the effect of growth hormone receptor knockdown on vemurafenib resistance in cell lines, but it does not report a pharmacogenomic effect where a specific human gene variant/genotype alters a PK or PD parameter. |
| popPK | Fallahi-Sichani_2015 | irrelevant | 0 | 0 | This in-vitro signaling study reports no quantitative vemurafenib disposition parameters. |
| popPK | Han_2015 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for cobimetinib, not vemurafenib, which is only mentioned as a co-administered drug. |
| PGx | Han_2015 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of cobimetinib, not vemurafenib, and does not report any pharmacogenomic effects. |
| popPK | Hong_2015 | irrelevant | 0 | 0 | This is an in-vitro study on novel quinone derivatives for cancer treatment, using vemurafenib only as a comparator for resistance, with no pharmacokinetic data provided. |
| PGx | Hong_2015 | not_relevant | 0 | 0 | The paper reports the synthesis and anticancer activity of novel quinone derivatives against vemurafenib-resistant cells, but does not report any pharmacogenomic effects on PK or PD parameters of vemurafenib. |
| popPK | Hu_2022 | irrelevant | 0 | 0 | This is an in-vitro antiviral study and reports no quantitative vemurafenib disposition parameters. |
| popPK | Kim_2019 | irrelevant | 2 | 0 | The paper is a narrative review of clinical PK/PD considerations in melanoma treatment and does not report original quantitative disposition parameters or model fits for vemurafenib in the provided text. |
| PGx | Kim_2019 | not_relevant | 0 | 0 | The text is a general review introduction discussing the clinical importance of PK/PD for melanoma therapies but does not report specific gene-variant interactions or quantitative pharmacogenomic data for vemurafenib. |
| popPK | Puszkiel_2016 | relevant | 9 | 2 | The paper describes a population PK study for vemurafenib with a one-compartment model, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| PGx | Puszkiel_2016 | not_relevant | 0 | 0 | The study analyzes pharmacokinetics and the impact of HGF levels on toxicity, but it does not investigate the effect of a gene variant or genotype on PK or PD parameters. |
| popPK | Wang_2020 | relevant | 10 | 4 | The study develops a population PK model for vemurafenib in children, but the specific numeric parameter estimates (e.g., typical CL, V, ka) are not explicitly listed in the provided abstract text, only variability metrics and bioavailability. |
| PGx | Wang_2020 | not_relevant | 5 | 4 | The paper describes PK characteristics in a cohort with the BRAF V600E mutation, but it does not analyze the effect of specific pharmacogenomic variants (e.g., CYP3A5 or SLCO1B1) on PK parameters, nor does it compare different genotypes to quantify a pharmacogenomic effect. |
| popPK | Zhang_2017 | relevant | 9 | 2 | The paper describes a population PK analysis of vemurafenib in humans but only provides a half-life; key quantitative parameters like clearance and volume are not explicitly listed in the evidence provided. |
| PGx | Zhang_2017 | not_relevant | 0 | 0 | The paper discusses general pharmacokinetics and clinical population covariates (age, sex, race) but does not report on any pharmacogenomic effects (e.g., CYP3A4 polymorphisms) on vemurafenib PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvemurafenib%5D&body=Drug%3A%20vemurafenib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vemurafenib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
