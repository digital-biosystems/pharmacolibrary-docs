<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Pyronaridine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pyronaridine_Ayyoub2015_reference&quot;,&quot;label&quot;:&quot;Ayyoub_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyronaridine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyronaridine_Tan2009_reference&quot;,&quot;label&quot;:&quot;Tan_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Tan2009_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Pyronaridine

- **generic name:** Pyronaridine
- **ATC codes:** `P01BF06`
- **DrugBank:** [DB12975](https://go.drugbank.com/drugs/DB12975) · **PubChem:** [CID 5485198](https://pubchem.ncbi.nlm.nih.gov/compound/5485198)
- **molar mass:** 518.06 g/mol (C29H32ClN5O2) — DrugBank
- **groups:** investigational

## About

Pyronaridine is an antimalarial drug used to treat malaria, available as a combination with an artemisinin derivative. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7263674](https://www.wikidata.org/wiki/Q7263674) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pyronaridine | parent | 518.06 | C29H32ClN5O2 | DrugBank | [5485198](https://pubchem.ncbi.nlm.nih.gov/compound/5485198) | Ayyoub_2015, Kang_2024 |
| artesunate | metabolite | 384.425 | C19H28O8 | PubChem | [6917864](https://pubchem.ncbi.nlm.nih.gov/compound/6917864) | Kang_2024 |
| dihydroartemisinin | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Kang_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:35 | 11:35 | 3/1/0 | 2/0/1 | 0/0/0 | 489,642/40,827 | ollama / glm-5.3-flash | 11 | 0/11 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ayyoub_2015_reference](drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 (+2 cov.) | Ayyoub A et al., Population Pharmacokinetics of Pyronari…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.02004-15](https://doi.org/10.1128/AAC.02004-15) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chairat_2018_reference](drugs/drug_pyronaridine/Pyronaridine_Chairat2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Chairat K et al., Enantiospecific pharmacokinetics and dr…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky297](https://doi.org/10.1093/jac/dky297) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tan_2009_reference](drugs/drug_pyronaridine/Pyronaridine_Tan2009_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Tan B et al., Population pharmacokinetics of artesuna…, Malaria journal (2009) | [10.1186/1475-2875-8-304](https://doi.org/10.1186/1475-2875-8-304) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Kang_2024_reference](drugs/drug_pyronaridine/Pyronaridine_Kang2024_reference.md) | — | parent + metabolite (no model) | 10 | Kang DW et al., Inter-Species Pharmacokinetic Modeling…, International journal of mo… (2024) | [10.3390/ijms25136998](https://doi.org/10.3390/ijms25136998) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Alin_1990_Growth_inhibition_of_Plasmodium_falciparum](drugs/drug_pyronaridine/pd_Alin_1990_Growth_inhibition_of_Plasmodium_falciparum.md) | Growth inhibition of Plasmodium falciparum ← pyronaridine · direct sigmoid Emax (Hill) effect | — | Alin MH et al., In vitro activity of artemisinin, its d…, Transactions of the Royal S… (1990) | [10.1016/0035-9203(90)90129-3](https://doi.org/10.1016/0035-9203(90)90129-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">in vitro</span> | [Gendrot_2020_SARS_CoV_2_replication_RT_PCR](drugs/drug_pyronaridine/pd_Gendrot_2020_SARS_CoV_2_replication_RT_PCR.md) | SARS-CoV-2 replication (RT-PCR) ← pyronaridine · direct sigmoid Emax (Hill) effect | — | Gendrot M et al., Antimalarial drugs inhibit the replicat…, Travel medicine and infecti… (2020) | [10.1016/j.tmaid.2020.101873](https://doi.org/10.1016/j.tmaid.2020.101873) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Felices_2025_QTcF](drugs/drug_pyronaridine/pd_Felices_2025_QTcF.md) | Change from baseline in Fridericia-corrected QT interval (ΔQTcF) ← pyronaridine · direct linear effect | model (no simulator) | Felices M et al., Concentration-Response Analysis of the…, Clinical and translational… (2025) | [10.1111/cts.70305](https://doi.org/10.1111/cts.70305) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alin_1990 | irrelevant | 0 | 0 | In vitro antimalarial potency study (EC50) with no pharmacokinetic disposition parameters for pyronaridine. |
| popPK | Anantpadma_2019 | irrelevant | 0 | 0 | In vitro antiviral screening study; pyronaridine is only a test compound with EC50/IC50 values, no PK disposition parameters. |
| popPK | Chairat_2018 | irrelevant | 2 | 3 | The population-PK models and parameters (CL/F, V/F) are for primaquine and carboxyprimaquine; pyronaridine/artesunate appears only as a co-administered interaction probe, with no pyronaridine disposition parameters reported. |
| popPK | Ekins_2015 | irrelevant | 0 | 0 | This is a drug-discovery/efficacy study (pyronaridine as an antichagasic hit, 85.2% efficacy in mice) with no PK parameters such as CL, V, or a PK model reported. |
| popPK | Felices_2025 | irrelevant | 2 | 2 | This is a concentration–QTc (PD) modeling study; PK data (Cmax, Tmax) are only cited as published elsewhere and no pyronaridine disposition parameters (CL, V, half-life with volume, population-PK model) are reported here. |
| popPK | Gendrot_2020 | irrelevant | 2 | 3 | In vitro SARS-CoV-2 study; pyronaridine PK values (Cmax 271 ng/ml, t1/2 33.5 d human; rat Cmax 223 ng/ml) are only cited from literature, not a PK study of pyronaridine itself. |
| popPK | Gendrot_2021 | irrelevant | 0 | 0 | In-vitro antiviral study of methylene blue; pyronaridine is only a co-administered comparator with no PK disposition parameters for it. |
| popPK | Gupta_2002 | irrelevant | 0 | 0 | In vitro drug-interaction assay against P. falciparum with no pharmacokinetic parameters for pyronaridine. |
| popPK | Lane_2019 | relevant | 7 | 3 | Pyronaridine PK was measured in BALB/c mice with non-compartmental analysis (t1/2, Cmax, AUC, CL/F, V/F), but the numeric values are in Table 2, which is not included in the evidence. |
| popPK | Tan_2009 | irrelevant | 0 | 0 | This is a population PK study of artesunate and its metabolite DHA; pyronaridine is only a co-administered comparator drug, and no pyronaridine PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:25 UTC</sub>
