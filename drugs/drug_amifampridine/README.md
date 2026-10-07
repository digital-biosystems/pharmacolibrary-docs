<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;amifampridine&quot;}]"></div>

# amifampridine

- **generic name:** amifampridine
- **ATC codes:** `N07XX05`
- **DrugBank:** [DB11640](https://go.drugbank.com/drugs/DB11640) · **PubChem:** not captured
- **molar mass:** 109.132 g/mol (C5H7N3) — DrugBank
- **groups:** approved

## About

Amifampridine is a potassium channel blocker used to treat Lambert-Eaton myasthenic syndrome and myasthenia gravis. It is approved and authorised in the European Union, where two products are on the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411707](https://www.wikidata.org/wiki/Q411707) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 3,4-diaminopyridine (amifampridine) | metabolite | 109.132 | C5H7N3 | PubChem | [5918](https://pubchem.ncbi.nlm.nih.gov/compound/5918) | Thakkar_2017 |
| 3-N-acetyl-3,4-diaminopyridine (3-Ac DAP) | metabolite | 151.169 | C7H9N3O | PubChem | [11593462](https://pubchem.ncbi.nlm.nih.gov/compound/11593462) | Thakkar_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:19 | 3:10 | 1/0/0 | 1/0/0 | 0/0/0 | 194,347/10,933 | ollama / glm-5.3-flash | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Thakkar_2017_reference](drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference.md) | model (no simulator) | 1-compartment, oral | 7 (+1 cov.) | Thakkar N et al., Population Pharmacokinetics/Pharmacodyn…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Thakkar_2017_3TUG](drugs/drug_amifampridine/pd_Thakkar_2017_3TUG.md) | Triple Timed Up & Go ← 3,4-DAP · direct Emax (saturable) effect | model (no simulator) | Thakkar N et al., Population Pharmacokinetics/Pharmacodyn…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=amifampridine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | `NAT1` substrate | DrugBank actor |
| metabolism | liver | `NAT1` substrate, `NAT2` substrate | DrugBank actor |
| metabolism | small intestine | `NAT2` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: KCNA1 (blocker).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 51 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdul-Mutakabbir_2020 | irrelevant | 0 | 0 | This is an in vitro PK/PD study of dalbavancin, vancomycin, daptomycin, and cefazolin against S. aureus; amifampridine is not mentioned at all. |
| popPK | Barber_2015 | irrelevant | 0 | 0 | Study concerns ceftaroline/daptomycin/rifampin against MRSA in an in vitro model; amifampridine is not involved. |
| popPK | Bellissant_1994 | irrelevant | 0 | 0 | This is a PK/PD study of pinacidil, not amifampridine; no amifampridine disposition parameters are reported. |
| popPK | Bulkeley_2021 | irrelevant | 0 | 0 | This is a bull sperm mitochondrial function study; amifampridine is not involved and no PK parameters are reported. |
| popPK | Dehdab_2024 | irrelevant | 0 | 0 | This is an imaging study on AI denoising in TIPSS CBCT; no amifampridine PK parameters are reported anywhere. |
| popPK | Ferguson_2019 | irrelevant | 0 | 0 | This is an epidemiological study of organophosphate pesticide metabolites (DAPs) and fetal growth; amifampridine is not mentioned and no PK parameters for it exist. |
| popPK | Hall_2016 | irrelevant | 0 | 0 | Study of daptomycin/fosfomycin against VRE; amifampridine is not mentioned and no PK parameters for it appear. |
| popPK | Kebriaei_2023 | irrelevant | 0 | 0 | This is an in vitro PK/PD study of dalbavancin and daptomycin against S. aureus; amifampridine is not mentioned at all. |
| popPK | Kunz_2024 | irrelevant | 0 | 0 | In vitro/ex vivo phage-antibiotic synergy study of daptomycin against MRSA with no amifampridine or PK parameters. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | Study on phthalate ester toxicity in algae; no amifampridine PK data at all. |
| popPK | Mancheño-Losa_2025 | irrelevant | 0 | 0 | This is an in vitro PK/PD study of ceftobiprole and daptomycin against MRSA biofilm; amifampridine is not mentioned and no amifampridine PK parameters exist. |
| popPK | Sanders_2017 | irrelevant | 0 | 0 | This is a radiation exposure study for hip injections with no amifampridine PK data whatsoever. |
| popPK | Smith_2015 | irrelevant | 0 | 0 | In vitro PK/PD study of daptomycin and β-lactams against enterococci; amifampridine is not involved and no disposition parameters are reported. |
| popPK | Warman_1994 | irrelevant | 0 | 0 | This is a computational electrophysiology model of hippocampal neurons with no amifampridine PK data. |
| popPK | Yamada_2020 | irrelevant | 0 | 0 | This is a population PK study of daptomycin, not amifampridine; no amifampridine parameters are reported. |
| popPK | du_2019 | irrelevant | 0 | 0 | Study of prostatic artery embolization outcomes; no amifampridine PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:17 UTC</sub>
