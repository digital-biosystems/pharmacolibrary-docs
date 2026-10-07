<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V06D&quot;,&quot;href&quot;:&quot;atc/V06D.md&quot;},{&quot;label&quot;:&quot;fructose&quot;}]"></div>

# fructose

- **generic name:** fructose
- **ATC codes:** `V06DC02`
- **DrugBank:** [DB04173](https://go.drugbank.com/drugs/DB04173) · **PubChem:** [CID 439553](https://pubchem.ncbi.nlm.nih.gov/compound/439553)
- **molar mass:** 180.1559 g/mol (C6H12O6) — DrugBank
- **groups:** approved, investigational

## About

Fructose is a fruit sugar used as a carbohydrate nutrient, classified as a general nutrient. It is an approved nutrient, used widely as a dietary sugar and sweetener.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27462479](https://www.wikidata.org/wiki/Q27462479) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:40 | 3:39 | 0/1/0 | 1/0/0 | 0/0/0 | 208,703/9,994 | ollama / glm-5.3-flash | 6 | 3/3 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Pettit_1976_reference](drugs/drug_fructose/Fructose_Pettit1976_reference.md) | — | 1-compartment (no model) | 0 | Pettit GW et al., Oral fructose tolerance, gastric emptyi…, Archives internationales de… (1976) | [10.3109/13813457609078567](https://doi.org/10.3109/13813457609078567) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.60).">human + animal</span> | [Kuhre_2014_GLP_1active](drugs/drug_fructose/pd_Kuhre_2014_GLP_1active.md) | GLP-1 secretion from GLUTag cells (relative GLP-1active levels) ← fructose · direct sigmoid Emax (Hill) effect | — | Kuhre RE et al., Fructose stimulates GLP-1 but not GIP s…, American journal of physiol… (2014) | [10.1152/ajpgi.00372.2013](https://doi.org/10.1152/ajpgi.00372.2013) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fructose) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: FHIT (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 184 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pettit_1976.pdf` | Pettit GW et al., Oral fructose tolerance, gastric emptyi…, Archives internationales de… (1976) | popPK | 7 | [10.3109/13813457609078567](https://doi.org/10.3109/13813457609078567) | [64136](https://pubmed.ncbi.nlm.nih.gov/64136) | Compartmental model of fructose absorption with numeric parameters (tau, k1, Ae) reported directly in the abstract. |

<sub>queue written 2026-10-07T22:38:02.520838+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdussalam_2018 | irrelevant | 0 | 0 | Fructose is only a dietary intervention; the PK parameters (CL, population PK model) are for amiodarone, not fructose. |
| popPK | Baugh_2023 | irrelevant | 1 | 2 | This is an indirect calorimeter validation study measuring metabolic rate/carbohydrate oxidation after fructose ingestion — no PK disposition parameters (CL, V, ka, half-life) for fructose are reported. |
| popPK | Cavichi_2023 | irrelevant | 0 | 0 | This is a phytochemical/nutritional composition study of a wild plant; fructose appears only as a plant sugar content, with no PK parameters. |
| popPK | Choe_2003 | irrelevant | 0 | 0 | This is an in-vitro enzyme kinetics study of fructose-1,6-bisphosphatase, not a pharmacokinetic study of fructose; no PK parameters for fructose are reported. |
| popPK | Cui_2024 | irrelevant | 0 | 0 | Fructose is only used to induce hypertension in rats; no PK parameters for fructose are reported. |
| popPK | Di_2008 | irrelevant | 0 | 0 | The drug studied is metoprolol; fructose is only a dietary model for hypertension, not the subject drug with PK parameters. |
| popPK | Faber_1992 | irrelevant | 0 | 0 | A review of ovine maternofetal water transfer where fructose is merely mentioned as an osmotic solute, with no PK parameters for fructose. |
| popPK | Hsu_1997 | irrelevant | 0 | 0 | This is a rat cardiomyopathy study using a fructose diet; no pharmacokinetic parameters (CL, V, half-life, PK model) for fructose are reported. |
| popPK | Katakam_1998 | irrelevant | 0 | 0 | Fructose is only a dietary intervention; no PK parameters for fructose are reported. |
| popPK | Kelley-Loughnane_2002 | irrelevant | 0 | 0 | This is an in-vitro enzyme kinetics study of bacterial FBPase, not a pharmacokinetic study of fructose disposition. |
| popPK | Kiger_2001 | irrelevant | 2 | 8 | The PK model quantifies 10B-boronophenylalanine (BPA) complexed with fructose, so fructose is only a formulation carrier, not the subject drug, though numeric parameters are fully present. |
| popPK | Kreuzberg_1978 | irrelevant | 0 | 0 | In-vitro yeast enzyme kinetics study, not pharmacokinetic disposition of fructose. |
| popPK | Kuhre_2014 | irrelevant | 0 | 0 | This is a gut hormone secretion study (GLP-1, GIP, etc.) using fructose as an oral stimulus; no PK disposition parameters (CL, V, half-life, PK model) for fructose are reported. |
| popPK | Kulkarni_2016 | irrelevant | 0 | 0 | Fructose is only a dietary component used to induce NAFLD; the PK parameters reported are for rosiglitazone, a different drug. |
| popPK | Semnani-Azad_2020 | irrelevant | 0 | 0 | This is a dietary epidemiology meta-analysis of fructose-containing foods and metabolic syndrome risk, with no pharmacokinetic parameters for fructose. |
| popPK | Walker_2012 | irrelevant | 0 | 0 | This is an enzyme-kinetics study of phosphofructokinase in a parasite, not a pharmacokinetic study of fructose; no disposition parameters for fructose are reported. |
| popPK | Wei_2022 | irrelevant | 0 | 0 | Bioinformatics study of GFPT enzyme evolution; no fructose PK parameters reported. |
| popPK | Wu_2009 | irrelevant | 0 | 0 | This is an enzymatic biofuel cell/biosensor study; fructose is a fuel substrate, not a drug, and no PK disposition parameters are reported. |
| popPK | Yang_2014 | irrelevant | 3 | 2 | This is a PET tracer kinetic study of 18F-FBPA-Fr (a radiolabeled BPA-fructose complex) in rats, not a population-PK study of fructose itself, and numeric rate constants are not given in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:38 UTC</sub>
