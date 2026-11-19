<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Aminopterin&quot;}]"></div>

# Aminopterin

- **generic name:** Aminopterin
- **T3DB:** [T3D4741](http://www.t3db.ca/toxins/T3D4741) · **DrugBank:** [DB08878](https://go.drugbank.com/drugs/DB08878) · **PubChem:** [CID 2154](https://pubchem.ncbi.nlm.nih.gov/compound/2154)
- **groups:** approved, withdrawn

## About

Aminopterin Syndrome Sine Aminopterin (ASSA, OMIM 600325) is an embryopathy caused by maternal treatment with the olic acid antagonist aminopterin has been recognized since 1952 when aminopterin was used as an abortifacient. The characteristic phenotype of the children who survived infancy after having been exposed to aminopterin or its methyl derivative, methotrexate, in early pregnancy included a very unusual facies, skull anomalies, and skeletal defects.(OMIM). Aminopterin is an antimetabolite drug used in treatment of cancer and autoimmune diseases. …

- **Category:** Food Toxin, Synthetic Toxin
- **Sources and uses:** Aminopterin Syndrome Sine Aminopterin (ASSA, OMIM 600325) is an embryopathy caused by maternal treatment with the olic acid antagonist aminopterin has been recognized since 1952 when aminopterin was used as an abortifacient. Aminopterin is an antimetabolite drug used in treatment of cancer and autoimmune diseases.
- **Mechanism of toxicity:** Aminopterin is an amino derivative of folic acid which binds competitively to the dihydrofolate reductase enzyme to block tetrahydrofolate synthesis. Tetrahydrofolate is essential in the production of purines and pyrimadines, thus it's deficiency results in a reduction of DNA, RNA and protein synthesis.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4741">T3DB T3D4741</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 54-62-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:376180">ChEBI 376180</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| aminopterin | parent | 440.4 | C19H20N8O5 | PubChem | [2154](https://pubchem.ncbi.nlm.nih.gov/compound/2154) | Glode_1979, Ratliff_1998 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — retention function missing A1, A2 — TK_Retention canno…</sub> | [Glode_1979_reference](drugs/toxin_aminopterin/Aminopterin_Glode1979_reference.md) | held back | retention, 2 pools | 2 | Glode LM et al., A Phase 1 study of high doses of aminop…, Cancer research (1979) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Ratliff_1998_reference](drugs/toxin_aminopterin/Aminopterin_Ratliff1998_reference.md) | — | retention function (no model) | 3 | Ratliff AF et al., Phase I and pharmacokinetic trial of am…, Journal of clinical oncolog… (1998) | [10.1200/JCO.1998.16.4.1458](https://doi.org/10.1200/JCO.1998.16.4.1458) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aminopterin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DHFR (inhibitor), PDF (inhibitor), SLC46A1 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-16 17:44 | 11:32 | 1/1/0 | 0/0/0 | 0/0/0 | 207,093/16,630 | einfracz / qwen3.8-flash-next | 4 | 1/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 36 matched, 36 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ratliff_1998.pdf` | Ratliff AF et al., Phase I and pharmacokinetic trial of am…, Journal of clinical oncolog… (1998) | popPK | 10 | [10.1200/JCO.1998.16.4.1458](https://doi.org/10.1200/JCO.1998.16.4.1458) | [9552052](https://pubmed.ncbi.nlm.nih.gov/9552052) | The paper reports quantitative pharmacokinetic parameters (AUC, half-life, oral bioavailability) for aminopterin in humans, with numerical values explicitly present in the abstract. |
| `Menter_2012.pdf` | Menter A et al., Intestinal transport of aminopterin ena…, The Journal of pharmacology… (2012) | popPK | 9 | [10.1124/jpet.112.195479](https://doi.org/10.1124/jpet.112.195479) | [22653877](https://pubmed.ncbi.nlm.nih.gov/22653877) | The paper reports pharmacokinetic data (Cmax, AUC) for aminopterin (AMT) enantiomers in dogs and humans, confirming relevance, but the specific numeric values are not present in the provided text (likely in tables/figures). |
| `Glode_1979.pdf` | Glode LM et al., A Phase 1 study of high doses of aminop…, Cancer research (1979) | popPK | 8 |  | [383286](https://pubmed.ncbi.nlm.nih.gov/383286) | The abstract explicitly reports quantitative terminal half-life values (t1/2 alpha and t1/2 beta) for aminopterin elimination in humans. |
| `Cole_2005.pdf` | Cole PD et al., Phase II trial of oral aminopterin for…, Clinical cancer research :… (2005) | popPK | 7 | [10.1158/1078-0432.CCR-05-0355](https://doi.org/10.1158/1078-0432.CCR-05-0355) | [16299240](https://pubmed.ncbi.nlm.nih.gov/16299240) | The paper reports a quantitative pharmacokinetic parameter (AUC) for aminopterin in humans. |
| `Kremer_2002.pdf` | Kremer P et al., Efficacy and tolerability of an aminopt…, Anti-cancer drugs (2002) | popPK | 7 | [10.1097/00001813-200207000-00008](https://doi.org/10.1097/00001813-200207000-00008) | [12172507](https://pubmed.ncbi.nlm.nih.gov/12172507) | The paper reports biodistribution and plasma clearance of an aminopterin-albumin conjugate in rats, which are toxicokinetic parameters, but specific numeric kinetic constants (like half-life or clearance values) are not explicitly stated in the provided text, only percentages and doses. |

<sub>queue written 2026-11-16 17:37 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bakay_1979 | not_relevant | 0 | 0 | The paper discusses an HPRT enzyme variant and cell survival in HAT (Hypoxanthine-Aminopterin-Thymidine) media, but does not report pharmacokinetic or pharmacodynamic parameters of aminopterin itself. |
| PGx | Cole_2008 | not_relevant | 6 | 3 | The text reports an association between MTHFR/MTRR genotypes and neutrophil counts (a surrogate PD marker of toxicity) but does not report fitted effect sizes for PK parameters or specific pharmacodynamic endpoints with quantitative estimates. |
| popPK | Hartley_1993 | irrelevant | 4 | 9 | The paper reports pharmacokinetics for edatrexate (10-ethyl-10-deaza-aminopterin), a structural analog and metabolite of aminopterin, not aminopterin itself. |
| popPK | Kremer_2002 | relevant | 7 | 3 | The paper reports biodistribution and plasma clearance of an aminopterin-albumin conjugate in rats, which are toxicokinetic parameters, but specific numeric kinetic constants (like half-life or clearance values) are not explicitly stated in the provided text, only percentages and doses. |
| PGx | Liu_1993 | not_relevant | 1 | 0 | The paper studies AZT cytotoxicity and uses aminopterin only as a component of HAT media for cell selection, with no pharmacokinetic or pharmacodynamic data reported for aminopterin itself. |
| popPK | Lu_2011 | irrelevant | 4 | 0 | The paper discusses EC0746, a folic acid-aminopterin conjugate, not free aminopterin, and the extracted evidence contains no quantitative kinetic parameters for aminopterin itself. |
| popPK | Lu_2015 | irrelevant | 1 | 0 | The paper focuses on the pharmacokinetics of EC0565 (a folic acid-everolimus conjugate); aminopterin is mentioned only as a comparison compound in a different study or as a structural component in a different conjugate (EC0746), with no kinetic parameters reported for aminopterin itself. |
| popPK | McGuire_2006 | irrelevant | 2 | 0 | The paper focuses on Methotrexate (MTX) transport kinetics; aminopterin is only mentioned regarding growth inhibition potency without any kinetic parameters. |
| popPK | Mendrick_1983 | irrelevant | 0 | 0 | The paper is about monoclonal antibody production against rat glomerular antigens; aminopterin is mentioned only as a component of the selection medium (HAT medium) and is not the subject of toxicokinetic analysis. |
| popPK | Menter_2012 | relevant | 9 | 2 | The paper reports pharmacokinetic data (Cmax, AUC) for aminopterin (AMT) enantiomers in dogs and humans, confirming relevance, but the specific numeric values are not present in the provided text (likely in tables/figures). |
| popPK | Qu_2014 | irrelevant | 0 | 0 | Aminopterin appears only as part of the HAT medium selection system for hybridoma production, not as the subject substance. |
| popPK | Tanaka_2007 | irrelevant | 0 | 0 | Aminopterin is mentioned only as a property of the myeloma cell line used for antibody preparation, not as the subject of kinetic analysis. |
| PGx | Williams_1978 | not_relevant | 1 | 0 | The paper discusses aminopterin only in the context of HAT selection medium; it does not report PK/PD parameters or pharmacogenomic effects on aminopterin itself. |
| popPK | Zhao_2015 | irrelevant | 0 | 0 | Aminopterin is only mentioned as part of the name of a hybridoma cell line (HAT-sensitive), with no kinetic data for aminopterin. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | Aminopterin is mentioned only as a component of the HAT (hypoxanthine-aminopterin-thymidine) selection medium used for cell fusion, not as the subject of a toxicokinetic study; no kinetic parameters are reported for aminopterin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baminopterin%5D&body=Drug%3A%20aminopterin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_aminopterin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-16 17:38 UTC</sub>
