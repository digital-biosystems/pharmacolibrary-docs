<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V01A&quot;,&quot;href&quot;:&quot;atc/V01A.md&quot;},{&quot;label&quot;:&quot;animals&quot;}]"></div>

# animals

- **generic name:** animals
- **ATC codes:** `V01AA11`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

This is an allergen extract used in allergy testing and desensitisation treatment for allergic conditions. It is classified under allergen extracts in the ATC system, a category used in human medicine.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:11 | 1:53 | 0/0/0 | 0/0/0 | 0/0/0 | 92,388/3,654 | ollama / glm-5.3-flash | 6 | 1/5 | 6/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3337 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ayyar_2021.pdf` | Ayyar VS et al., Minimal Physiologically Based Pharmacok…, The Journal of pharmacology… (2021) | popPK | 7 | [10.1124/jpet.121.000805](https://doi.org/10.1124/jpet.121.000805) | [34413198](https://pubmed.ncbi.nlm.nih.gov/34413198) | PBPK-PK model of GalNAc-siRNA (fitusiran) in mice/rat/monkey and humans, but numeric parameter values are not shown in the provided evidence (likely in tables/figures not included). |
| `Dou_2025.pdf` | Dou D et al., Pharmacokinetics, Biodistribution, Immu…, Molecular pharmaceutics (2025) | popPK | 7 | [10.1021/acs.molpharmaceut.5c00918](https://doi.org/10.1021/acs.molpharmaceut.5c00918) | [40960094](https://pubmed.ncbi.nlm.nih.gov/40960094) | Population PK/PD model of VGB-R04 in mice and cynomolgus monkeys is described, but numeric parameter values (CL, V, etc.) are not shown in the provided evidence. |

<sub>queue written 2026-10-07T18:11:21.474187+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ayyar_2021 | relevant | 7 | 3 | PBPK-PK model of GalNAc-siRNA (fitusiran) in mice/rat/monkey and humans, but numeric parameter values are not shown in the provided evidence (likely in tables/figures not included). |
| popPK | Delattre_2024 | irrelevant | 0 | 0 | This is a plant growth modeling study (soybean NLMEM), not a pharmacokinetic study of any drug; no PK parameters for animals are present. |
| popPK | Della_1998 | irrelevant | 2 | 0 | This is a PK/PD modelling review/methods paper about buspirone's behavioural effects, not disposition parameters for the target drug, and no numeric PK values appear in the evidence. |
| popPK | Dou_2025 | relevant | 7 | 3 | Population PK/PD model of VGB-R04 in mice and cynomolgus monkeys is described, but numeric parameter values (CL, V, etc.) are not shown in the provided evidence. |
| popPK | Hai_2016 | irrelevant | 0 | 0 | This is a molecular fMRI study of serotonin transport dynamics, not a pharmacokinetic study of a drug with disposition parameters; no PK values are reported. |
| popPK | Kristensen_2022 | irrelevant | 3 | 4 | This is a physiological multi-compartment model of isoflurane uptake/elimination in reptiles, not a population-PK disposition study with CL/V/Q/ka parameters; some numeric equilibration times and model inputs are present but no standard PK parameters. |
| popPK | Laurijssens_1996 | irrelevant | 2 | 0 | A review of PK/PD relationships for benzodiazepines with no original numeric disposition parameters reported in the evidence. |
| popPK | Lee_2019 | irrelevant | 2 | 0 | Review-style text discussing PK/PD index concepts with no numeric disposition parameters for polymyxins; no values present. |
| popPK | Li_2010 | irrelevant | 3 | 4 | A narrative review of posaconazole (a different drug) with only scattered human PK values, not a population-PK study of animals. |
| popPK | Meek_2002 | irrelevant | 3 | 0 | A PBPK model for chloroform is mentioned, but no numeric PK parameters (CL, V, etc.) are provided in the evidence, and chloroform is the subject, not a named veterinary drug. |
| popPK | Mote_2022 | irrelevant | 0 | 0 | This is a microbiome/metabolomics study of fescue toxicosis in steers with no pharmacokinetic disposition parameters (CL, V, ka, half-life, or PK model) for any drug; only ergot alkaloid abundance trends are reported. |
| popPK | Nielsen_2013 | irrelevant | 2 | 0 | This is a review of PKPD modeling concepts for antibiotics with no original numeric disposition parameters for any drug in animals. |
| popPK | Patil_1996 | irrelevant | 0 | 0 | This is a general discussion of pharmacologic quantitation concepts (EC50, KA, LD50) with no PK disposition parameters or numeric values for any drug. |
| popPK | Perin_2020 | irrelevant | 2 | 2 | The paper is a population-PK study of benznidazole (a different drug) in mice, not the subject drug, and no numeric parameter values appear in the evidence. |
| popPK | Ponto_1990 | irrelevant | 2 | 1 | A narrative review of furosemide pharmacokinetics with no numeric parameter values reported in the evidence. |
| popPK | Porzio_2013 | irrelevant | 2 | 0 | A review/perspective on preclinical popPK with no numeric disposition parameters for any drug. |
| popPK | Simeoni_2004 | irrelevant | 3 | 1 | This is a PK/PD tumor growth modeling paper; no numeric PK disposition parameters (CL, V, ka, half-life) for any drug are present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
