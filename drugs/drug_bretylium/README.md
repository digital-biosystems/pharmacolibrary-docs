<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;Bretylium&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bretylium_Greenberg2022_reference&quot;,&quot;label&quot;:&quot;Greenberg_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bretylium/Bretylium_Greenberg2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bretylium_Kamath1981_reference&quot;,&quot;label&quot;:&quot;Kamath_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bretylium/Bretylium_Kamath1981_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Bretylium

- **generic name:** Bretylium
- **ATC codes:** `C01BD02`
- **DrugBank:** [DB01158](https://go.drugbank.com/drugs/DB01158) · **PubChem:** not captured
- **groups:** approved

## About

Bretylium is a class III antiarrhythmic agent used to treat ventricular fibrillation and heart conduction disease. It is an approved drug, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420026](https://www.wikidata.org/wiki/Q420026) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bretylium | parent | 243.168 | C11H17BrN+ | PubChem | [2431](https://pubchem.ncbi.nlm.nih.gov/compound/2431) | Garrett_1982, Kamath_1981, Narang_1980, Rapeport_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 03:07 | 17:57 | 2/1/2 | 1/0/0 | 0/0/0 | 373,482/48,537 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 5/7 | 4/3 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Greenberg_2022_reference](drugs/drug_bretylium/Bretylium_Greenberg2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Greenberg RG et al., Population Pharmacokinetics of Moxiflox…, Paediatric drugs (2022) | [10.1007/s40272-022-00493-3](https://doi.org/10.1007/s40272-022-00493-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kamath_1981_reference](drugs/drug_bretylium/Bretylium_Kamath1981_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Kamath BL et al., Pharmacokinetics of [14C]bretylium tosy…, Journal of pharmaceutical s… (1981) | [10.1002/jps.2600700623](https://doi.org/10.1002/jps.2600700623) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.357). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Garrett_1982_reference](drugs/drug_bretylium/Bretylium_Garrett1982_reference.md) | — | 1-compartment (no model) | 6 | Garrett ER et al., Bretylium pharmacokinetics and bioavail…, Biopharmaceutics & drug dis… (1982) | [10.1002/bdd.2510030206](https://doi.org/10.1002/bdd.2510030206) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Rapeport_1985_reference](drugs/drug_bretylium/Bretylium_Rapeport1985_reference.md) | — | 1-compartment (no model) | 2 | Rapeport WG, Clinical pharmacokinetics of bretylium, Clinical pharmacokinetics (1985) | [10.2165/00003088-198510030-00004](https://doi.org/10.2165/00003088-198510030-00004) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.091). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Narang_1980_reference](drugs/drug_bretylium/Bretylium_Narang1980_reference.md) | — | 1-compartment (no model) | 2 | Narang PK et al., Pharmacokinetics of bretylium in man af…, Journal of pharmacokinetics… (1980) | [10.1007/BF01059384](https://doi.org/10.1007/BF01059384) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sakuta_1993_KRN2391_induced_K_current](drugs/drug_bretylium/pd_Sakuta_1993_KRN2391_induced_K_current.md) | KRN2391-induced K+ current ← bretylium · direct Emax (saturable) effect | — | Sakuta H et al., Antiarrhythmic drugs, clofilium and cib…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13655.x](https://doi.org/10.1111/j.1476-5381.1993.tb13655.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sakuta_1993_Y_26763_induced_K_current](drugs/drug_bretylium/pd_Sakuta_1993_Y_26763_induced_K_current.md) | Y-26763-induced K+ current ← bretylium · direct Emax (saturable) effect | — | Sakuta H et al., Antiarrhythmic drugs, clofilium and cib…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13655.x](https://doi.org/10.1111/j.1476-5381.1993.tb13655.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bretylium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRB1 (target), ATP1A1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 53 matched, 31 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 5  ·  extracted 2  ·  needs_review 2  ·  rejected 1  ·  stale 5
- **scholar-agent fallback query used:** not captured

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Garrett_1982.pdf` | Garrett ER et al., Bretylium pharmacokinetics and bioavail…, Biopharmaceutics & drug dis… (1982) | popPK | 10 | [10.1002/bdd.2510030206](https://doi.org/10.1002/bdd.2510030206) | [7104462](https://pubmed.ncbi.nlm.nih.gov/7104462) | The abstract provides explicit quantitative pharmacokinetic parameters including terminal half-life, renal clearance, and volume of distribution for bretylium in humans. |
| `Kamath_1981.pdf` | Kamath BL et al., Pharmacokinetics of [14C]bretylium tosy…, Journal of pharmaceutical s… (1981) | popPK | 10 | [10.1002/jps.2600700623](https://doi.org/10.1002/jps.2600700623) | [7252812](https://pubmed.ncbi.nlm.nih.gov/7252812) | The study reports quantitative pharmacokinetic parameters (Vd, CL, half-life) for bretylium in rats, with all numeric values explicitly present in the text. |
| `Kamath_1982.pdf` | Kamath BL et al., Pharmacokinetics of bretylium in dogs a…, Journal of pharmaceutical s… (1982) | popPK | 10 | [10.1002/jps.2600711129](https://doi.org/10.1002/jps.2600711129) | [7175729](https://pubmed.ncbi.nlm.nih.gov/7175729) | The study reports quantitative two-compartment pharmacokinetic parameters (half-lives, volumes, clearances) for bretylium in dogs, with all values explicitly stated in the text. |
| `Narang_1980.pdf` | Narang PK et al., Pharmacokinetics of bretylium in man af…, Journal of pharmacokinetics… (1980) | popPK | 10 | [10.1007/BF01059384](https://doi.org/10.1007/BF01059384) | [7431227](https://pubmed.ncbi.nlm.nih.gov/7431227) | The abstract explicitly reports quantitative pharmacokinetic parameters including half-life, volume of distribution, and clearance for bretylium in humans. |
| `Rapeport_1985.pdf` | Rapeport WG, Clinical pharmacokinetics of bretylium, Clinical pharmacokinetics (1985) | popPK | 9 | [10.2165/00003088-198510030-00004](https://doi.org/10.2165/00003088-198510030-00004) | [3893841](https://pubmed.ncbi.nlm.nih.gov/3893841) | The abstract provides specific quantitative pharmacokinetic parameters for bretylium in humans, including bioavailability, clearance, half-life, and volume of distribution. |
| `Koide_1986.pdf` | Koide M et al., Characterization of xylamine binding to…, Journal of neurochemistry (1986) | pd | 4 | [10.1111/j.1471-4159.1986.tb00751.x](https://doi.org/10.1111/j.1471-4159.1986.tb00751.x) | [3746302](https://www.ncbi.nlm.nih.gov/pubmed/3746302) | metadata signals extractable PD data (IC50) |
| `Marino_1992.pdf` | Marino V et al., Extraneuronal uptake of noradrenaline i…, Naunyn-Schmiedeberg's archi… (1992) | pd | 4 | [10.1007/BF00165298](https://doi.org/10.1007/BF00165298) | [1448181](https://www.ncbi.nlm.nih.gov/pubmed/1448181) | metadata signals extractable PD data (IC50) |
| `Nedergaard_1986.pdf` | Nedergaard OA, Pre- and postsynaptic effects of indora…, Journal of cardiovascular p… (1986) | pd | 4 | [10.1097/00005344-198609000-00021](https://doi.org/10.1097/00005344-198609000-00021) | [2429075](https://www.ncbi.nlm.nih.gov/pubmed/2429075) | metadata signals extractable PD data (IC50) |
| `Yamreudeewong_2003.pdf` | Yamreudeewong W et al., Potentially significant drug interactio…, Drug safety (2003) | pgx | 7 | [10.2165/00002018-200326060-00004](https://doi.org/10.2165/00002018-200326060-00004) | [12688833](https://www.ncbi.nlm.nih.gov/pubmed/12688833) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-06T02:51:18.637056+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aussel_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phospholipid metabolism in Jurkat T cells, not a pharmacokinetic study of bretylium. |
| PD | Brown_1996 | not_relevant | 1 | 0 | The text is a review of future directions in resuscitation research that mentions bretylium only as a topic for future investigation, without providing any specific data, dose-response curves, or numeric PD parameters. |
| popPK | Dubey_2020 | irrelevant | 0 | 0 | The study evaluates gabapentin and ondansetron for postoperative nausea and vomiting and does not involve bretylium or its pharmacokinetics. |
| PD | Dubey_2020 | not_relevant | 0 | 0 | The paper studies Gabapentin and Ondansetron, not Bretylium, and reports only clinical incidence rates without any pharmacokinetic or pharmacodynamic modeling. |
| popPK | Greenberg_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for moxifloxacin, not bretylium. |
| PD | Greenberg_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics of Moxifloxacin in children and does not report any pharmacodynamic or exposure-response relationship for Bretylium. |
| popPK | Hagelüken_1995 | irrelevant | 0 | 0 | The study is a mechanistic investigation of G-protein activation in cell lines and does not report any pharmacokinetic parameters for bretylium. |
| PD | Hagelüken_1995 | not_relevant | 0 | 0 | The paper reports that bretylium tosylate did not increase GTP hydrolysis, providing no numeric PD parameters or concentration-effect relationship for the drug. |
| popPK | Hauseman_2025 | irrelevant | 0 | 0 | The paper focuses on the SHOC2-RAS interaction in cancer and does not involve the drug bretylium or its pharmacokinetics. |
| PD | Hauseman_2025 | not_relevant | 0 | 0 | The paper focuses on the discovery of SHOC2 inhibitors for RAS-mutant cancers and does not mention or analyze Bretylium. |
| popPK | Ki_2018 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of end-tidal carbon dioxide on cerebral oxygen saturation, not the pharmacokinetics of bretylium. |
| PD | Ki_2018 | not_relevant | 0 | 0 | The paper analyzes the pharmacodynamic relationship between end-tidal CO2 and cerebral oxygen saturation, not the drug Bretylium. |
| PD | Koide_1986 | not_relevant | 0 | 0 | The paper focuses on xylamine binding and transport kinetics; bretylium is only mentioned as a competitor in a failed experiment, with no PD or exposure-response data reported for it. |
| popPK | Koo_2015 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of propofol in patients with obstructive sleep apnea and does not involve bretylium. |
| PD | Kowey_1997 | not_relevant | 1 | 0 | The text is a review of intravenous amiodarone that only qualitatively mentions a dose-response relation and comparison to bretylium, without providing any numeric PD parameters or extractable concentration-effect data for bretylium. |
| popPK | Lee_2019 | irrelevant | 0 | 0 | The study characterizes the volume kinetics of Ringer's lactate solution, not the pharmacokinetics of bretylium. |
| PD | Lee_2019 | not_relevant | 0 | 0 | The paper analyzes the volume kinetics of Ringer's lactate solution, not the pharmacodynamics of Bretylium. |
| PD | Marino_1992 | not_relevant | 0 | 0 | The paper reports IC50 values for the inhibition of noradrenaline uptake by bretylium, which is a pharmacological binding/transport assay, not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| PD | Medow_2005 | not_relevant | 1 | 0 | Bretylium is used only as a qualitative pharmacological tool to block adrenergic receptors; no concentration-effect or dose-response data for Bretylium is reported. |
| PD | Nedergaard_1986 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of indoramin; bretylium is only mentioned as a comparator in a qualitative statement regarding clonidine's effect, with no numeric PD parameters or exposure-response relationship reported for bretylium. |
| popPK | Nourmandipour_2025 | irrelevant | 0 | 0 | The study focuses on morphine derivatives and does not involve bretylium. |
| PD | Nourmandipour_2025 | not_relevant | 0 | 0 | The paper studies morphine derivatives, not Bretylium, and reports ED50 values for analgesia rather than a pharmacodynamic model for the target drug. |
| popPK | Rehan_2023 | irrelevant | 0 | 0 | The paper describes a Sec61 inhibitor (KZR-8445) and its mechanism of action, with no mention of bretylium or its pharmacokinetics. |
| PD | Rehan_2023 | not_relevant | 0 | 0 | The paper describes a novel Sec61 inhibitor (KZR-8445) and does not mention or analyze Bretylium. |
| popPK | Sakuta_1993 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment measuring IC50 values for K+ channel blockade in Xenopus oocytes, not a pharmacokinetic study of bretylium disposition. |
| popPK | Shin_2014 | irrelevant | 0 | 0 | The study analyzes the pharmacodynamics of sevoflurane, not the pharmacokinetics of bretylium. |
| PD | Shin_2014 | not_relevant | 0 | 0 | The paper analyzes the pharmacodynamics of Sevoflurane, not Bretylium. |
| popPK | Wilson_2004 | irrelevant | 0 | 0 | Bretylium is used as a local pharmacological tool to block norepinephrine release, not as the subject of pharmacokinetic analysis. |
| PGx | Yamreudeewong_2003 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions for class III antiarrhythmics but does not report any pharmacogenomic effects (gene variants) on bretylium's PK or PD parameters. |
| popPK | Yoon_2020 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of remifentanil, not the pharmacokinetics of bretylium. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 02:51 UTC</sub>
