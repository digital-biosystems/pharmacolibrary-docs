<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D05A&quot;,&quot;href&quot;:&quot;atc/D05A.md&quot;},{&quot;label&quot;:&quot;methoxsalen&quot;}]"></div>

# methoxsalen

- **generic name:** methoxsalen
- **ATC codes:** `D05AD02`, `D05BA02`
- **DrugBank:** [DB00553](https://go.drugbank.com/drugs/DB00553) · **PubChem:** [CID 4114](https://pubchem.ncbi.nlm.nih.gov/compound/4114)
- **molar mass:** 216.192 g/mol (C12H8O4) — DrugBank
- **groups:** approved, investigational

## About

Methoxsalen is a psoralen used to treat skin conditions such as vitiligo, mycosis fungoides, cutaneous T cell lymphoma, graft-versus-host disease, and acropustulosis. It is an approved drug available in topical and systemic antipsoriatic preparations, and is also being studied for other uses; it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408570](https://www.wikidata.org/wiki/Q408570) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:16 | 5:23 | 0/0/0 | 2/3/1 | 0/0/0 | 84,885/12,702 | openai / gpt-6-luna | 4 | 1/0 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Guillon_2018_keratinocyte_growth_inhibition](drugs/drug_methoxsalen/pd_Guillon_2018_keratinocyte_growth_inhibition.md) | keratinocyte growth inhibition ← methoxsalen (8-MOP; compound 3) · inhibition effect | — | Guillon CD et al., SYNTHESIS AND EVALUATION OF WATER-SOLUB…, Heterocyclic letters (2018) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2015_PTP1B](drugs/drug_methoxsalen/pd_Li_2015_PTP1B.md) | PTP1B inhibitory effect ← methoxsalen · inhibition effect | — | Li JL et al., PTP1B inhibitors from stems of Angelica…, Bioorganic & medicinal chem… (2015) | [10.1016/j.bmcl.2015.04.003](https://doi.org/10.1016/j.bmcl.2015.04.003) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lim_2026_skin_cancer](drugs/drug_methoxsalen/pd_Lim_2026_skin_cancer.md) | skin cancer ← methoxsalen · time-to-event model | — | Lim W et al., IARC Group 1 Pharmaceuticals and Associ…, Cancer research and treatme… (2026) | [10.4143/crt.2024.1201](https://doi.org/10.4143/crt.2024.1201) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Arora_1976_duration_of_methoxsalen_s_phototoxic_potentially](drugs/drug_methoxsalen/pd_Arora_1976_duration_of_methoxsalen_s_phototoxic_potentially.md) | duration of methoxsalen's phototoxic potentially ← methoxsalen · direct linear effect | — | Arora SK et al., Factors influencing methoxsalen phototo…, Archives of dermatology (1976) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">cattle</span> | [Lake_1995_coumarin_7_hydroxylase_activity](drugs/drug_methoxsalen/pd_Lake_1995_coumarin_7_hydroxylase_activity.md) | coumarin 7-hydroxylase activity ← methoxsalen · inhibition effect | — | Lake BG et al., Metabolism of coumarin by precision-cut…, Xenobiotica; the fate of fo… (1995) | [10.3109/00498259509061839](https://doi.org/10.3109/00498259509061839) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Mäenpää_1993_COH_activity](drugs/drug_methoxsalen/pd_M_enp_1993_COH_activity.md) | coumarin 7-hydroxylase activity ← methoxsalen · inhibition effect | — | Mäenpää J et al., Differential inhibition of coumarin 7-h…, Biochemical pharmacology (1993) | [10.1016/0006-2952(93)90247-t](https://doi.org/10.1016/0006-2952(93)90247-t) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Mäenpää_1993_COH_activity_2](drugs/drug_methoxsalen/pd_M_enp_1993_COH_activity_2.md) | coumarin 7-hydroxylase activity ← methoxsalen · inhibition effect | — | Mäenpää J et al., Differential inhibition of coumarin 7-h…, Biochemical pharmacology (1993) | [10.1016/0006-2952(93)90247-t](https://doi.org/10.1016/0006-2952(93)90247-t) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methoxsalen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor, `CYP2A6` binder/inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYP2A13 (inhibitor), DNA (intercalation).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 55 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ehrsson_1979.pdf` | Ehrsson H et al., Effect of food on kinetics of 8-methoxs…, Clinical pharmacology and t… (1979) | popPK | 8 | [10.1002/cpt1979252167](https://doi.org/10.1002/cpt1979252167) | [759069](https://pubmed.ncbi.nlm.nih.gov/759069) | Human methoxsalen kinetics were modeled, but numeric parameter values are not present in the provided evidence. |
| `Lake_1995.pdf` | Lake BG et al., Metabolism of coumarin by precision-cut…, Xenobiotica; the fate of fo… (1995) | pd | 4 | [10.3109/00498259509061839](https://doi.org/10.3109/00498259509061839) | [7618341](https://www.ncbi.nlm.nih.gov/pubmed/7618341) | metadata signals extractable PD data (IC50) |
| `Li_2015.pdf` | Li JL et al., PTP1B inhibitors from stems of Angelica…, Bioorganic & medicinal chem… (2015) | pd | 4 | [10.1016/j.bmcl.2015.04.003](https://doi.org/10.1016/j.bmcl.2015.04.003) | [25891102](https://www.ncbi.nlm.nih.gov/pubmed/25891102) | metadata signals extractable PD data (IC50) |
| `Lv_2024.pdf` | Lv Z et al., Spectrum-effect relationship study betw…, Biomedical chromatography :… (2024) | pd | 4 | [10.1002/bmc.5847](https://doi.org/10.1002/bmc.5847) | [38368628](https://www.ncbi.nlm.nih.gov/pubmed/38368628) | metadata signals extractable PD data (IC50) |
| `Tantcheva-Poór_2001.pdf` | Tantcheva-Poór I et al., Liver cytochrome P450 CYP1A2 is markedl…, The British journal of derm… (2001) | pgx | 7 | [10.1046/j.1365-2133.2001.04233.x](https://doi.org/10.1046/j.1365-2133.2001.04233.x) | [11422031](https://www.ncbi.nlm.nih.gov/pubmed/11422031) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Sellers_2000.pdf` | Sellers EM et al., Mimicking gene defects to treat drug de…, Annals of the New York Acad… (2000) | pgx | 5 | [10.1111/j.1749-6632.2000.tb06685.x](https://doi.org/10.1111/j.1749-6632.2000.tb06685.x) | [10911933](https://www.ncbi.nlm.nih.gov/pubmed/10911933) | metadata signals extractable PGX data (CYP2D6*10) |

<sub>queue written 2026-10-07T15:13:46.083228+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Di_2009 | not_relevant | 0 | 0 | Mentions methoxsalen only as a CYP2A6 inhibitor; reports no genotype-dependent methoxsalen PK or PD effect. |
| popPK | Ehrsson_1979 | relevant | 8 | 0 | Human methoxsalen kinetics were modeled, but numeric parameter values are not present in the provided evidence. |
| PGx | Gu_1998 | not_relevant | 0 | 0 | Methoxsalen is used as an inhibitor in the study; no gene variant or phenotype effect on a methoxsalen PK or PD parameter is reported. |
| PGx | Kharasch_2000 | not_relevant | 0 | 0 | Methoxsalen is used as a CYP2A6 inhibitor; the paper reports no genotype- or phenotype-dependent effect on methoxsalen PK or PD. |
| PGx | Li_1997 | not_relevant | 0 | 0 | Methoxsalen is studied as a CYP2A6 inhibitor; the paper does not report a genetic effect on methoxsalen PK or PD. |
| popPK | Micheal_2021 | irrelevant | 2 | 0 | Human bioequivalence study reports exposure measures, but no quantitative disposition parameters for methoxsalen. |
| PGx | Minoda_2001 | not_relevant | 0 | 0 | The paper studies methoxsalen inhibition of CYP2A6-mediated halothane metabolism, not a genetic effect on methoxsalen pharmacokinetics or pharmacodynamics. |
| PGx | Ono_1996 | not_relevant | 0 | 0 | Methoxsalen is studied as an in vitro CYP inhibitor, with no gene-variant effect on its pharmacokinetic or pharmacodynamic parameters reported. |
| PGx | Palacharla_2019 | not_relevant | 0 | 0 | The study evaluates methoxsalen’s in vitro enzyme inhibition, not a genetic or phenotypic effect on its PK or PD. |
| PGx | Rheeders_2006 | not_relevant | 0 | 0 | The paper reports a drug–drug interaction affecting cyclosporine exposure, not a genetic effect on methoxsalen PK or PD. |
| PGx | Rodríguez-Morató_2017 | not_relevant | 0 | 0 | Methoxsalen is mentioned only as a CYP inhibitor; the reported genotype effects concern tyrosol-to-hydroxytyrosol conversion, not methoxsalen PK or PD. |
| PGx | Sellers_2000 | not_relevant | 0 | 0 | Methoxsalen is mentioned as a CYP2A6 inhibitor, but no genetic effect on its pharmacokinetic or pharmacodynamic parameters is reported. |
| PGx | Tantcheva-Poór_2001 | not_relevant | 0 | 0 | The paper reports route-dependent inhibition of CYP1A2 by PUVA, not an effect of a gene variant, genotype, or phenotype on methoxsalen PK/PD. |
| PGx | Yamaguchi_2023 | not_relevant | 0 | 0 | The study evaluates CYP2A6 inhibition by coumarin derivatives and does not report a pharmacogenomic effect on methoxsalen PK or PD. |
| PGx | Zhang_2001 | not_relevant | 0 | 0 | The paper evaluates methoxsalen as a CYP inhibitor in vitro and does not report a gene variant, genotype, or phenotype effect on its PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
