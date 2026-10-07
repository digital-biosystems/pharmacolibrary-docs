<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;nalmefene&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nalmefene_Kyhl2016_reference&quot;,&quot;label&quot;:&quot;Kyhl_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalmefene_Rosen2000_reference&quot;,&quot;label&quot;:&quot;Rosen_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalmefene/Nalmefene_Rosen2000_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nalmefene

- **generic name:** nalmefene
- **ATC codes:** `N07BB05`
- **DrugBank:** [DB06230](https://go.drugbank.com/drugs/DB06230) · **PubChem:** not captured
- **molar mass:** 339.435 g/mol (C21H25NO3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Nalmefene is an opioid antagonist used to treat alcohol dependence and has been studied for opiate dependence. It is authorised in the European Union as a medicine for alcohol-related disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4353252](https://www.wikidata.org/wiki/Q4353252) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nalmefene | parent | 339.435 | C21H25NO3 | DrugBank | — | Kyhl_2016, Rosen_2000 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:38 | 1:57 | 2/0/0 | 3/0/0 | 0/0/0 | 97,997/6,975 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kyhl_2016_reference](drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kyhl LE et al., Population pharmacokinetics of nalmefen…, British journal of clinical… (2016) | [10.1111/bcp.12805](https://doi.org/10.1111/bcp.12805) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rosen_2000_reference](drugs/drug_nalmefene/Nalmefene_Rosen2000_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Rosen DA et al., Nalmefene to prevent epidural narcotic…, Pharmacotherapy (2000) | [10.1592/phco.20.9.745.35207](https://doi.org/10.1592/phco.20.9.745.35207) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Barnett_2020_BRET](drugs/drug_nalmefene/pd_Barnett_2020_BRET.md) | BRET signal (G protein activation at kappa opioid receptor) ← nalmefene · direct sigmoid Emax (Hill) effect | — | Barnett ME et al., Unique Pharmacological Properties of th…, Molecular pharmacology (2020) | [10.1124/mol.120.119404](https://doi.org/10.1124/mol.120.119404) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Endt_2025_cAMP](drugs/drug_nalmefene/pd_Endt_2025_cAMP.md) | Reversal of opioid-induced inhibition of FSK-stimulated cAMP accumulation (cAMP accumulation as % of FSK-induced level) ← nalmefene · direct sigmoid Emax (Hill) effect | — | Endt F et al., Carfentanil stabilizes µ opioid recepto…, Archives of toxicology (2025) | [10.1007/s00204-025-04048-6](https://doi.org/10.1007/s00204-025-04048-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Veng-Pedersen_1995_tcPCO2](drugs/drug_nalmefene/pd_Veng_Pedersen_1995_tcPCO2.md) | transcutaneous pCO2 (respiratory depression) ← nalmefene · delayed effect through an effect compartment | — | Veng-Pedersen P et al., Duration of opioid antagonism by nalmef…, Journal of pharmaceutical s… (1995) | [10.1002/jps.2600840913](https://doi.org/10.1002/jps.2600840913) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nalmefene) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `CYP3A5` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A3` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRK1 (partial agonist), OPRM1 (target), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kyhl_2016.pdf` | Kyhl LE et al., Population pharmacokinetics of nalmefen…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.12805](https://doi.org/10.1111/bcp.12805) | [26483076](https://pubmed.ncbi.nlm.nih.gov/26483076) | Population PK model of nalmefene in humans with CL 60.4 l/h and Vc 266 l reported in abstract; full parameter set likely in tables. |
| `Rosen_2000.pdf` | Rosen DA et al., Nalmefene to prevent epidural narcotic…, Pharmacotherapy (2000) | popPK | 10 | [10.1592/phco.20.9.745.35207](https://doi.org/10.1592/phco.20.9.745.35207) | [10907964](https://pubmed.ncbi.nlm.nih.gov/10907964) | Original PK study in children with full numeric two-compartment parameters (t½α, t½β, CL, Vss) reported directly in the abstract. |
| `Veng-Pedersen_1995.pdf` | Veng-Pedersen P et al., Duration of opioid antagonism by nalmef…, Journal of pharmaceutical s… (1995) | popPK | 6 | [10.1002/jps.2600840913](https://doi.org/10.1002/jps.2600840913) | [8537889](https://pubmed.ncbi.nlm.nih.gov/8537889) | PK/PD study of nalmefene in dogs with noncompartmental analysis, but no numeric parameter values are given in the evidence. |

<sub>queue written 2026-10-07T03:37:16.342983+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barnett_2020 | irrelevant | 0 | 0 | In-vitro BRET cell signaling pharmacology study; nalmefene is only a test ligand with no PK disposition parameters. |
| popPK | Endt_2025 | irrelevant | 0 | 0 | In-vitro pharmacodynamics study of carfentanil in HEK293 cells; nalmefene is only an antagonist comparator with IC50 values, no PK disposition parameters. |
| popPK | Grant_2006 | irrelevant | 0 | 0 | Clinical efficacy trial of nalmefene in pathological gambling with no pharmacokinetic parameters reported. |
| popPK | Hashimoto_2025 | irrelevant | 0 | 0 | Pharmacogenetic efficacy study of nalmefene with no PK parameters (CL, V, half-life, or PK model) reported. |
| popPK | Maillet_2015 | irrelevant | 0 | 0 | Nalmefene is only mentioned as a comparator ligand in a pharmacology study of noribogaine; no PK parameters for nalmefene are reported. |
| popPK | Veng-Pedersen_1995 | relevant | 6 | 3 | PK/PD study of nalmefene in dogs with noncompartmental analysis, but no numeric parameter values are given in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:37 UTC</sub>
