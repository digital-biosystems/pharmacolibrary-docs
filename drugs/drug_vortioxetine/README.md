<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;vortioxetine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vortioxetine_Areberg2014v2_reference&quot;,&quot;label&quot;:&quot;Areberg_2014_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vortioxetine/Vortioxetine_Areberg2014v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# vortioxetine

- **generic name:** vortioxetine
- **ATC codes:** `N06AX26`
- **DrugBank:** [DB09068](https://go.drugbank.com/drugs/DB09068) · **PubChem:** [CID 71768094](https://pubchem.ncbi.nlm.nih.gov/compound/71768094)
- **molar mass:** 298.45 g/mol (C18H22N2S) — DrugBank
- **groups:** approved, investigational

## About

Vortioxetine is an antidepressant used to treat major depressive disorder and, according to some sources, anxiety. It is authorised in the European Union and is used as an approved medicine, though it also remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3563148](https://www.wikidata.org/wiki/Q3563148) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vortioxetine | parent | 298.45 | C18H22N2S | DrugBank | [71768094](https://pubchem.ncbi.nlm.nih.gov/compound/71768094) | Areberg_2014_2, Frederiksen_2021_2, Miao_2019_2, Naik_2016_2 |
| Lu AA34443 | metabolite | 328.43 | C18H20N2O2S | PubChem | [118753351](https://pubchem.ncbi.nlm.nih.gov/compound/118753351) | Frederiksen_2021_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:22 | 2:52 | 2/2/1 | 1/0/1 | 0/0/0 | 142,046/13,308 | ollama / glm-5.3-flash | 15 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Areberg_2014_2_reference](drugs/drug_vortioxetine/Vortioxetine_Areberg2014v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Areberg J et al., Population pharmacokinetic meta-analysi…, Basic & clinical pharmacolo… (2014) | [10.1111/bcpt.12256](https://doi.org/10.1111/bcpt.12256) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.769). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Frederiksen_2021_2_reference](drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference.md) | held back | 1-compartment, oral | 11 (+4 cov.) | Frederiksen T et al., Quantification of In Vivo Metabolic Act…, Clinical pharmacology and t… (2021) | [10.1002/cpt.1972](https://doi.org/10.1002/cpt.1972) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Naik_2016_2_reference](drugs/drug_vortioxetine/Vortioxetine_Naik2016v2_reference.md) | — | 1-compartment (no model) | 1 | Naik H et al., A Population Pharmacokinetic-Pharmacody…, Basic & clinical pharmacolo… (2016) | [10.1111/bcpt.12513](https://doi.org/10.1111/bcpt.12513) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Miao_2019_2_pooled_healthy_subjects_22_a](drugs/drug_vortioxetine/Vortioxetine_Miao2019v2_pooled_healthy_subjects_22_a.md) | — | 1-compartment (no model) | 3 | Miao J et al., Pharmacokinetics and Safety of Vortioxe…, Advances in therapy (2019) | [10.1007/s12325-019-01092-4](https://doi.org/10.1007/s12325-019-01092-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Miao_2019_2_pooled_mdd_gad_patients_23_b](drugs/drug_vortioxetine/Vortioxetine_Miao2019v2_pooled_mdd_gad_patients_23_b.md) | — | 1-compartment (no model) | 2 | Miao J et al., Pharmacokinetics and Safety of Vortioxe…, Advances in therapy (2019) | [10.1007/s12325-019-01092-4](https://doi.org/10.1007/s12325-019-01092-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Wilson_2015_ROL](drugs/drug_vortioxetine/pd_Wilson_2015_ROL.md) | REM onset latency (change from baseline) ← vortioxetine · direct sigmoid Emax (Hill) effect | model (no simulator) | Wilson S et al., Differentiated effects of the multimoda…, Journal of psychopharmacolo… (2015) | [10.1177/0269881115599387](https://doi.org/10.1177/0269881115599387) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Wilson_2015_S1](drugs/drug_vortioxetine/pd_Wilson_2015_S1.md) | Sleep stage 1 (uncorrected data) ← vortioxetine · direct linear effect | model (no simulator) | Wilson S et al., Differentiated effects of the multimoda…, Journal of psychopharmacolo… (2015) | [10.1177/0269881115599387](https://doi.org/10.1177/0269881115599387) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Wilson_2015_WASO](drugs/drug_vortioxetine/pd_Wilson_2015_WASO.md) | Wake after sleep onset (change from baseline) ← vortioxetine · direct linear effect | model (no simulator) | Wilson S et al., Differentiated effects of the multimoda…, Journal of psychopharmacolo… (2015) | [10.1177/0269881115599387](https://doi.org/10.1177/0269881115599387) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Naik_2016_2_MADRS](drugs/drug_vortioxetine/pd_Naik_2016_2_MADRS.md) | change in MADRS score from baseline ← vortioxetine · direct Emax (saturable) effect | model (no simulator) | Naik H et al., A Population Pharmacokinetic-Pharmacody…, Basic & clinical pharmacolo… (2016) | [10.1111/bcpt.12513](https://doi.org/10.1111/bcpt.12513) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Wilson_2015_TREM](drugs/drug_vortioxetine/pd_Wilson_2015_TREM.md) | Total time spent in REM sleep (change from baseline) ← vortioxetine · direct Emax (saturable) effect | model (no simulator) | Wilson S et al., Differentiated effects of the multimoda…, Journal of psychopharmacolo… (2015) | [10.1177/0269881115599387](https://doi.org/10.1177/0269881115599387) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vortioxetine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (target), HTR1A (target), HTR1B (partial agonist), HTR3A (target), HTR7 (target), SLC6A2 (blocker).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 5
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Areberg_2014_2.pdf` | Areberg J et al., Population pharmacokinetic meta-analysi…, Basic & clinical pharmacolo… (2014) | popPK | 10 | [10.1111/bcpt.12256](https://doi.org/10.1111/bcpt.12256) | [24766668](https://pubmed.ncbi.nlm.nih.gov/24766668) | Population PK model for vortioxetine with CL, V, half-life reported in abstract; some parameters (ka, Q) may be in supplementary material. |
| `Naik_2016_2.pdf` | Naik H et al., A Population Pharmacokinetic-Pharmacody…, Basic & clinical pharmacolo… (2016) | popPK | 10 | [10.1111/bcpt.12513](https://doi.org/10.1111/bcpt.12513) | [26525043](https://pubmed.ncbi.nlm.nih.gov/26525043) | Population PK model for vortioxetine with numeric CL/F (42 L/hr) and Vc (2920 L) reported directly in the abstract. |
| `Frederiksen_2023_2.pdf` | Frederiksen T, Using population pharmacokinetic analys…, Basic & clinical pharmacolo… (2023) | popPK | 7 | [10.1111/bcpt.13903](https://doi.org/10.1111/bcpt.13903) | [37221697](https://pubmed.ncbi.nlm.nih.gov/37221697) | PopPK meta-analyses of vortioxetine are described, but this is a review and no numeric parameter values appear in the evidence (likely in the underlying publications/supplements). |

<sub>queue written 2026-10-07T00:19:30.826968+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bundgaard_2016 | irrelevant | 3 | 3 | This is a BBB distribution/P-gp efflux study reporting AUC ratios and Kp,uu values, not disposition PK parameters (CL, V, ka) for vortioxetine; some numeric values are present but they are distribution ratios, not population-PK parameters. |
| PD | Bundgaard_2016 | not_relevant | 1 | 0 | The paper focuses on P-gp transport and brain distribution (PK) of vortioxetine, reporting no concentration-effect or dose-response PD parameters for the drug itself. |
| popPK | Frederiksen_2021 | relevant | 8 | 3 | A popPK model of vortioxetine (and its CYP2D6-dependent metabolite) is used/validated, but the actual parameter values live in the original Frederiksen et al. study and supplementary material; only a creatinine clearance of 118 mL/min appears here. |
| popPK | Frederiksen_2023 | relevant | 7 | 2 | Describes a population PK model of vortioxetine and its metabolite Lu AA34443 (CLCYP2D6, CLother, FMET), but the numeric parameter values live in the previously reported original analyses/supplementary tables, not in this evidence. |
| popPK | Frederiksen_2023_2 | relevant | 7 | 2 | PopPK meta-analyses of vortioxetine are described, but this is a review and no numeric parameter values appear in the evidence (likely in the underlying publications/supplements). |
| popPK | Ratajczak_2019 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats with no PK parameters or numeric disposition values reported. |
| popPK | Wilson_2015 | irrelevant | 2 | 2 | This is a PK/PD sleep study that only applies a previously published population PK model with fixed parameters to estimate exposure (Cav,sleep 13.8/29.5 ng/mL); no CL, V, ka, or other disposition parameters for vortioxetine are reported here. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:19 UTC</sub>
