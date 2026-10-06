<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;bretylium tosilate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BretyliumTosilate_Kamath1981_reference&quot;,&quot;label&quot;:&quot;Kamath_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bretylium_tosilate/BretyliumTosilate_Kamath1981_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# bretylium tosilate

- **generic name:** bretylium tosilate
- **ATC codes:** `C01BD02`
- **DrugBank:** [DB01158](https://go.drugbank.com/drugs/DB01158) · **PubChem:** [CID 2431](https://pubchem.ncbi.nlm.nih.gov/compound/2431)
- **molar mass:** 243.163 g/mol (C11H17BrN) — DrugBank
- **groups:** approved

## About

Bretylium tosilate is a class III antiarrhythmic used to treat ventricular fibrillation and heart conduction disease. It is an approved drug, though it is no longer widely used in many countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420026](https://www.wikidata.org/wiki/Q420026) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bretylium_tosilate (bretylium) | metabolite | 243.163 | C11H17BrN | DrugBank | [2431](https://pubchem.ncbi.nlm.nih.gov/compound/2431) | Garrett_1982, Kamath_1981, Narang_1980, Rapeport_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 03:16 | 8:48 | 1/2/1 | 1/0/0 | 0/0/0 | 129,219/26,049 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kamath_1981_reference](drugs/drug_bretylium_tosilate/BretyliumTosilate_Kamath1981_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Kamath BL et al., Pharmacokinetics of [14C]bretylium tosy…, Journal of pharmaceutical s… (1981) | [10.1002/jps.2600700623](https://doi.org/10.1002/jps.2600700623) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Garrett_1982_reference](drugs/drug_bretylium_tosilate/BretyliumTosilate_Garrett1982_reference.md) | — | 1-compartment (no model) | 5 | Garrett ER et al., Bretylium pharmacokinetics and bioavail…, Biopharmaceutics & drug dis… (1982) | [10.1002/bdd.2510030206](https://doi.org/10.1002/bdd.2510030206) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.091). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Narang_1980_reference](drugs/drug_bretylium_tosilate/BretyliumTosilate_Narang1980_reference.md) | — | 1-compartment (no model) | 2 | Narang PK et al., Pharmacokinetics of bretylium in man af…, Journal of pharmacokinetics… (1980) | [10.1007/BF01059384](https://doi.org/10.1007/BF01059384) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Rapeport_1985_reference](drugs/drug_bretylium_tosilate/BretyliumTosilate_Rapeport1985_reference.md) | — | 1-compartment (no model) | 1 | Rapeport WG, Clinical pharmacokinetics of bretylium, Clinical pharmacokinetics (1985) | [10.2165/00003088-198510030-00004](https://doi.org/10.2165/00003088-198510030-00004) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sakuta_1993_KRN2391_induced_K_current](drugs/drug_bretylium_tosilate/pd_Sakuta_1993_KRN2391_induced_K_current.md) | KRN2391-induced K+ current ← bretylium · direct Emax (saturable) effect | — | Sakuta H et al., Antiarrhythmic drugs, clofilium and cib…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13655.x](https://doi.org/10.1111/j.1476-5381.1993.tb13655.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sakuta_1993_Y_26763_induced_K_current](drugs/drug_bretylium_tosilate/pd_Sakuta_1993_Y_26763_induced_K_current.md) | Y-26763-induced K+ current ← bretylium · direct Emax (saturable) effect | — | Sakuta H et al., Antiarrhythmic drugs, clofilium and cib…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13655.x](https://doi.org/10.1111/j.1476-5381.1993.tb13655.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bretylium_tosilate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRB1 (target), ATP1A1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Garrett_1982.pdf` | Garrett ER et al., Bretylium pharmacokinetics and bioavail…, Biopharmaceutics & drug dis… (1982) | popPK | 10 | [10.1002/bdd.2510030206](https://doi.org/10.1002/bdd.2510030206) | [7104462](https://pubmed.ncbi.nlm.nih.gov/7104462) | The paper reports quantitative pharmacokinetic parameters (half-life, clearance, volume of distribution) for bretylium tosylate in humans and dogs, with all numeric values explicitly present in the abstract. |
| `Kamath_1981.pdf` | Kamath BL et al., Pharmacokinetics of [14C]bretylium tosy…, Journal of pharmaceutical s… (1981) | popPK | 10 | [10.1002/jps.2600700623](https://doi.org/10.1002/jps.2600700623) | [7252812](https://pubmed.ncbi.nlm.nih.gov/7252812) | The study reports quantitative pharmacokinetic parameters (Vd, CL, half-life) for bretylium tosylate in rats, with all numeric values explicitly provided in the text. |
| `Kamath_1982.pdf` | Kamath BL et al., Pharmacokinetics of bretylium in dogs a…, Journal of pharmaceutical s… (1982) | popPK | 10 | [10.1002/jps.2600711129](https://doi.org/10.1002/jps.2600711129) | [7175729](https://pubmed.ncbi.nlm.nih.gov/7175729) | The study reports quantitative two-compartment pharmacokinetic parameters (half-lives, volumes, clearances) for bretylium tosylate in dogs. |
| `Narang_1980.pdf` | Narang PK et al., Pharmacokinetics of bretylium in man af…, Journal of pharmacokinetics… (1980) | popPK | 10 | [10.1007/BF01059384](https://doi.org/10.1007/BF01059384) | [7431227](https://pubmed.ncbi.nlm.nih.gov/7431227) | The study reports quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance) for bretylium tosylate in humans. |
| `Rapeport_1985.pdf` | Rapeport WG, Clinical pharmacokinetics of bretylium, Clinical pharmacokinetics (1985) | popPK | 9 | [10.2165/00003088-198510030-00004](https://doi.org/10.2165/00003088-198510030-00004) | [3893841](https://pubmed.ncbi.nlm.nih.gov/3893841) | The abstract provides specific quantitative pharmacokinetic parameters for bretylium in humans, including bioavailability, clearance, half-life, and volume of distribution. |
| `Wilson_2004.pdf` | Wilson TE et al., Effect of age on cutaneous vasoconstric…, American journal of physiol… (2004) | pd | 4 | [10.1152/ajpregu.00467.2004](https://doi.org/10.1152/ajpregu.00467.2004) | [15475505](https://www.ncbi.nlm.nih.gov/pubmed/15475505) | metadata signals extractable PD data (EC50) |
| `Yamreudeewong_2003.pdf` | Yamreudeewong W et al., Potentially significant drug interactio…, Drug safety (2003) | pgx | 7 | [10.2165/00002018-200326060-00004](https://doi.org/10.2165/00002018-200326060-00004) | [12688833](https://www.ncbi.nlm.nih.gov/pubmed/12688833) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-06T03:08:18.490424+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aussel_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phospholipid metabolism in Jurkat T cells, not a pharmacokinetic study reporting disposition parameters for bretylium. |
| popPK | Hagelüken_1995 | irrelevant | 0 | 0 | The study is a mechanistic investigation of G-protein activation in cell membranes and does not report any pharmacokinetic parameters for bretylium tosylate. |
| PD | Hagelüken_1995 | not_relevant | 0 | 0 | The paper reports that bretylium tosylate did not increase GTP hydrolysis, providing no numeric PD parameters or concentration-effect relationship for the drug. |
| popPK | Sakuta_1993 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment measuring IC50 values for K+ channel blockade in Xenopus oocytes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Wilson_2004 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Wilson_2004 | not_relevant | 0 | 0 | The paper investigates the effect of age on cutaneous vasoconstrictor responses to norepinephrine, not bretylium tosilate. |
| PGx | Yamreudeewong_2003 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions for class III antiarrhythmics but does not report any pharmacogenomic effects (gene variants) on the PK or PD of bretylium tosylate. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 03:08 UTC</sub>
