<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05B&quot;,&quot;href&quot;:&quot;atc/H05B.md&quot;},{&quot;label&quot;:&quot;cinacalcet&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cinacalcet_SchappacherTilp2019_reference&quot;,&quot;label&quot;:&quot;Schappacher-Tilp_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cinacalcet/Cinacalcet_SchappacherTilp2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cinacalcet

- **generic name:** cinacalcet
- **ATC codes:** `H05BX01`
- **DrugBank:** [DB01012](https://go.drugbank.com/drugs/DB01012) · **PubChem:** [CID 156419](https://pubchem.ncbi.nlm.nih.gov/compound/156419)
- **molar mass:** 357.412 g/mol (C22H22F3N) — DrugBank
- **groups:** approved, investigational

## About

Cinacalcet is a calcimimetic anti-parathyroid medicine used to treat hyperparathyroidism, including secondary hyperparathyroidism, and related calcium disorders such as hypercalcemia. It is an approved medicine with authorised products in the European Union, and is also being studied for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q193978](https://www.wikidata.org/wiki/Q193978) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cinacalcet | parent | 357.412 | C22H22F3N | DrugBank | [156419](https://pubchem.ncbi.nlm.nih.gov/compound/156419) | Chen_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:23 | 5:01 | 1/1/0 | 1/1/1 | 0/0/0 | 260,699/15,892 | einfracz / qwen3.8-27b | 9 | 2/7 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Schappacher-Tilp_2019_reference](drugs/drug_cinacalcet/Cinacalcet_SchappacherTilp2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Schappacher-Tilp G et al., A Multi-Compartment Model Capturing the…, Cellular physiology and bio… (2019) | [10.33594/000000148](https://doi.org/10.33594/000000148) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Chen_2019_reference](drugs/drug_cinacalcet/Cinacalcet_Chen2019_reference.md) | — | 1-compartment (no model) | 6 | Chen P et al., Bridging adults and paediatrics with se…, British journal of clinical… (2019) | [10.1111/bcp.13900](https://doi.org/10.1111/bcp.13900) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2025_CA](drugs/drug_cinacalcet/pd_Wang_2025_CA.md) | serum calcium ← cinacalcet · inhibition effect | — | Wang Z et al., Pharmacodynamic Modeling of Cinacalcet…, Journal of the Endocrine So… (2025) | [10.1210/jendso/bvaf021](https://doi.org/10.1210/jendso/bvaf021) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2025_P](drugs/drug_cinacalcet/pd_Wang_2025_P.md) | serum phosphorus ← cinacalcet · inhibition effect | — | Wang Z et al., Pharmacodynamic Modeling of Cinacalcet…, Journal of the Endocrine So… (2025) | [10.1210/jendso/bvaf021](https://doi.org/10.1210/jendso/bvaf021) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2025_PTH](drugs/drug_cinacalcet/pd_Wang_2025_PTH.md) | serum parathyroid hormone ← cinacalcet · inhibition effect | — | Wang Z et al., Pharmacodynamic Modeling of Cinacalcet…, Journal of the Endocrine So… (2025) | [10.1210/jendso/bvaf021](https://doi.org/10.1210/jendso/bvaf021) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Serra_2008_PTH](drugs/drug_cinacalcet/pd_Serra_2008_PTH.md) | parathyroid hormone ← cinacalcet · direct Emax (saturable) effect | model (no simulator) | Serra AL et al., Pharmacokinetics and pharmacodynamics o…, American journal of transpl… (2008) | [10.1111/j.1600-6143.2007.02136.x](https://doi.org/10.1111/j.1600-6143.2007.02136.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chen_2019_iPTH](drugs/drug_cinacalcet/pd_Chen_2019_iPTH.md) | intact parathyroid hormone (iPTH) ← cinacalcet · indirect response — drug inhibits the production of intact parathyroid hormone (iPTH) | model (no simulator) | Chen P et al., Bridging adults and paediatrics with se…, British journal of clinical… (2019) | [10.1111/bcp.13900](https://doi.org/10.1111/bcp.13900) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cinacalcet) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` inhibitor, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CASR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 19 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Serra_2008.pdf` | Serra AL et al., Pharmacokinetics and pharmacodynamics o…, American journal of transpl… (2008) | popPK | 9 | [10.1111/j.1600-6143.2007.02136.x](https://doi.org/10.1111/j.1600-6143.2007.02136.x) | [18318784](https://pubmed.ncbi.nlm.nih.gov/18318784) | The study reports quantitative steady-state oral clearance values for cinacalcet in humans. |
| `Basu_2020.pdf` | Basu C et al., Pharmacokinetic/pharmacodynamic data ex…, Pharmaceutical statistics (2020) | popPK | 7 | [10.1002/pst.2043](https://doi.org/10.1002/pst.2043) | [32648333](https://pubmed.ncbi.nlm.nih.gov/32648333) | The paper describes population PK/PD modeling for cinacalcet in a pediatric/adult study, but no specific numeric PK parameter values (CL, V, ka, etc.) are provided in the extracted evidence. |

<sub>queue written 2026-10-07T10:19:56.111317+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bai_2024 | irrelevant | 0 | 0 | The paper is a dental engineering study on the fabrication of titanium implant frameworks and contains no pharmacokinetic data or mention of cinacalcet. |
| popPK | Basu_2020 | relevant | 7 | 0 | The paper describes population PK/PD modeling for cinacalcet in a pediatric/adult study, but no specific numeric PK parameter values (CL, V, ka, etc.) are provided in the extracted evidence. |
| popPK | Karipidis_2024 | irrelevant | 0 | 0 | The paper is a systematic review of cancer risk associated with radiofrequency electromagnetic fields and does not involve the drug cinacalcet or its pharmacokinetics. |
| popPK | Lin_2024 | irrelevant | 0 | 0 | The study focuses on the functional characterization of a CASR mutation (I554N) and its response to calcimimetics in vitro and via simulation, containing no pharmacokinetic disposition parameters (CL, V, ka) for cinacalcet. |
| popPK | Nemeth_2004 | irrelevant | 3 | 0 | The study focuses on pharmacodynamics (EC50/IC50, PTH/Calcitonin levels) and only qualitatively describes oral bioavailability and linear pharmacokinetics without reporting numeric disposition parameters like CL or V. |
| popPK | ORourke_2025 | irrelevant | 0 | 0 | The paper describes a cochlear implant revision surgery study and contains no information regarding the drug cinacalcet or its pharmacokinetics. |
| popPK | Okada_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gustatory neural responses in bullfrogs, reporting electrophysiological effects and EC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Park_2023 | irrelevant | 0 | 0 | The study focuses on pediatric cochlear implant outcomes and has no relation to cinacalcet pharmacokinetics. |
| popPK | Radulova-Mauersberger_2022 | irrelevant | 0 | 0 | The study investigates the impact of cinacalcet on intraoperative parathyroid hormone (PTH) levels during surgery, not the pharmacokinetic parameters (CL, V, ka) of cinacalcet itself. |
| popPK | Thakore_2011 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of vascular relaxation in rat arteries, not a pharmacokinetic study, and no PK parameters are reported. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic (PD) modeling analysis of cinacalcet's effect on PTH, calcium, and phosphorus, and does not report pharmacokinetic (PK) parameters such as clearance or volume of distribution for the drug itself. |
| popPK | Yang_2018 | irrelevant | 0 | 0 | The paper investigates antioxidant properties and phenolic composition of plant extracts (Camellia nitidissima), not the pharmacokinetics of cinacalcet. |
| popPK | Yuan_2020 | irrelevant | 0 | 0 | The paper investigates cranial neural crest cell development in mouse embryos and contains no pharmacokinetic data for cinacalcet. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:20 UTC</sub>
