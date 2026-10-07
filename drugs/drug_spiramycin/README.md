<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;spiramycin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Spiramycin_Elazab2021_iv&quot;,&quot;label&quot;:&quot;Elazab_2021_iv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_spiramycin/Spiramycin_Elazab2021_iv.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Spiramycin_Elazab2021_oral&quot;,&quot;label&quot;:&quot;Elazab_2021_oral&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_spiramycin/Spiramycin_Elazab2021_oral.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# spiramycin

- **generic name:** spiramycin
- **ATC codes:** `J01FA02`, `J01RA04`
- **DrugBank:** [DB06145](https://go.drugbank.com/drugs/DB06145) · **PubChem:** [CID 6440717](https://pubchem.ncbi.nlm.nih.gov/compound/6440717)
- **molar mass:** 843.065 g/mol (C43H74N2O14) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Spiramycin is a macrolide antibiotic used to treat bacterial infections and has also been used as a coccidiostat. It remains an approved antibacterial for systemic use, available alone and in combination with other antibiotics, though it has been withdrawn in some markets.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422265](https://www.wikidata.org/wiki/Q422265) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| spiramycin | parent | 843.065 | C43H74N2O14 | DrugBank | [6440717](https://pubchem.ncbi.nlm.nih.gov/compound/6440717) | Elazab_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:25 | 1:23 | 2/0/0 | 1/0/0 | 0/0/0 | 115,878/6,644 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span> | [Elazab_2021_iv](drugs/drug_spiramycin/Spiramycin_Elazab2021_iv.md) | ▶ model + simulator | 1-compartment, IV | 7 | Elazab ST et al., Pharmacokinetic/Pharmacodynamic Modelin…, Pathogens (Basel, Switzerla… (2021) | [10.3390/pathogens10101238](https://doi.org/10.3390/pathogens10101238) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span> | [Elazab_2021_oral](drugs/drug_spiramycin/Spiramycin_Elazab2021_oral.md) | ▶ model + simulator | 1-compartment, IV | 9 | Elazab ST et al., Pharmacokinetic/Pharmacodynamic Modelin…, Pathogens (Basel, Switzerla… (2021) | [10.3390/pathogens10101238](https://doi.org/10.3390/pathogens10101238) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Halling-Sørensen_2000_Algal_growth](drugs/drug_spiramycin/pd_Halling_S_rensen_2000_Algal_growth.md) | Algal growth ← spiramycin · inhibition effect | — | Halling-Sørensen B, Algal toxicity of antibacterial agents…, Chemosphere (2000) | [10.1016/s0045-6535(99)00445-2](https://doi.org/10.1016/s0045-6535(99)00445-2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=spiramycin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Friis_1991.pdf` | Friis C et al., Respiratory tract distribution and bioa…, American journal of veterin… (1991) | popPK | 10 | not captured | [1928908](https://pubmed.ncbi.nlm.nih.gov/1928908) | The study reports quantitative pharmacokinetic parameters for spiramycin in calves, including an open 3-compartment model, elimination half-life (28.7 h), and volume of distribution (23.5 L/kg). |
| `Renard_1996.pdf` | Renard L et al., Pharmacokinetic-pharmacodynamic model f…, Journal of veterinary pharm… (1996) | popPK | 10 | [10.1111/j.1365-2885.1996.tb00019.x](https://doi.org/10.1111/j.1365-2885.1996.tb00019.x) | [8735415](https://pubmed.ncbi.nlm.nih.gov/8735415) | The paper reports a compartmental pharmacokinetic model for spiramycin in cows, but the specific numeric parameter values are not present in the provided text. |
| `Schoondermark-Van_1994.pdf` | Schoondermark-Van de Ven E et al., Pharmacokinetics of spiramycin in the r…, Antimicrobial agents and ch… (1994) | popPK | 8 | [10.1128/AAC.38.9.1922](https://doi.org/10.1128/AAC.38.9.1922) | [7810999](https://pubmed.ncbi.nlm.nih.gov/7810999) | The study reports a two-compartment model and qualitative distribution/transfer data in rhesus monkeys, but specific numeric PK parameters (CL, V, t1/2) are not provided in the text, likely residing in tables or figures not included. |

<sub>queue written 2026-10-07T11:24:26.663434+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biagini_2006 | irrelevant | 0 | 0 | The study is an in vitro hepatotoxicity screening (EC50) and does not report pharmacokinetic disposition parameters for spiramycin. |
| popPK | Halling-Sørensen_2000 | irrelevant | 0 | 0 | The study investigates the ecotoxicological effects of spiramycin on algae, not its pharmacokinetics in a biological host. |
| popPK | Isla_2005 | irrelevant | 1 | 0 | This is a review/simulation study evaluating PK/PD efficacy for 13 antibiotics, where spiramycin is included only as a comparator, and no original quantitative pharmacokinetic parameters (CL, V, etc.) for spiramycin are reported in the provided evidence. |
| popPK | Isla_2008 | irrelevant | 2 | 0 | This is a PK/PD analysis using simulated data based on "mean population pharmacokinetic parameters" of multiple drugs including spiramycin, but the specific numeric parameter values for spiramycin are not provided in the evidence (likely cited from other sources or in a table not included). |
| popPK | Liu_2012 | irrelevant | 0 | 0 | The study investigates the toxicity and effects of spiramycin on algae (Microcystis aeruginosa) in vitro, not its pharmacokinetics. |
| popPK | Nakajo_2025 | irrelevant | 0 | 0 | This is an epidemiological study estimating the incidence of Toxoplasma gondii infection using spiramycin prescription data, not a pharmacokinetic study reporting disposition parameters for spiramycin. |
| popPK | Renard_1993 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study modeling bacterial killing kinetics, not a pharmacokinetic study measuring disposition parameters (CL, V, t1/2) of spiramycin in a biological system. |
| popPK | Renard_1996 | relevant | 10 | 0 | The paper reports a compartmental pharmacokinetic model for spiramycin in cows, but the specific numeric parameter values are not present in the provided text. |
| popPK | Schoondermark-Van_1994 | relevant | 8 | 2 | The study reports a two-compartment model and qualitative distribution/transfer data in rhesus monkeys, but specific numeric PK parameters (CL, V, t1/2) are not provided in the text, likely residing in tables or figures not included. |
| popPK | Zhong_2021 | irrelevant | 0 | 0 | The study evaluates ecological toxicity (EC50) in algae and cyanobacteria, not pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:24 UTC</sub>
