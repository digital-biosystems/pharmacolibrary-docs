<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;deferiprone&quot;}]"></div>

# deferiprone

- **generic name:** deferiprone
- **ATC codes:** `V03AC02`
- **DrugBank:** [DB08826](https://go.drugbank.com/drugs/DB08826) · **PubChem:** [CID 2972](https://pubchem.ncbi.nlm.nih.gov/compound/2972)
- **molar mass:** 139.1519 g/mol (C7H9NO2) — DrugBank
- **groups:** approved, investigational

## About

Deferiprone is an iron chelator used to remove excess iron in conditions such as thalassemia and other iron overload disorders. It is approved and authorised in the European Union for iron overload, including beta-thalassemia, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q749664](https://www.wikidata.org/wiki/Q749664) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| deferiprone | parent | 139.152 | C7H9NO2 | DrugBank | [2972](https://pubchem.ncbi.nlm.nih.gov/compound/2972) | Abbas_2012, Bellanti_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:48 | 0:57 | 0/2/0 | 1/0/1 | 0/0/0 | 49,196/3,374 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Abbas_2012_reference](drugs/drug_deferiprone/Deferiprone_Abbas2012_reference.md) | — | 1-compartment (no model) | 3 | Abbas M et al., Quantitative determination of deferipro…, Pakistan journal of pharmac… (2012) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Bellanti_2014_reference](drugs/drug_deferiprone/Deferiprone_Bellanti2014_reference.md) | — | 1-compartment (no model) | 3 | Bellanti F et al., Population pharmacokinetics of deferipr…, British journal of clinical… (2014) | [10.1111/bcp.12473](https://doi.org/10.1111/bcp.12473) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wada_2014_CL](drugs/drug_deferiprone/pd_Wada_2014_CL.md) | luminescence (Fe2+-chelating effect, inhibition of Fenton's reaction-luminol chemiluminescence) ← deferiprone · direct sigmoid Emax (Hill) effect | — | Wada M et al., In vitro screening of Fe2+-chelating ef…, Luminescence : the journal… (2014) | [10.1002/bio.2628](https://doi.org/10.1002/bio.2628) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Borella_2022_FERRITIN](drugs/drug_deferiprone/pd_Borella_2022_FERRITIN.md) | serum ferritin ← deferiprone · indirect response — drug stimulates the loss of serum ferritin | — | Borella E et al., Characterisation of individual ferritin…, British journal of clinical… (2022) | [10.1111/bcp.15290](https://doi.org/10.1111/bcp.15290) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=deferiprone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `UGT1A6` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A6` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Iron (chelator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bellanti_2014.pdf` | Bellanti F et al., Population pharmacokinetics of deferipr…, British journal of clinical… (2014) | popPK | 10 | [10.1111/bcp.12473](https://doi.org/10.1111/bcp.12473) | [25052529](https://pubmed.ncbi.nlm.nih.gov/25052529) | Population PK (NONMEM, one-compartment, first-order absorption) of deferiprone in humans; exposure metrics (AUC, Cmax) and covariate effects are given, but the actual CL/V/ka parameter values are not shown in the abstract (likely in tables/supplementary material). |
| `Bellanti_2017.pdf` | Bellanti F et al., Population pharmacokinetics and dosing…, British journal of clinical… (2017) | popPK | 10 | [10.1111/bcp.13134](https://doi.org/10.1111/bcp.13134) | [27641003](https://pubmed.ncbi.nlm.nih.gov/27641003) | Population PK model of deferiprone in children, but numeric CL/V parameter values are not shown in the abstract (only AUCs); parameters likely in tables/supplement not provided. |
| `Bellanti_2016.pdf` | Bellanti F et al., Sampling Optimization in Pharmacokineti…, Journal of clinical pharmac… (2016) | popPK | 8 | [10.1002/jcph.708](https://doi.org/10.1002/jcph.708) | [26785826](https://pubmed.ncbi.nlm.nih.gov/26785826) | Population PK modeling of deferiprone in children, but only AUC/Cmax values are given; CL/V/ka estimates appear not to be in the evidence. |
| `Abbas_2012.pdf` | Abbas M et al., Quantitative determination of deferipro…, Pakistan journal of pharmac… (2012) | popPK | 7 | not captured | [22459459](https://pubmed.ncbi.nlm.nih.gov/22459459) | Human PK study of deferiprone with AUC and half-lives reported, but no CL/V or full compartmental parameter values (likely in text/figures not provided). |
| `Morales_2009.pdf` | Morales NP et al., Bioequivalence study of a film-coated t…, International journal of cl… (2009) | popPK | 6 | [10.5414/cpp47358](https://doi.org/10.5414/cpp47358) | [19473596](https://pubmed.ncbi.nlm.nih.gov/19473596) | Human bioequivalence study with NCA PK parameters (Cmax, AUC) reported, but no CL, V, or half-life values given. |

<sub>queue written 2026-10-07T18:47:50.461319+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bellanti_2016 | relevant | 8 | 4 | Population PK modeling of deferiprone in children, but only AUC/Cmax values are given; CL/V/ka estimates appear not to be in the evidence. |
| popPK | Bellanti_2017 | relevant | 10 | 4 | Population PK model of deferiprone in children, but numeric CL/V parameter values are not shown in the abstract (only AUCs); parameters likely in tables/supplement not provided. |
| popPK | Borella_2022 | irrelevant | 3 | 2 | This is a drug–disease (ferritin/iron) PD model; deferiprone PK is only cited from prior literature (Bellanti) and no deferiprone CL/V/ka values are reported here. |
| popPK | Calvaruso_2014 | irrelevant | 1 | 0 | This is an efficacy/safety clinical trial comparing chelators using serum ferritin, with no PK disposition parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Cen_2024 | irrelevant | 0 | 0 | Deferiprone is only a comparator in a medicinal-chemistry efficacy study; no PK parameters for deferiprone are reported. |
| popPK | Fischer_2003 | irrelevant | 2 | 1 | This is an efficacy/iron-chelation monitoring study; the "two-compartment model" refers to body iron kinetics, not deferiprone PK, and no deferiprone CL/V/ka values are reported. |
| popPK | Wada_2014 | irrelevant | 0 | 0 | In vitro Fe2+-chelating assay only; deferiprone is a test compound with EC50 values, no PK disposition parameters. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | Deferiprone is only mentioned as a comparator scaffold in a medicinal chemistry study of new ferroptosis inhibitors; no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:47 UTC</sub>
