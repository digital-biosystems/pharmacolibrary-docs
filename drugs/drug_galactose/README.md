<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;galactose&quot;}]"></div>

# galactose

- **generic name:** galactose
- **ATC codes:** `V04CE01`, `V08DA02`
- **DrugBank:** [DB11735](https://go.drugbank.com/drugs/DB11735) · **PubChem:** [CID 3037556](https://pubchem.ncbi.nlm.nih.gov/compound/3037556)
- **molar mass:** 180.1559 g/mol (C6H12O6) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Galactose is a sugar used as a diagnostic agent, in tests of liver functional capacity and as an ultrasound contrast medium. It is an approved diagnostic agent, though some uses have been withdrawn or remain investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q66589593](https://www.wikidata.org/wiki/Q66589593) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| galactose | parent | 180.156 | C6H12O6 | DrugBank | [3037556](https://pubchem.ncbi.nlm.nih.gov/compound/3037556) | Henderson_1982 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:53 | 23:26 | 0/1/0 | 1/0/0 | 0/0/0 | 426,919/22,895 | ollama / glm-5.3-flash | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Henderson_1982_reference](drugs/drug_galactose/Galactose_Henderson1982_reference.md) | — | 1-compartment (no model) | 6 | Henderson JM et al., First-order clearance of plasma galacto…, Gastroenterology (1982) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Boehm_2019_sensor_reaction_rate_enzyme_kinetic_response_of_amperometric_GOx_sensor_to_galactose](drugs/drug_galactose/pd_Boehm_2019_sensor_reaction_rate_enzyme_kinetic_response_of_a.md) | sensor reaction rate (enzyme kinetic response of amperometric GOx sensor to galactose) ← galactose · direct sigmoid Emax (Hill) effect | — | Boehm R et al., In Vitro Sugar Interference Testing Wit…, Journal of diabetes science… (2019) | [10.1177/1932296818791538](https://doi.org/10.1177/1932296818791538) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=galactose) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 105 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Henderson_1982.pdf` | Henderson JM et al., First-order clearance of plasma galacto…, Gastroenterology (1982) | popPK | 8 | not captured | [7117792](https://pubmed.ncbi.nlm.nih.gov/7117792) | Reports quantitative galactose clearance values (CL ml/min) with compartmental model fit directly in the abstract. |
| `Hu_1995.pdf` | Hu OY et al., Determination of galactose in human blo…, Journal of pharmaceutical s… (1995) | popPK | 8 | [10.1002/jps.2600840223](https://doi.org/10.1002/jps.2600840223) | [7738808](https://pubmed.ncbi.nlm.nih.gov/7738808) | Human PK study of galactose with a nonlinear two-compartment Michaelis-Menten model, but no numeric parameter values are given in the evidence (likely in figures/tables not provided). |

<sub>queue written 2026-10-07T21:32:13.021288+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andreasen_1976 | irrelevant | 0 | 0 | Galactose is only used as a liver-function diagnostic (galactose elimination capacity); the PK parameters reported are for diazepam, not galactose. |
| popPK | Boehm_2019 | irrelevant | 0 | 0 | In vitro sensor interference study, not a PK study of galactose disposition; no CL/V/compartmental parameters. |
| popPK | Filip_2026 | irrelevant | 0 | 0 | Galactose (α-GAL) is only an oligosaccharide epitope on antivenoms studied for adverse reactions; no PK disposition parameters for galactose are reported. |
| popPK | Hu_1995 | relevant | 8 | 2 | Human PK study of galactose with a nonlinear two-compartment Michaelis-Menten model, but no numeric parameter values are given in the evidence (likely in figures/tables not provided). |
| popPK | Huang_2024 | irrelevant | 0 | 0 | Galactose is only used as an oxidative-stress inducing agent in mice; no PK parameters for galactose are reported. |
| popPK | Ibrahim_2024 | irrelevant | 0 | 0 | This is a structural characterization study of a fungal exopolysaccharide; galactose appears only as a monosaccharide component, with no PK parameters. |
| popPK | Ichihara_1997 | irrelevant | 0 | 0 | This is a hepatic receptor imaging study with 99mTc-GSA radiotracer; galactose is not the subject drug and no galactose PK parameters are reported. |
| popPK | Keiding_2018 | irrelevant | 3 | 1 | This is a review of PET liver-function imaging using the galactose analog tracer 18F-FDGal; no numeric PK disposition parameters for galactose are reported in the evidence. |
| popPK | Luo_2019 | irrelevant | 0 | 0 | This is a structural/bioactivity study of a polysaccharide; galactose appears only as a sugar component, with no PK parameters. |
| popPK | Muñoz-Castiblanco_2022 | irrelevant | 0 | 0 | This is a polysaccharide characterization/antioxidant study; galactose appears only as a monosaccharide component/reference standard, with no PK parameters. |
| popPK | Nataraj_2022 | irrelevant | 0 | 0 | This is a structural/antioxidant characterization of a mushroom polysaccharide; galactose appears only as a monosaccharide component, with no PK parameters. |
| popPK | Nguimbou_2014 | irrelevant | 0 | 0 | This is a food chemistry study on taro mucilage composition; galactose appears only as a sugar constituent, with no pharmacokinetic parameters. |
| popPK | Perfetti_2024 | irrelevant | 1 | 1 | The PK model and parameters (CL, V, half-life) describe govorestat, not galactose; galactose/galactitol are only PD biomarkers, and no galactose disposition values are given. |
| popPK | Sabutski_2020 | irrelevant | 0 | 0 | This is a synthetic chemistry paper on naphthoquinone-thioglycoside conjugates; galactose is only a sugar building block, with no PK parameters reported. |
| popPK | Ueda_1975 | irrelevant | 0 | 0 | This is a chemoreception/taxis study in slime mold, not a pharmacokinetic study of galactose; no PK parameters are reported. |
| popPK | Uesugi_1999 | irrelevant | 4 | 2 | Galactose is used only as a diagnostic probe for liver function in perfused pig livers; Vmax values are not given numerically in the evidence. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | This is a polysaccharide extraction/structure/bioactivity study; galactose appears only as a monosaccharide component of a polysaccharide, with no PK parameters. |
| popPK | Winne_1987 | irrelevant | 3 | 2 | Galactose is only one of many probe substrates in an intestinal absorption/diffusion-resistance study in rats; no galactose disposition PK parameters (CL, V, half-life) are reported numerically. |
| popPK | Winterdahl_2011 | irrelevant | 2 | 2 | This is a hepatic blood-perfusion PET study in pigs using tracers (18F-FDG, 11C-MG, 18F-FDGal); galactose itself is not the subject drug, and the numeric K1/Q values are in Table 1/Fig. 1 which are not included in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:32 UTC</sub>
